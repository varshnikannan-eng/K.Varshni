# Varshni - Personal Portfolio Website

A modern, clean, responsive personal portfolio website for **VARSHNI**, a first-year B.Tech Computer Science Engineering student and aspiring AI Engineer.

Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```
*(If using Bun: `bun install`)*

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
This generates the optimized static production files inside the `dist/` folder.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## Deployment Guide

This project is a high-performance **Client-Side SPA (Single Page Application)**. It does not require a Node.js backend runtime in production.

### Option 1: AI Studio Deploy (Google Cloud Run)
Click the **Deploy** button directly in the AI Studio interface. The deployment pipeline will automatically execute `npm run build` and serve the `dist/` directory via an optimized web server container.

### Option 2: Vercel
1. Import this repository in [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Install Command: `npm install`
6. Click **Deploy**.

### Option 3: Netlify
1. Import this repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy**.

### Option 4: GitHub Pages
1. Build the production files: `npm run build`
2. Push or deploy the contents of the `dist/` directory to your `gh-pages` branch.
*(The base path in `vite.config.ts` is configured with `./` so all assets load properly on GitHub Pages subpaths).*

---

## Common NPM Notes

- **`npm start`**: Because this is a static client-side Vite application, development is run using `npm run dev` and local production preview is run using `npm run preview`.
- **Peer Dependencies**: The dependencies in `package.json` are pinned and verified (`esbuild ^0.28.0` with `vite ^8.3.0`) ensuring zero `ERESOLVE` conflicts during `npm install` and `npm ci`.
