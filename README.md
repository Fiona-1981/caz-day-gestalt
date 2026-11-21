# Caz Day Therapy

Website for Caz Day, a UKCP-registered Gestalt therapist, live at
https://cazdaytherapy.com. It started as a voluntary project, built from my
hand-made-by-wiggins boilerplate.

It's a plain static site: HTML, CSS and a little JavaScript, with no build step.

## Structure

Everything the browser needs is in `public/`. Files at the repo root (this
README, `.gitignore`, `.vscode/`) are for development only and aren't deployed.

- `public/index.html` – home page (About Me)
- `public/pages/` – Testimonials, Articles/Books/Blogs, Appointments
- `public/js/menu.js` – opens and closes the mobile menu
- `public/css/style.css` – all styles
- `public/images/` – logo, photos, favicon

The header and footer use root-relative links (`/pages/...`), so `public/` must
be served as the root of a domain, not from a subfolder or opened as a file.

## Why the header and footer are copied into every page

The header and footer HTML is written out in full in each of the four pages.
**If you change either one, make the same change in all four pages.** The
headers are identical except for one thing: each page's own menu link has
`aria-current="page"`, so screen readers announce it as the current page. Keep
that on the right link if you copy a header from one page to another.

They used to be injected by JavaScript as custom elements, so they were written
only once. That meant visitors got no navigation if JavaScript failed, and the
page jumped as the header appeared. The other options considered were:

- **A static site generator such as Astro or Eleventy.** These let you write the
  header and footer once and copy them into each page when the site is built.
  But they need Node.js, a build step before every deploy, and ongoing
  dependency updates.
- **Copying the header and footer into each page (chosen).** The site is four
  pages and rarely changes, so editing four files on the odd occasion the menu
  changes is a small cost. In return the site stays plain HTML and CSS with no
  tools, no build step and almost no JavaScript, and `public/` can be uploaded
  exactly as it is.

If the site grows, for example with regular blog posts, it's worth revisiting
a static site generator.

## Running locally

From the `public/` folder:

```
cd public
python3 -m http.server 8000
```

Then open http://localhost:8000/index.html. VS Code's Live Server (port 5502)
also works if `"liveServer.settings.root": "/public"` is set in
`.vscode/settings.json`.

## Deploying

The site is hosted on cPanel. Upload the *contents* of `public/` (not the
`public` folder itself) to `public_html` with the File Manager, keeping the same
folder structure. The pages, `style.css` and `menu.js` depend on each other, so
upload any changed ones together.

The server's `.htaccess` isn't in this repo. It redirects http and www to
https://cazdaytherapy.com, and has a cPanel-generated PHP block that shouldn't
be edited. Download a copy before changing it.

## Privacy

The site sets no cookies and loads no analytics. The only third-party request
is the Font Awesome 4.7 stylesheet from cdnjs, used for the mobile menu icon.
Maps are plain links to Google Maps rather than embeds, so nothing loads from
Google until a visitor clicks. Please keep it that way, or add a consent step.
