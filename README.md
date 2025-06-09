# Skip Selector Redesign

This project is a redesigned version of the "Choose Your Skip Size" page from WeWantWaste.

## 🚀 Live Demo

[Click here to view the sandbox](https://codesandbox.io/p/github/uwambajeddy/skip-selector/main?import=true)

![Light mode preview](https://github.com/user-attachments/assets/3b96cf95-cff0-49b6-a6a9-50ae6d3c627a)
![Dark mode preview](https://github.com/user-attachments/assets/8668e6f7-807d-4b3e-9a0f-b35285d060f9)
![Mobile Friendly](https://github.com/user-attachments/assets/c16005a1-725c-4a97-92be-64fcbadb37b1)


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
