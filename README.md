# Gorilla Tagging Website

Static policy website for **Gorilla Tagging**, with these routes:

- `/`
- `/privacy-policy/`
- `/terms-of-use/`

## Files

```
gorilla-tagging-website/
  index.html
  privacy-policy/index.html
  terms-of-use/index.html
  assets/style.css
  assets/site.js
  assets/logo.svg
  assets/favicon.svg
  robots.txt
```

## Preview locally

You can double-click `index.html` and it will still load the CSS now.

For the real slash URLs, run a tiny local server from inside this folder:

```bash
python3 -m http.server 8080
```

Then open:

```
http://localhost:8080/
http://localhost:8080/privacy-policy/
http://localhost:8080/terms-of-use/
```

## Before publishing

No contact email or hard-coded website domain is included. Add your own contact method/domain later only if you want one.

These pages are a strong starting template, but policies and terms are legal documents. Have them reviewed before submitting the game to Meta/Horizon/App Lab/Steam or any other store.
