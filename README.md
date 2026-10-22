# streamlinefood.com

Website for **Streamline Food & Beverages Ltd.**, No 34 F01 Market, Kubwa, Abuja 901101, Nigeria.
WhatsApp: +234 903 057 8141

A plain HTML/CSS/JS site. No build step, so it runs directly on GitHub Pages.

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `products.html` | Product catalogue with category filter and FAQ |
| `services.html` | Sourcing, packaging and shipping |
| `about.html` | About the company |
| `contact.html` | Quote form and contact details |
| `404.html` | Page-not-found |

The quote form opens WhatsApp with the customer's request already written, so no server or form service is needed.

## Publish on GitHub Pages
1. Create a new repository on GitHub (for example `streamlinefood`).
2. Upload **everything in this folder** (including the hidden `.nojekyll` file and `CNAME`) to the root of the repository: *Add file → Upload files*, drag the contents in, then *Commit changes*.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then *Save*.
4. In the same Pages screen, the *Custom domain* should show `streamlinefood.com` (from the `CNAME` file). Tick **Enforce HTTPS** once it becomes available.

## Point the domain at GitHub
At your domain registrar's DNS settings for streamlinefood.com add:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<your-github-username>.github.io` |

DNS changes can take up to 24–48 hours to work everywhere.

## Things to update
- **Email**: the site uses `info@streamlinefood.com`. Create that mailbox with your email provider (e.g. Zoho Mail, Google Workspace), or search all `.html` files for it and replace it.
- **Opening hours**: set to Monday–Saturday 8am–6pm (WAT) on `contact.html` and the home page. Change if different.
- **Pack sizes** on `products.html` are typical sizes; edit them to match what you actually sell.
- **Images** are in `assets/img/`. Replace any file with a real product photo of the same name to update it everywhere.
