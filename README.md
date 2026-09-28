# Caz Day Therapy

Website for Caz Day, a UKCP-registered Gestalt therapist, live at
https://cazdaytherapy.com. It started as a voluntary project, built from my
hand-made-by-wiggins boilerplate.

It's a plain static site: HTML, CSS and a little JavaScript, with no build step.

## Structure

- `index.html` – home page (About Me)
- `pages/` – Testimonials, Articles/Books/Blogs, Appointments
- `js/header.js`, `js/footer.js` – shared header and footer, used on every page
  as `<header-component>` and `<footer-component>`
- `css/style.css` – all styles
- `images/` – logo, photos, favicon

The header and footer use root-relative links (`/pages/...`), so the site must
be served from the root of a domain, not from a subfolder or opened as a file.

## Running locally

From the project folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000/index.html. VS Code's Live Server (port 5502)
also works if this folder is opened as the workspace root.

## Deploying

The site is hosted on cPanel. Upload changed files to `public_html` with the
File Manager, keeping the same folder structure. The header, footer and pages
depend on each other, so upload them together.

The server's `.htaccess` isn't in this repo. It redirects http and www to
https://cazdaytherapy.com, and has a cPanel-generated PHP block that shouldn't
be edited. Download a copy before changing it.

## Privacy

The site sets no cookies and loads no analytics. The only third-party request
is the Font Awesome 4.7 stylesheet from cdnjs, used for the mobile menu icon.
Maps are plain links to Google Maps rather than embeds, so nothing loads from
Google until a visitor clicks. Please keep it that way, or add a consent step.
