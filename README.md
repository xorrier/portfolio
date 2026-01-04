# Portfolio Website

Modern portfolio website built with Next.js and Tailwind CSS, deployed on GitHub Pages.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

```bash
# Create production build
npm run build
```

## 📦 Deployment to GitHub Pages

### One-time Setup

1. **Create a GitHub repository** named `portfolio` (or any name you prefer)

2. **Update `next.config.js`** - Replace `/portfolio` with your repository name:

   ```js
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
   ```

3. **Enable GitHub Pages** in your repository:

   - Go to Settings → Pages
   - Source: GitHub Actions

4. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

The GitHub Actions workflow will automatically build and deploy your site!

Your portfolio will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── CodingProfiles.tsx
│   └── Contact.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
└── public/
```

## ✨ Features

- Responsive design
- Smooth scrolling navigation
- Modern UI with Tailwind CSS
- Optimized for GitHub Pages
- Automated deployment via GitHub Actions

## 📝 Customization

Edit the components in the `components/` folder to customize your portfolio content.
