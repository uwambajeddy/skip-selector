# Skip Selector Redesign

This project is a redesigned version of the "Choose Your Skip Size" page from WeWantWaste.

## 🚀 Live Demo

[Click here to view the sandbox](your-sandbox-link)

## 💡 Features

- ✅ Dynamic skip yard cards with icons and details
- 🎨 Auto background image based on skip size
- 🌗 Dark mode toggle
- 🔄 Stepper to guide through steps
- 📱 Mobile-friendly UI
- ⏳ Skeleton loading states
- ⚡ Fast, modern UI powered by Tailwind CSS
- 🧪 First-class CodeSandbox support

## 🚀 Getting Started

`````bash
git clone https://github.com/uwambajeddy/skip-selector.git
cd skip-selector
npm install
npm run dev

## 📂 Folder Structure

````bash
src/
├── assets/
│   └── [size]-yard-skip.jpg
├── components/
│   ├── SkipCard.jsx
│   ├── Stepper.jsx
│   ├── DarkModeToggle.jsx
│   ├── BottomBar.jsx
│   └── SkeletonLoading.jsx
├── hooks/
│   └── useSkip.js (handles fetch)
├── utils/
│   ├── calculateTotalPrice.js
│   └── getSkipRecommendation.js
├── App.jsx
├── main.jsx
├── index.css



### Why Vite + Tailwind
- ⚡ Ultra-fast dev/build, smaller bundle
- 🚀 First-class CodeSandbox support
- 🌗 Easy dark-mode theming through class toggling


`````
