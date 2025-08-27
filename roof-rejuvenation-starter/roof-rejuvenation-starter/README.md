# Roof Rejuvenation Landing (Vite + React + Tailwind)

## Run locally
1) Install Node 18+
2) `npm install`
3) `npm run dev`  → open the URL shown

## Deploy (Cloudflare Pages)
- Build command: `npm run build`
- Output directory: `dist`

## Deploy (Netlify)
- New site from Git → pick repo
- Build command: `npm run build`
- Publish directory: `dist`

## Netlify Forms (optional)
Add `name="contact" data-netlify="true"` to your `<form>` and include a hidden input:
`<input type="hidden" name="form-name" value="contact" />`

## Web3Forms (optional, for Cloudflare Pages)
Set your form `action` to their endpoint and include your access key.

## Notes
- All copy is original and generic; replace placeholders with your brand, claims, and verified warranty text.
- This project uses Tailwind; no external UI kit required.
