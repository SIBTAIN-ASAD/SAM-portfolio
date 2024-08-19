# SAM — Portfolio

<!-- GitHub badges -->

[![Latest release](https://img.shields.io/github/v/release/ladunjexa/reactjs18-3d-portfolio?label=Latest%20release&style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/releases/tag/v0.1.0)
[![Stars](https://img.shields.io/github/stars/ladunjexa/reactjs18-3d-portfolio?style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/stargazers)
[![Fork](https://img.shields.io/github/forks/ladunjexa/reactjs18-3d-portfolio?style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/forks)
[![GitHub commits](https://img.shields.io/github/commit-activity/t/ladunjexa/reactjs18-3d-portfolio?style=social&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/commits)
[![Pull requests](https://img.shields.io/github/issues-pr/ladunjexa/reactjs18-3d-portfolio?style=social&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/pulls)

<img width="1680" alt="image" src="https://github.com/user-attachments/assets/96c1ae96-1219-4f4b-b9fa-cddb4a1b275c">


[![Sibtain Malik](https://custom-icon-badges.demolab.com/badge/made%20by%20-Sibtain%20Malik-556bf2?logo=github&logoColor=white&labelColor=101827)](https://github.com/luadnjexa)
[![Top Language](https://img.shields.io/github/languages/top/ladunjexa/reactjs18-3d-portfolio?logo=github&logoColor=%23007ACC&label=TypeScript)](https://www.typescriptlang.org/)

## 🌐 Live Demo

Explore the live demonstration of the project:
[sam-portfolio](https://sibtainmalik.vercel.app/)

## 📝 Description

**SAM — Portfolio** is a well-designed and fully functional portfolio website built with React.js,
Three.js, and a custom theme showcasing the work of Sibtain Malik. It highlights his expertise in
crafting innovative solutions with React, Django, and AI.

<details><summary><b>Folder Structure</b></summary>

```bash
sam-portfolio/
├── README.md
├── dist
│   ├── assets
│   │   ├── Globe-G2z_qbzB.js
│   │   ├── ai-A26rBEwI.svg
│   │   ├── avatarSE-X_--iij_.svg
│   │   ├── burger-6erT_Mzq.png
│   │   ├── css-gLKK_hwV.png
│   │   ├── docker-60Ckme38.png
│   │   ├── figma-3Xqs7UmR.png
│   │   ├── figmaland-3MKnSl4f.png
│   │   ├── hams-orKSAp4D.png
│   │   ├── healthcare-kR8YXouF.png
│   │   ├── html-P_XORoKv.png
│   │   ├── i2c-c70VMqqz.png
│   │   ├── index-qi3L0MIj.js
│   │   ├── index-zswkPJpZ.css
│   │   ├── logo-bbprSRRX.png
│   │   ├── mongodb-51PRC_bF.png
│   │   ├── nexusin-2a7ZEnpo.jpeg
│   │   ├── nodejs-cOREf0jI.png
│   │   ├── python-cLej4AAy.png
│   │   ├── quora-ajjLXlmt.png
│   │   ├── redux-mW_zk5hm.png
│   │   ├── splitwise-v-ZcAvaZ.png
│   │   ├── tailwind-i0ent8iN.png
│   │   └── tradingtracker-KNRx6N6D.png
│   ├── index.html
│   ├── logo.png
│   ├── logo.svg
│   └── planet
│       ├── scene.bin
│       ├── scene.gltf
│       └── textures
│           ├── Clouds_baseColor.png
│           └── Planet_baseColor.png
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── public
│   ├── logo.png
│   ├── logo.svg
│   └── planet
│       ├── scene.bin
│       ├── scene.gltf
│       └── textures
│           ├── Clouds_baseColor.png
│           └── Planet_baseColor.png
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── ai.svg
│   │   ├── avatarSE.svg
│   │   ├── burger.png
│   │   ├── carrent.png
│   │   ├── close.svg
│   │   ├── company
│   │   │   ├── Fiverr.png
│   │   │   ├── devsinc.jpeg
│   │   │   └── i2c.png
│   │   ├── devops.svg
│   │   ├── figmaland.png
│   │   ├── github.svg
│   │   ├── hams.png
│   │   ├── healthcare.png
│   │   ├── heroAvatar.png
│   │   ├── herobg.png
│   │   ├── index.ts
│   │   ├── jobit.png
│   │   ├── logo.png
│   │   ├── menu.svg
│   │   ├── mobile.png
│   │   ├── nexusin.jpeg
│   │   ├── python.png
│   │   ├── quora.png
│   │   ├── sa.svg
│   │   ├── splitwise.png
│   │   ├── tech
│   │   │   ├── css.png
│   │   │   ├── django.png
│   │   │   ├── docker.png
│   │   │   ├── figma.png
│   │   │   ├── git.png
│   │   │   ├── html.png
│   │   │   ├── javascript.png
│   │   │   ├── mongodb.png
│   │   │   ├── nodejs.png
│   │   │   ├── reactjs.png
│   │   │   ├── redux.png
│   │   │   ├── tailwind.png
│   │   │   ├── threejs.svg
│   │   │   └── typescript.png
│   │   ├── tradingtracker.png
│   │   ├── tripguide.png
│   │   └── web.svg
│   ├── components
│   │   ├── atoms
│   │   │   └── Header.tsx
│   │   ├── canvas
│   │   │   ├── Ball.tsx
│   │   │   ├── Computers.tsx
│   │   │   ├── Earth.tsx
│   │   │   ├── Globe.tsx
│   │   │   ├── Stars.tsx
│   │   │   ├── World.tsx
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   ├── Loader.tsx
│   │   │   └── Navbar.tsx
│   │   └── sections
│   │       ├── About.tsx
│   │       ├── AnimatedBackground.tsx
│   │       ├── Avatar.tsx
│   │       ├── Contact.tsx
│   │       ├── Experience.tsx
│   │       ├── Feedbacks.tsx
│   │       ├── Hero.tsx
│   │       ├── Tech.tsx
│   │       └── Works.tsx
│   ├── constants
│   │   ├── config.ts
│   │   ├── index.ts
│   │   └── styles.ts
│   ├── globals.css
│   ├── hoc
│   │   ├── SectionWrapper.tsx
│   │   └── index.ts
│   ├── main.tsx
│   ├── types
│   │   └── index.d.ts
│   ├── utils
│   │   ├── data
│   │   │   └── globe.json
│   │   └── motion.ts
│   └── vite-env.d.ts
├── styles.css
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
└── yarn.lock
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)

</details>

## ✨ Technologies Used

<details><summary><b>SAM — Portfolio</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
- [Vite](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner
  development experience for modern web projects.
- [React.js](https://reactjs.org/): React is a free and open-source front-end JavaScript library for
  building user interfaces or UI components.
- [Three.js](https://threejs.org/): Three.js is a cross-browser JavaScript library and application
  programming interface used to create and display animated 3D computer graphics in a web browser
  using WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion
  library for React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [ESLint](https://eslint.org/
