#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="$ROOT_DIR/app/glanceboard"
PKG_DIR="$ROOT_DIR/packaging/deb"
UI_DIR="$PKG_DIR/opt/glanceboard/ui"
OUT_DIR="$ROOT_DIR/packaging/out"

PACKAGE_NAME="$(awk -F': ' '$1 == "Package" {print $2}' "$PKG_DIR/DEBIAN/control")"
CONTROL_VERSION="$(awk -F': ' '$1 == "Version" {print $2}' "$PKG_DIR/DEBIAN/control")"

if [[ -n "${VERSION_OVERRIDE:-}" ]]; then
  PACKAGE_VERSION="${VERSION_OVERRIDE#v}"
elif [[ -n "${GITHUB_REF_NAME:-}" ]]; then
  PACKAGE_VERSION="${GITHUB_REF_NAME#v}"
else
  PACKAGE_VERSION="$CONTROL_VERSION"
fi

if [[ "$PACKAGE_VERSION" != "$CONTROL_VERSION" ]]; then
  sed -i.bak "s/^Version:.*/Version: ${PACKAGE_VERSION}/" "$PKG_DIR/DEBIAN/control"
  rm -f "$PKG_DIR/DEBIAN/control.bak"
fi

OUT_FILE="$OUT_DIR/${PACKAGE_NAME}_${PACKAGE_VERSION}.deb"

mkdir -p "$OUT_DIR"
mkdir -p "$UI_DIR"

pushd "$APP_DIR" >/dev/null
npm run build
popd >/dev/null

rm -rf "$UI_DIR"/*
cp -R "$APP_DIR/dist/glanceboard/." "$UI_DIR/"

chmod 0755 "$PKG_DIR/DEBIAN/postinst"
chmod 0755 "$PKG_DIR/usr/local/bin/glanceboard"

dpkg-deb --build "$PKG_DIR" "$OUT_FILE"

echo "Package created at: $OUT_FILE"
