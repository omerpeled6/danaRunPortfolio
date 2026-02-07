# DanaRun - Marketing Landing Page

סטודיו לכושר ותזונה המלווה אותך צעד צעד לאורח חיים בריא.

## Project Structure & File Guide

- `dana/`: Contains original data and assets provided for the brand.
- `public/`: Static assets such as images and the main HTML entry point.
- `src/`: Core source code directory.
  - `assets/`: Project-specific images and logos.
  - `components/`: React functional components for the UI.
    - `About.jsx`: Personal brand story section.
    - `Contact.jsx`: Contact information and social media links.
    - `Experience.jsx`: "Why Choose Us" benefits section.
    - `Hero.jsx`: Main headline and call to action section.
    - `Navbar.jsx`: Responsive top navigation menu.
    - `Projects.jsx`: Features "Personal Training" services.
    - `Technologies.jsx`: Displays workshops and programs (Workshops component).
  - `constants/`: Configuration files and text content.
    - `index.js`: Main file for all Hebrew text and brand constants.
  - `App.jsx`: Main application component for layout and theme.
  - `index.css`: Global styles and Hebrew font configuration.
  - `main.jsx`: React application entry point.
- `index.html`: Root HTML template with RTL configuration.
- `package.json`: Project dependencies and scripts.
- `tailwind.config.js`: Tailwind CSS styling configuration.
- `vite.config.js`: Vite development server and build configuration.

## Technology Stack

- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS & Vanilla CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **RTL**: Full Hebrew Right-to-Left support
