# Caz Day Therapy

Website for Caz Day, a UKCP-registered Gestalt therapist, live at
https://cazdaytherapy.com. It is a voluntary project, built from my
hand-made-by-wiggins boilerplate.

It's a plain static site: HTML, CSS and a little JavaScript, with no build step.

## Structure

Everything the browser needs is in `public/`. Files at the repo root (this
README and `.gitignore`) are for development only and aren't deployed.

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
  the menu changes is a small cost. In return the site stays plain HTML and
  CSS with no tools, no build step and almost no JavaScript, and `public/` can
  be uploaded exactly as it is.

If the site grows, for example with regular blog posts, it's worth revisiting
a static site generator.

## Running locally

From the repo root:

```
cd public
python3 -m http.server 8000
```

Then open http://localhost:8000/. Serve from inside `public/` so it's the site
root, as it is on Cloudflare; otherwise the menu and footer links break. The
server doesn't reload pages automatically, so refresh the browser after saving
a change.

## Deploying

The site is a static Cloudflare Workers site. To deploy, upload the `public/`
folder in the Cloudflare dashboard. Its contents become the root of the site,
so `public/index.html` is served at https://cazdaytherapy.com/.

`404.html` is served, with a 404 status, for any address that doesn't exist.
This relies on the Worker's `not_found_handling` setting being `"404-page"`. If
unknown addresses ever show a blank page or the home page instead, check that
setting.

### Domain

- `cazdaytherapy.com` is **registered at Pilchard**, with its nameservers
  pointing to Cloudflare. Keep the registration renewed there, or the site will
  go offline.
- DNS is managed in Cloudflare. The main address is connected to the Worker as
  a custom domain.
- `www` redirects to the main address with a Cloudflare redirect rule (the `www`
  DNS record must stay proxied, orange cloud), and "Always Use HTTPS" sends
  `http://` visits to `https://`.

## Privacy

The site sets no cookies, loads no analytics and makes no third-party requests:
everything is served from the site itself. The mobile menu icon is an inline
SVG (Font Awesome 4.7's "bars" icon, SIL OFL 1.1) rather than an icon font from
a CDN. Maps are plain links to Google Maps rather than embeds, so nothing loads
from Google until a visitor clicks. Please keep it that way, or add a consent
step.
