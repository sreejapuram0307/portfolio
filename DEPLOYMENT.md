# Deployment Guide

## 🚀 Deploying to Vercel

Vercel is the recommended deployment platform for this portfolio. It offers automatic deployments, fast CDN, and zero configuration.

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click **"New Project"**
   - Select your repository
   - Vercel will auto-detect:
     - Framework Preset: **Vite**
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`
   - Click **"Deploy"**
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional):**
   - In your Vercel project settings
   - Go to **Domains**
   - Add your custom domain
   - Follow DNS configuration instructions

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

---

## 📦 Deploying to GitHub Pages

GitHub Pages is free and works well for static sites. Follow these steps:

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.js

Update the `base` path in `vite.config.js` to match your repository name:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your actual repo name
})
```

**Important:** If your repository is `username.github.io`, set `base: '/'` instead.

### Step 4: Initialize Git (if not done)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 5: Deploy

```bash
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Push the built files to GitHub

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**
6. Your site will be available at:
   - `https://yourusername.github.io/portfolio/`

### Step 7: Update Base Path (if needed)

If you change your repository name, update `base` in `vite.config.js` and redeploy:

```bash
npm run deploy
```

---

## 🔄 Continuous Deployment

### Vercel
- Automatically deploys on every push to `main` branch
- Creates preview deployments for pull requests
- No additional configuration needed

### GitHub Pages
- To auto-deploy on push, use GitHub Actions:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🐛 Troubleshooting

### Vercel Issues

**Build Fails:**
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Vercel dashboard

**Routes Not Working:**
- Ensure `vite.config.js` has correct base path
- Check React Router configuration

### GitHub Pages Issues

**404 on Routes:**
- Ensure `base` in `vite.config.js` matches repo name
- Add `404.html` that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
      location.replace('/portfolio/');
    </script>
  </head>
  <body></body>
</html>
```

**Assets Not Loading:**
- Verify `base` path is correct
- Clear browser cache
- Check network tab in DevTools

---

## ✅ Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] No console errors
- [ ] All routes work correctly
- [ ] Responsive design tested
- [ ] Links and buttons functional
- [ ] Images and assets load correctly
- [ ] Contact information updated
- [ ] GitHub repository created
- [ ] `base` path configured correctly

---

## 📝 Post-Deployment

1. **Test all pages:**
   - Home, About, Projects, Skills, Achievements, Contact
   - All project case studies
   - Navigation links

2. **Test responsiveness:**
   - Mobile (320px+)
   - Tablet (768px+)
   - Desktop (1024px+)

3. **Verify:**
   - Animations work smoothly
   - External links open correctly
   - Contact information is accurate

---

## 🎉 You're Live!

Your portfolio is now deployed and accessible to the world!
