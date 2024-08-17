# SAM — Portfolio

<!-- GitHub badges -->

[![Latest release](https://img.shields.io/github/v/release/ladunjexa/reactjs18-3d-portfolio?label=Latest%20release&style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/releases/tag/v0.1.0)
[![Stars](https://img.shields.io/github/stars/ladunjexa/reactjs18-3d-portfolio?style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/stargazers)
[![Fork](https://img.shields.io/github/forks/ladunjexa/reactjs18-3d-portfolio?style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/forks)
[![GitHub commits](https://img.shields.io/github/commit-activity/t/ladunjexa/reactjs18-3d-portfolio?style=social&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/commits)
[![Pull requests](https://img.shields.io/github/issues-pr/ladunjexa/reactjs18-3d-portfolio?style=social&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/pulls)

![demo]()

[![Sibtain Malik](https://custom-icon-badges.demolab.com/badge/made%20by%20-Sibtain%20Malik-556bf2?logo=github&logoColor=white&labelColor=101827)](https://github.com/luadnjexa)
[![Top Language](https://img.shields.io/github/languages/top/ladunjexa/reactjs18-3d-portfolio?logo=github&logoColor=%23007ACC&label=TypeScript)](https://www.typescriptlang.org/)
![Release](https://img.shields.io/github/release/ladunjexa/reactjs18-3d-portfolio.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)
![deployment](https://img.shields.io/github/deployments/ladunjexa/reactjs18-3d-portfolio/Production?logo=vercel&label=Website)

## 🌐 Live Demo

Explore the live demonstration of the project:
[sam-portfolio](https://reactjs18-3-d-portfolio.vercel.app/)

## 📝 Description

**SAM — Portfolio** is a well-designed and fully functional portfolio website built with React.js,
Three.js, and a custom theme showcasing the work of Sibtain Malik. It highlights his expertise in
crafting innovative solutions with React, Django, and AI.

<details><summary><b>Folder Structure</b></summary>

```bash
sam-portfolio/
├── src/
├   ├── App.tsx
├   ├── globals.css
├   ├── main.tsx
├   ├── vite.env.d.ts
├   ├── components/
├   ├   ├── atoms/
├   ├   ├   └── Header.tsx
├   ├   ├── canvas/
├   ├   ├   ├── Ball.tsx
├   ├   ├   ├── Computers.tsx
├   ├   ├   ├── Earth.tsx
├   ├   ├   ├── Stars.tsx
├   ├   ├   └── index.ts
├   ├   ├── layout/
├   ├   ├   ├── Loader.tsx
├   ├   ├   └── Navbar.tsx
├   ├   ├── sections/
├   ├   ├   ├── About.tsx
├   ├   ├   ├── Contact.tsx
├   ├   ├   ├── Experience.tsx
├   ├   ├   ├── Feedbacks.tsx
├   ├   ├   ├── Hero.tsx
├   ├   ├   ├── Tech.tsx
├   ├   ├   ├── Works.tsx
├   ├   └── page.tsx
├   └── index.ts
├   ├── constants/
├   ├   ├── config.ts
├   ├   ├── styles.ts
├   ├   └── index.ts
├   ├── hoc/
├   ├   ├── SectionWrapper.tsx
├   ├   └── index.ts
├   ├── utils/
├   ├   └── motion.ts
├   ├── types/
├   ├   └── index.d.ts
├   └── assets/
├       ├── company/
├       ├   └── [[...]].{svg,png}
├       ├── tech/
├       ├   └── [[...]].{svg,png}
├       ├── [[...]].{svg,png}
├       └── index.ts
├── public/
├   ├── desktop_pc
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── planet
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── logo.png
├   └── logo.svg
├── .env
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── index.html
├── LICENSE
├── README.md
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
  - [Deploy to production (manual)](#-deploy-to-production-manual)
  - [Deploy on Vercel (recommended)](#-deploy-on-vercel-recommended)
  - [Deploy on Netlify](#-deploy-on-netlify)
- [Contributing](#-contributing)
  - [Bug / Feature Request](#-bug--feature-request)
- [Acknowledgements](#-acknowledgements)
- [References](#-references)
- [Contact Us](#-contact-us)
- [License](#-license)

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
