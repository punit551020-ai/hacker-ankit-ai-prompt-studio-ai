# HACKER ANKIT — AI Image Prompt Studio

A GitHub Pages-ready static website with **600 ready-to-copy AI image prompts**.

## Features
- Full-screen animated intro before the library opens
- 600 prompt cards (not 10–15)
- 600 local SVG preview images stored in `assets/previews/`
- Search, category filters, and copy-to-clipboard
- Responsive design for desktop and mobile
- No backend, database, API key, or build step
- Works with GitHub Pages

## Run locally
Open `index.html` in a browser. For the most reliable local test, use VS Code Live Server.

## Publish on GitHub Pages
1. Create a public GitHub repository.
2. Upload `index.html`, `style.css`, `app.js`, `prompts.json`, and the `assets` folder.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select your main branch and `/root`.
5. Save and wait for GitHub Pages to publish.

## Important note
The included preview images are lightweight generated SVG style previews. They are intentionally stored locally so the public GitHub site does not depend on an image-hosting service. The prompt text is written to describe the corresponding visual style, but no prompt can guarantee pixel-identical output across ChatGPT, Gemini, or other image models.
