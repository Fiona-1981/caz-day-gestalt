# Caz Day Therapy

Website for Caz Day, a UKCP-registered Gestalt therapist, live at
https://cazdaytherapy.com. It is a voluntary project, built from my
hand-made-by-wiggins boilerplate.

It's a plain static site: HTML, CSS and a little JavaScript, with no build step.

## Structure

Everything the browser needs is in `public/`. Files at the repo root (this
README, `.gitignore`, `.vscode/`) are for development only and aren't deployed.

- `public/index.html` – home page (About Me)
- `public/pages/` – Testimonials, Articles/Books/Blogs, Appointments
- `public/404.html` – "Page not found" page, shown for any unknown address
- `public/js/menu.js` – opens and closes the mobile menu
- `public/css/style.css` – all styles
- `public/images/` – logo, photos, favicon

The header and footer use root-relative links (`/pages/...`), so `public/` must
be served as the root of a domain, not from a subfolder or opened as a file.

`404.html` can be shown at any address, however deep (e.g.
`/pages/old/thing.html`), so every path in it, including the stylesheet,
script and favicon, must start with `/`. Relative paths like `../css/style.css`
would leave it unstyled at deeper addresses.

## Why the header and footer are copied into every page

The header and footer HTML is written out in full in each of the four pages and
in `404.html`. **If you change either one, make the same change in all five
files.** The headers are identical except for one thing: each page's own menu
link has `aria-current="page"`, so screen readers announce it as the current
page (`404.html` has none). Keep that on the right link if you copy a header
from one page to another.

They used to be injected by JavaScript as custom elements, so they were written
only once. That meant visitors got no navigation if JavaScript failed, and the
page jumped as the header appeared. The other options considered were:

- **A static site generator such as Astro or Eleventy.** These let you write the
  header and footer once and copy them into each page when the site is built.
  But they need Node.js, a build step before every deploy, and ongoing
  dependency updates.
- **Copying the header and footer into each page (chosen).** The site is four
  pages and rarely changes, so editing a handful of files on the odd occasion
  the menu changes is a small cost. In return the site stays plain HTML and CSS with no
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

On cPanel, unknown addresses show the server's own error page unless
`.htaccess` contains `ErrorDocument 404 /404.html`. On Cloudflare Pages,
`404.html` is used automatically. Without it, Pages would serve the home page
for every unknown address. On Cloudflare Workers, set
`not_found_handling = "404-page"` for it to be used.

## Privacy

The site sets no cookies, loads no analytics and makes no third-party requests:
everything is served from the site itself. The mobile menu icon is an inline
SVG (Font Awesome 4.7's "bars" icon, SIL OFL 1.1) rather than an icon font from
a CDN. Maps are plain links to Google Maps rather than embeds, so nothing loads
from Google until a visitor clicks. Please keep it that way, or add a consent
step.
