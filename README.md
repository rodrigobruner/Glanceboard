# Glanceboard UI

Angular interface for an always-on dashboard, designed for landscape screens and kiosk-style use. The focus is to be simple, readable, and direct.

---

## Stack

- Angular 21
- TypeScript
- Tailwind CSS + DaisyUI
- Font Awesome
- Angular CLI

---

## Project structure

```
app/glanceboard/
├── src/
│   ├── app/
│   │   ├── components/           # UI components (datetime, carousel, sidebar, etc)
│   │   ├── app.ts                # Root component
│   │   ├── app.html              # Main layout
│   │   ├── app.css               # App styles
│   │   ├── app.routes.ts         # Routes
│   │   └── app.config.ts         # Global providers
│   ├── styles.css                # Global styles and theme
│   ├── main.ts                   # App bootstrap
│   └── index.html                # Base HTML
├── public/                       # Static assets
├── angular.json                  # Angular config
└── package.json                  # Scripts and dependencies
```
---

## Run locally (development)

### Requirements

- Node.js 18+ (recommended 20 LTS)
- npm 9+

### Steps

```bash
cd app/glanceboard
npm install
npm run start
```

Open `http://localhost:4200`.

---

## Production build

```bash
cd app/glanceboard
npm run build
```

Build output is in `app/glanceboard/dist/glanceboard/` and can be served by any static server.

---

## Run on Raspberry Pi (step by step)

### 1) Prepare the system

- Use an updated Raspberry Pi OS.
- Connect the Pi to the network and enable SSH (optional, but helpful).

### 2) Install Node.js

Install Node 20 LTS (or 18+). Example with nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
```

### 3) Install project dependencies

```bash
cd /path/to/Glanceboard/app/glanceboard
npm install
```

### 4) Build for production

```bash
npm run build
```

### 5) Serve the static files

Simple option with `serve`:

```bash
npm install -g serve
serve -s dist/glanceboard -l 4200
```

Open on the Raspberry Pi: `http://localhost:4200`.

Alternative (no global install):

```bash
cd dist/glanceboard
python3 -m http.server 4200
```

### 6) Fullscreen (kiosk) mode

Open Chromium in fullscreen:

```bash
chromium-browser --kiosk http://localhost:4200
```

---

## License

BSD.
