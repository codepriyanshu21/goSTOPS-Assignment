# Hotel Website

A modern, responsive hotel booking website built with React and Tailwind CSS. The site features a gallery, room selection, dynamic summary, and a clean, mobile-friendly design.

## Features

- Responsive image gallery with main and grid images
- Room selection with detailed features and pricing
- Add rooms to a summary section with quantity and breakfast options
- Dynamic price calculation and summary updates
- Modern navigation bar and tabbed interface
- Mobile and desktop layouts
- Built with Vite, React, and Tailwind CSS

## Project Structure

```
Hotel-website/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── image1.webp
│   │   ├── logo.png
│   │   ├── react.svg
│   │   ├── room1.jpg
│   │   └── room2.jpg
│   ├── components/
│   │   ├── Gallery.jsx
│   │   ├── GalleryMobile.jsx
│   │   ├── Navbar.jsx
│   │   ├── PriceSection.jsx
│   │   ├── SummarySection.jsx
│   │   └── Tabs.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the site.

## Customization
- Add or replace images in `src/assets/` for your own branding and rooms.
- Edit room data and features in `PriceSection.jsx` and `Gallery.jsx`.
- Adjust styles using Tailwind utility classes.

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License
This project is for educational/demo purposes. You can use and modify it as you wish.
