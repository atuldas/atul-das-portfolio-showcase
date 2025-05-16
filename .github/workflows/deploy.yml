
# Atul Das Portfolio

A professional portfolio website built with React, Tailwind CSS, and JSON data sources.

## Features
- Responsive design that works on desktop and mobile devices
- Light/dark mode toggle with system preference detection
- Section-based content layout with smooth scrolling navigation
- JSON-based content management for easy updates
- Modern UI with clean typography and smooth transitions

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/atuldas/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

The site will be available at http://localhost:8080.

### Building for Production
```bash
npm run build
# or
yarn build
```

This will generate a production build in the `dist` directory.

## Deployment

### GitHub Pages Setup
1. In your GitHub repository, go to Settings > Pages
2. Set the source to GitHub Actions
3. Add the following workflow file to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install Dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: dist
```

### Custom Domain Setup
1. Purchase a domain from a provider (e.g., Namecheap, GoDaddy)
2. In your GitHub repository, go to Settings > Pages
3. Under "Custom domain", enter your domain name and save
4. Configure your DNS settings with your domain provider:
   - Add an A record pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add a CNAME record pointing to `yourusername.github.io`

## Updating Content

All content is stored in JSON files in the `src/data` directory:

- `about.json`: Personal information and summary
- `experience.json`: Work experience entries
- `skills.json`: Technical and soft skills
- `education.json`: Educational background
- `certifications.json`: Professional certifications
- `hobbies.json`: Personal interests and hobbies
- `contact.json`: Contact information and social links

To update content, simply edit the relevant JSON file and rebuild the project.

## License
This project is licensed under the MIT License.
