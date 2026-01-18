# Quick Start Guide

Get your portfolio up and running in minutes!

## ⚡ Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

---

## 📋 Project Structure Overview

```
portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx   # Navigation bar
│   │   ├── Footer.jsx   # Footer component
│   │   └── Button.jsx   # Button component
│   ├── layouts/         # Layout components
│   │   └── Layout.jsx    # Main layout wrapper
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── projects/    # Project case studies
│   │       ├── DemandMap.jsx
│   │       ├── CivSure.jsx
│   │       └── TrafficSimulator.jsx
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies
```

---

## 🎨 Customization Guide

### Update Your Information

1. **Home Page** (`src/pages/Home.jsx`)
   - Update name, title, tagline

2. **About Page** (`src/pages/About.jsx`)
   - Update bio and education details

3. **Contact Page** (`src/pages/Contact.jsx`)
   - Update email, phone, LinkedIn

4. **Projects** (`src/pages/projects/`)
   - Update project descriptions
   - Add/modify project details

5. **Skills** (`src/pages/Skills.jsx`)
   - Add/remove skill categories
   - Update skill lists

6. **Achievements** (`src/pages/Achievements.jsx`)
   - Add/remove achievements
   - Update award details

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    purple: '#your-color',
    teal: '#your-color',
  },
}
```

### Add New Page

1. Create component in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/newpage" element={<NewPage />} />
   ```
3. Add link in `src/components/Navbar.jsx`

---

## 🚀 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Customize content in pages
4. ✅ Test all routes and links
5. ✅ Build: `npm run build`
6. ✅ Deploy (see DEPLOYMENT.md)

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)

---

Happy coding! 🎉
