# Foothills Ferment micro-bakery website

A responsive, accessible static ordering website designed for an organic sourdough micro-bakery serving the Adelaide foothills.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this project, keeping `index.html` in the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

## Required edits before launch

Open `script.js` and change:

- `BAKERY_EMAIL` to the bakery's order email.
- `DELIVERY_FEE` to the actual local delivery fee.
- `SUBURBS` to the suburbs you genuinely serve.

Open `index.html` and update:

- Business name, wording, prices and product descriptions.
- Delivery area copy.
- Contact information and any required business, allergen, privacy and refund information.

## How ordering works

GitHub Pages is static hosting, so this version does not process payments or store orders. On submission it opens the customer's email client with a prepared order request. For reliable online payments and order storage, connect the form to a checkout or form service before accepting live orders.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive visual design
- `script.js` — product pricing, date rules, suburb list and email order submission
- `404.html` — friendly fallback page
- `.nojekyll` — serves the site as plain static files

## Testing checklist

- Replace the sample email address.
- Verify all prices, delivery dates and suburbs.
- Submit test orders on desktop and mobile.
- Check the order email content.
- Add suitable terms, privacy, allergen and refund information.
- Confirm food-business and delivery obligations that apply to your operation.
