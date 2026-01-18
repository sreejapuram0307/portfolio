# P. Sreeja | AI & Civic-Tech Portfolio

A premium, production-ready portfolio website showcasing AI & ML projects and civic-tech solutions.

## 🚀 Tech Stack

- **React** + **Vite** - Fast, modern build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   ├── layouts/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── projects/
│   │       ├── DemandMap.jsx
│   │       ├── CivSure.jsx
│   │       └── TrafficSimulator.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Design System

### Colors
- **Primary**: Deep Blue (#2563eb)
- **Accent Purple**: #8b5cf6
- **Accent Teal**: #14b8a6
- Soft gradients throughout

### Typography
- **Display Font**: Poppins
- **Body Font**: Inter

### Spacing & Components
- Consistent spacing system (4px base)
- Rounded corners (xl, 2xl, 3xl)
- Soft shadows with glow effects
- Card hover animations

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📄 Pages

- `/` - Home page with hero section
- `/about` - About page with education details
- `/projects` - Projects listing page
- `/projects/demandmap` - DemandMap case study
- `/projects/civsure` - CIVSURE case study
- `/projects/traffic` - Traffic Light Simulator case study
- `/skills` - Skills showcase
- `/achievements` - Achievements and awards
- `/contact` - Contact information

## 🚀 Deployment

### Deploying to Vercel

1. **Install Vercel CLI (optional):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Deploy via CLI:**
   ```bash
   vercel
   ```

4. **Configure build settings (if needed):**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Deploying to GitHub Pages

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js:**
   Ensure base is set correctly:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Replace 'portfolio' with your repo name
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source: `gh-pages` branch
   - Save

6. **Access your site:**
   `https://[username].github.io/portfolio/`

## 🎯 Features

- ✅ Fully responsive (mobile-first)
- ✅ Smooth page transitions
- ✅ Hover animations and micro-interactions
- ✅ Premium design system
- ✅ SEO-friendly structure
- ✅ Accessible navigation
- ✅ Fast performance

## 📝 Customization

### Update Colors
Edit `tailwind.config.js` to modify the color palette.

### Update Content
Edit individual page components in `src/pages/`.

### Add New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 📧 Contact

- **Email**: sreejapuram@gmail.com
- **Mobile**: +91 9550363968
- **LinkedIn**: [sreeja-puram-b807a92bb](https://www.linkedin.com/in/sreeja-puram-b807a92bb/)

---

Built with ❤️ using React, Vite, and Tailwind CSS
