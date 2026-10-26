# Kariba Fisheries

Next.js App Router, TypeScript, Tailwind CSS 4 and Motion. Uses only supplied business photography. The logo is cropped from the supplied construction artwork, preserving the original mark.

## Run

Requires Node.js 20.9 or newer. Run `npm ci`, then `npm run dev`. Production checks: `npm run build` and `npm run typecheck`. Deploy the repository to Vercel with the Next.js framework preset. No environment variables are required.

## Content updates

Business contacts, hours, products, package prices, services and gallery entries live in `lib/content.ts`. Images live in `public/images`. Add products to the `products` array; filters update automatically. Page copy and interaction components are in `components/site.tsx`. Brand tokens and responsive layouts are in `app/globals.css`.

## Factual notes

- Primary contact: +263 71 481 1640. Secondary: +263 77 709 1968. Additional contact from older artwork is shown on the contact page with a confirmation note.
- Monday hours follow the supplied screenshot. Other days explicitly ask customers to confirm.
- Requested package and product prices are displayed with a current-price confirmation note. The supplied screenshots include conflicting fingerling and liner prices, so the explicitly requested US$65 per thousand is used. No outdated promotional discounts are included.
- The 10m × 5m package asks for feed specification rather than assuming a feed duration.
- No test kit, feed, net or Matemba standalone photographs were supplied. These items use a quiet brand graphic instead of unrelated photography.
- Instagram links to the supplied handle. Facebook opens a named Facebook search because an exact page URL was not supplied. The map link opens an address search, not an invented map pin.
- The enquiry form validates fields and prepares a WhatsApp message for the customer to review and send. It does not claim to submit to an email inbox or save enquiries.
- No public domain is configured yet. Set canonical URL, robots and sitemap once the final hostname is chosen.

## Routes

`/`, `/about`, `/services`, `/products`, `/gallery`, `/training`, `/contact`.
