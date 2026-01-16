# P. SREEJA - Premium Portfolio Website

A modern, interactive, multi-section portfolio website built with React and Vite, featuring smooth navigation, animations, and responsive design.

## 🚀 Features

- **Fixed Navigation Bar**: Responsive navbar with smooth scrolling to sections
- **Hero Section**: Eye-catching home page with profile picture and call-to-action
- **Multi-Section Layout**: Organized content across About, Skills, Projects, Education, Training, Roles, and Contact
- **Interactive Elements**: Hover animations, modal popups for projects, and smooth transitions
- **Responsive Design**: Fully mobile-friendly with hamburger menu and adaptive layouts
- **Modern UI**: Clean design with blue accent (#1a73e8), soft grays, and white cards
- **Contact Form**: Basic contact form (frontend only - extend with backend as needed)
- **Footer**: Quick navigation links and copyright information

## 📋 Sections Included

1. **Home**: Hero section with name, tagline, profile picture, and portfolio CTA
2. **About**: Career objective and contact information
3. **Skills**: Categorized skill chips across Programming, Frameworks, ML/AI, Data Science, Visualization, and Tools
4. **Projects**: Interactive project cards with modal details for:
   - Stock Price Prediction Using LSTM
   - Traffic Light Simulator Using Python
   - CIVSURE – Anonymous Crime Reporting Platform
5. **Education**: Vertical timeline with B.Tech, Diploma, and SSC details
6. **Industrial Training**: Jenkins & Maven training card
7. **Roles & Responsibilities**: Volunteer positions with icons
8. **Contact**: Contact info and message form
9. **Footer**: Navigation links and copyright

## 🛠️ Technologies Used

- **React 18**: Functional components with hooks (useState, useRef)
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with Grid, Flexbox, and CSS Variables
- **Responsive Design**: Mobile-first approach with media queries

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── vite.svg
├── src/
│   ├── Portfolio.jsx      # Main component with all sections
│   ├── Portfolio.css      # Complete styling
│   ├── index.css          # Global styles
│   └── main.jsx           # React entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Customization

### Colors and Theme
Modify CSS custom properties in `:root` in `Portfolio.css`:

```css
:root {
  --primary-blue: #1a73e8;  /* Change accent color */
  --soft-gray: #f5f5f5;     /* Background color */
  --white: #ffffff;         /* Card color */
}
```

### Content Updates
Edit the JSX content in `Portfolio.jsx`:
- Update personal information, skills, projects, and education details
- Modify project descriptions and details arrays
- Change contact information and links

### Profile Picture
Replace the `.pic-placeholder` div with an actual image:
```jsx
<img src="/path/to/your/photo.jpg" alt="P. SREEJA" className="profile-photo" />
```

### Adding Backend to Contact Form
The contact form is currently frontend-only. To add functionality:
1. Install a form library like `react-hook-form`
2. Add a backend service (Node.js/Express, Firebase, etc.)
3. Handle form submission with API calls

### Navigation Links
Update the `scrollToSection` calls in `Portfolio.jsx` to match your section refs.

## 📱 Responsive Features

- **Desktop**: Full navigation menu, multi-column layouts
- **Tablet**: Adapted grid layouts, maintained navigation
- **Mobile**: Hamburger menu, single-column layouts, touch-friendly buttons

## 🎭 Animations & Interactions

- **Fade-in animations** on scroll for sections
- **Hover effects** on cards, buttons, and skill chips
- **Smooth scrolling** between sections
- **Modal popups** for detailed project views
- **Scale animations** on profile picture and CTA button

## 🔧 Development Notes

- Uses React refs for smooth scrolling navigation
- State management with useState for mobile menu and modals
- CSS Grid and Flexbox for responsive layouts
- Semantic HTML for accessibility
- Optimized for performance with minimal re-renders

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**P. SREEJA**
- Email: sreejapuram@gmail.com
- LinkedIn: [linkedin.com/in/sreeja-puram](https://linkedin.com/in/sreeja-puram)

---

*Built with ❤️ using React & Vite*