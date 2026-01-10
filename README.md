# DanaRun - Marketing Landing Page

Professional fitness and nutrition marketing landing page for **DanaRun (Dana Nissim)**. Rebuilt from a developer portfolio with full RTL support, Hebrew content, and a premium "wellness" aesthetic.

## 🛠️ Technology Stack
- **Framework**: React.js + Vite
- **Styling**: Tailwind CSS / Vanilla CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **RTL**: Right-to-Left Hebrew support

## 📁 Project Structure

- `dana/`: Contains original data and assets provided for the brand.
  - `dana.md`: Brand story, workshop details, and contact info.
  - `logo.png`: Brand logo.
  - `photo.jpg`: Main profile photo.
- `public/`: Static assets.
  - `logo.png`: Copy of brand logo used in the site.
  - `hero_bg.png`: Generated high-quality fitness coaching image.
  - `nutrition.png`: Generated nutrition/lifestyle image.
  - `senior_wellness.png`: Generated active senior group image.
- `src/`: Source code.
  - `components/`: Modular React components.
    - `Navbar.jsx`: Brand logo and social links (RTL).
    - `Hero.jsx`: Main headline and call to action.
    - `About.jsx`: Personal brand story.
    - `Technologies.jsx` (Workshops): Repurposed to show workshop categories.
    - `Experience.jsx` (Benefits): Repurposed as "Why Choose Us".
    - `Projects.jsx` (Personal Training): Highlighting 1-on-1 coaching.
    - `Contact.jsx`: Contact details and social engagement.
  - `constants/`: Configuration files for content and links.
    - `index.js`: All Hebrew text and brand constants.
  - `App.jsx`: Main assembly and layout with emerald theme.
  - `index.css`: Global styles and Hebrew font configuration.
  - `main.jsx`: React entry point.
- `index.html`: Root HTML template with Hebrew RTL configuration.
- `package.json`: Project dependencies and scripts.
- `package-lock.json`: Locked dependency versions.
- `vite.config.js`: Vite build configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration.
- `eslint.config.js`: ESLint configuration.
- `README.md`: Project documentation and structure summary.
