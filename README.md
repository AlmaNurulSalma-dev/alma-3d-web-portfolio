# 3D WEB PORTFOLIO - ALMA NURUL SALMA

[![Three.js](https://img.shields.io/badge/Three.js-v0.170.0-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![WebGL](https://img.shields.io/badge/WebGL-Enabled-red?style=for-the-badge&logo=webgl)](https://www.khronos.org/webgl/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

> **Interactive 3D web portfolio showcasing projects, education, certifications, and personal gallery through an immersive virtual house exploration experience.**

---

## 🎯 PROJECT OVERVIEW

Portfolio web interaktif 3D yang menampilkan karya, pendidikan, sertifikasi, dan galeri pribadi melalui pengalaman eksplorasi virtual house yang immersive. Dibangun dengan **Three.js** dan **WebGL**, project ini mendemonstrasikan advanced web development capabilities dengan mengintegrasikan real-time 3D rendering, physics simulation, character control systems, dan interactive storytelling dalam browser.

### ✨ Key Features

- 🏠 **Fully 3D Navigable Environment** - Explore a custom-designed 3D house
- 🎮 **Character Control System** - WASD/Arrow keys navigation with physics
- 🖱️ **Interactive Objects** - 27+ clickable objects with hover effects
- 📱 **Responsive Design** - Works on desktop and tablets
- 🎨 **12 Project Showcases** - Detailed portfolio items
- 🎭 **Three Camera Modes** - Cinematic intro, follow cam, free exploration
- 🐱 **Easter Eggs** - Hidden interactive elements with sound
- 💨 **Smooth Animations** - GSAP-powered transitions
- ⚡ **60fps Performance** - Optimized rendering pipeline

---

## 📁 PROJECT STRUCTURE

```
3D-web-portfolio-L25020007/
│
├── index.html                    # Main entry - 3D interactive house
├── main.js                       # Main Three.js logic (1190+ lines)
│
├── assets/                       # All project assets
│   ├── models/                   # 3D models
│   │   └── bismillah5.glb       # Active house model (25MB)
│   ├── sounds/                   # Audio files
│   │   ├── cat-meow-slow.mp3
│   │   └── cat-meow-fast.mp3
│   └── images/                   # Images (108 total)
│       ├── profile/              # 1 image
│       ├── certifications/       # 7 images
│       ├── education/            # 16 images
│       ├── gallery/              # 18 images
│       ├── organizations/        # 18 images
│       └── work/                 # 48 project screenshots
│
├── css/                          # Stylesheets
│   ├── main.css                  # Main 3D portfolio styles
│   ├── portfolio.css             # 2D portfolio page styles
│   └── components/
│       ├── popup.css             # Popup window styles
│       └── iframe-fix.css        # Iframe adjustments
│
├── js/                           # JavaScript modules
│   ├── modules/
│   │   ├── popup-loader.js       # Popup system & page mappings
│   │   ├── cursor.js             # Custom cursor effects
│   │   └── webgl-ball.js         # WebGL ball animation
│   └── utils/
│       └── shaders.js            # WebGL shader utilities
│
├── pages/                        # HTML pages (19 files)
│   ├── about.html                # About page
│   ├── work.html                 # Projects overview
│   ├── gallery.html              # Photo gallery
│   ├── certifications.html       # Certifications
│   ├── education.html            # Education history
│   ├── organization.html         # Organizations
│   ├── contact.html              # Contact info
│   └── work/                     # Project details (12 files)
│       ├── agriwise.html
│       ├── bengkelin.html
│       ├── bitescan.html
│       ├── bmbp.html
│       ├── jastip-automation.html
│       ├── mindcraft.html
│       ├── scriptr.html
│       ├── secondlife.html
│       ├── tenangin.html
│       ├── todi-toraja.html
│       ├── veriflair.html
│       └── web3d.html
│
└── docs/                         # Documentation
    └── DOKUMENTASI_LENGKAP.md    # Complete documentation (10,000+ lines)
```

---

## 🚀 TECHNOLOGIES USED

### Core Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Three.js** | v0.170.0 | 3D rendering engine |
| **WebGL** | 2.0 | Hardware-accelerated graphics |
| **JavaScript** | ES6+ | Core programming language |
| **HTML5** | - | Semantic markup |
| **CSS3** | - | Modern styling |
| **GSAP** | v3.11.4 | Animation library |
| **Locomotive Scroll** | v4.0.3 | Smooth scrolling |

### Development Tools

- **Blender 3.x** - 3D modeling & texturing
- **VS Code** - Primary IDE
- **Git/GitHub** - Version control
- **Live Server** - Local development server

---

## 📦 SETUP & INSTALLATION

### Prerequisites

- Modern web browser with WebGL support ([Check here](https://get.webgl.org/))
- Local web server (Python, Node.js, or Live Server)
- Minimum 4GB RAM
- Stable internet connection (for CDN libraries)

### Quick Start

#### Option 1: Using Python (Recommended)

```bash
# 1. Clone or download the repository
git clone https://github.com/[username]/3d-web-portfolio.git
cd 3d-web-portfolio

# 2. Start local server
python -m http.server 8000

# 3. Open browser
# Navigate to: http://localhost:8000
```

#### Option 2: Using Node.js

```bash
# 1. Navigate to project directory
cd 3d-web-portfolio

# 2. Start server
npx http-server

# 3. Open browser
# Navigate to: http://localhost:8080
```

#### Option 3: Using VS Code Live Server

```bash
# 1. Open project in VS Code
code .

# 2. Install "Live Server" extension
# 3. Right-click on index.html
# 4. Select "Open with Live Server"
```

### Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Recommended (Best performance) |
| Firefox | ✅ Supported |
| Safari | ✅ Supported |
| Edge | ✅ Supported |
| Opera | ✅ Supported |
| Mobile | ⚠️ Limited (No touch controls yet) |

---

## 🎮 CONTROLS

### Keyboard Controls

```
Movement:
  W / Arrow Up      → Move forward
  S / Arrow Down    → Move backward
  A / Arrow Left    → Turn left
  D / Arrow Right   → Turn right
  Space             → Jump

Camera:
  C                 → Toggle camera mode (Follow ⟷ Free)

Other:
  ESC               → Close popup window
```

### Mouse Controls

```
In 3D Environment:
  Hover             → Highlight objects & show tooltip
  Click             → Open popup with content

In Free Camera Mode (Press C):
  Left Click + Drag → Rotate camera
  Right Click + Drag→ Pan camera
  Scroll Wheel      → Zoom in/out
```

---

## 📖 INTERACTIVE OBJECTS MAPPING

### Main Sections (7 objects)

| 3D Object | Opens | Content |
|-----------|-------|---------|
| **aboutMe** | `pages/about.html` | 📖 About Me & Biography |
| **softSkills** | `pages/work.html` | 💼 Work & Projects Overview |
| **education** | `pages/education.html` | 🎓 Education History |
| **certificates** | `pages/certifications.html` | 🏆 Professional Certifications |
| **organizations** | `pages/organization.html` | 🏛️ Organizations & Involvement |
| **gallery** | `pages/gallery.html` | 📷 Personal Gallery (18 photos) |
| **contact** | `pages/contact.html` | 📧 Contact Information |

### Project Showcases (12 paintings)

| Object | Project | File |
|--------|---------|------|
| **Painting 1** | 🌾 AgriWise | `agriwise.html` |
| **Painting 2** | ✍️ Scriptr | `scriptr.html` |
| **Painting 3** | 🔧 Bengkelin | `bengkelin.html` |
| **Painting 4** | 🛒 Jastip Automation | `jastip-automation.html` |
| **Painting 5** | 🧠 MindCraft | `mindcraft.html` |
| **Painting 6** | 🧘 Tenangin | `tenangin.html` |
| **Painting 7** | ✓ VeriFlair | `veriflair.html` |
| **Painting 8** | 🍽️ BiteScan | `bitescan.html` |
| **Painting 9** | ♻️ SecondLife | `secondlife.html` |
| **Painting 10** | 🏛️ Todi Toraja | `todi-toraja.html` |
| **Painting 11** | 💼 BMBP | `bmbp.html` |
| **Painting 12** | 🎮 3D Web Portfolio | `web3d.html` |

### Easter Eggs

- 🐱 **Cat** - Click for meow sound (randomized slow/fast)

---

## 🏗️ ARCHITECTURE OVERVIEW

### System Flow

```
User Input → Event Handlers → State Updates → System Updates → Render
```

### Main Systems

1. **Physics System** - Gravity, jumping, collision detection
2. **Movement System** - Character control, acceleration, rotation
3. **Camera System** - Three modes (Intro, Follow, Free)
4. **Interaction System** - Raycasting, hover detection, click handling
5. **Popup System** - Windows 98-style modals with iframes
6. **Audio System** - Sound effects on interactions
7. **Animation System** - GSAP-powered smooth transitions

### State Management

```javascript
Global State:
├── Scene & Rendering (scene, camera, renderer)
├── Objects (playerObject, interactiveObjects[], hoveredObject)
├── Physics (velocity, isGrounded, isJumping)
├── Movement (currentSpeed, currentRotation, keys{})
├── Camera (cameraMode: 'intro' | 'follow' | 'free')
└── Popup (currentPopup)
```

---

## ⚡ PERFORMANCE

### Target Metrics

```
FPS (Frames Per Second):
- Desktop:    60fps ✓
- Laptop:     45-60fps
- Mobile:     30fps (minimum)

Load Time:
- Initial:    < 5 seconds
- Model:      < 3 seconds
- Total:      < 8 seconds

Memory Usage:
- Initial:    < 200MB
- Peak:       < 400MB
```

### Optimizations Implemented

- ✅ Shadow map optimization (1024x1024)
- ✅ Pixel ratio capping (max 2x)
- ✅ Raycasting limited to interactive objects only
- ✅ Frame-rate independent physics
- ✅ Efficient event handling
- ✅ GLB model format (binary, compressed)

---

## 📊 PROJECT STATISTICS

```
Development:
├── Duration:           8 weeks (~300 hours)
├── Lines of Code:      8,940+ total
│   ├── JavaScript:     1,690+ lines
│   ├── CSS:            1,550+ lines
│   └── HTML:           5,700+ lines
│
Assets:
├── 3D Models:          3 GLB files (~74MB)
├── Images:             108 files (~20MB)
├── Audio:              2 MP3 files (~2MB)
├── Total Size:         ~100MB
│
Content:
├── Portfolio Pages:    19 HTML files
├── Projects:           12 showcases
├── Images:             108 total
│   ├── Profile:        1
│   ├── Certifications: 7
│   ├── Education:      16
│   ├── Gallery:        18
│   ├── Organizations:  18
│   └── Work:           48
└── Documentation:      10,000+ lines
```

---

## 🎨 FEATURED PROJECTS

1. **AgriWise** - Smart agriculture platform for modern farming
2. **Scriptr** - Content writing and collaboration platform
3. **Bengkelin** - Auto repair service booking platform
4. **Jastip Automation** - Automated personal shopping assistant
5. **MindCraft** - Mental health and wellness tracking app
6. **Tenangin** - Meditation and relaxation companion app
7. **VeriFlair** - Product verification and authenticity checker
8. **BiteScan** - Food nutrition scanner and health tracker
9. **SecondLife** - Sustainable marketplace for pre-loved items
10. **Todi Toraja** - Cultural heritage and tourism platform
11. **BMBP** - Business management and productivity platform
12. **3D Web Portfolio** - This interactive 3D portfolio itself

---

## 📚 DOCUMENTATION

### Complete Documentation

📖 **[DOKUMENTASI_LENGKAP.md](docs/DOKUMENTASI_LENGKAP.md)** - Complete technical documentation (10,000+ lines)

**Table of Contents:**
- Project Overview & Introduction
- Technologies & Tools
- Setup & Installation Guide
- Feature Implementation Deep Dive
- Architecture & System Design
- Code Structure & Organization
- Performance Optimization
- Portfolio Content & Projects
- Deployment Strategy
- Security & Best Practices
- SEO & Analytics
- Maintenance & Roadmap
- API Documentation
- Legal & Licensing

---

## 🔧 TROUBLESHOOTING

### Common Issues

**Issue: White screen / Nothing loads**
```
Solution:
1. Check browser console (F12) for errors
2. Verify WebGL is enabled: chrome://gpu
3. Clear browser cache
4. Try different browser (Chrome recommended)
```

**Issue: 3D model not loading**
```
Solution:
1. Check file exists: assets/models/bismillah5.glb
2. Verify local server is running
3. Check browser console for 404 errors
```

**Issue: Low FPS / Poor performance**
```
Solution:
1. Close other browser tabs
2. Update graphics drivers
3. Enable hardware acceleration in browser
4. Use Chrome (best WebGL performance)
```

---

## 🚀 DEPLOYMENT

### Recommended Platforms

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### GitHub Pages
```bash
git checkout -b gh-pages
git push origin gh-pages
# Enable in Settings → Pages
```

---

## 🗺️ ROADMAP

### Version 1.0 (Current) ✅
- 3D interactive house exploration
- Character control system
- Physics & movement
- Popup system
- 12 project showcases

### Version 1.1 (Q1 2025) 🔄
- Mobile touch controls
- Sound toggle UI
- Loading progress bar
- Tutorial overlay
- Performance mode

### Version 2.0 (Q3 2025) 📅
- VR mode support (WebXR)
- Multiplayer exploration
- Dynamic content loading (CMS)
- Character customization
- Achievement system

---

## 📄 LICENSE

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Alma Nurul Salma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

See full license in [LICENSE](LICENSE) file.

### Dependencies Licenses

- **Three.js** - MIT License
- **GSAP** - Standard "no charge" license
- **Locomotive Scroll** - MIT License
- **Pixelify Sans** - Open Font License (OFL)

---

## 🙏 ACKNOWLEDGMENTS

**Inspiration:**
- [Bruno Simon](https://bruno-simon.com/) - Iconic 3D portfolio

**Technologies:**
- [Three.js](https://threejs.org/) - Amazing 3D library
- [Blender](https://www.blender.org/) - Free 3D modeling software
- [GSAP](https://greensock.com/) - Animation library
- [Google Fonts](https://fonts.google.com/) - Pixelify Sans font

**Resources:**
- Three.js Documentation
- Blender Guru Tutorials
- WebGL Fundamentals
- MDN Web Docs
- Stack Overflow Community

---

## 👤 AUTHOR

**Alma Nurul Salma** (诺艾玛)

- **Student ID:** L25020007
- **Program:** Computer Science (Dual Degree)
- **Institution:** 南京晓庄大学 (Nanjing Xiaozhuang University)
- **Portfolio:** [Live URL]
- **GitHub:** [@[username]](https://github.com/[username])
- **Email:** [Contact Email]

---

## 📞 SUPPORT & CONTACT

**For Questions:**
- 📖 Technical Documentation: See [docs/DOKUMENTASI_LENGKAP.md](docs/DOKUMENTASI_LENGKAP.md)
- 🐛 Bug Reports: Open an issue on GitHub
- 💡 Feature Requests: Open an issue on GitHub
- 💬 General Inquiries: Contact via portfolio contact page

---

## ⭐ STAR THIS REPO

If you find this project interesting or useful, please consider giving it a star! ⭐

```
git clone https://github.com/[username]/3d-web-portfolio.git
```

---

<div align="center">

### 🎉 Thank you for visiting! 🎉

**Made with ❤️ using Three.js, WebGL, and passion for 3D graphics**

**诺艾玛 (Alma Nurul Salma) | L25020007**
**Computer Science - Dual Degree Program**
**南京晓庄大学 (Nanjing Xiaozhuang University)**

---

**Last Updated:** January 2025
**Version:** 1.0
**Status:** ✅ Production Ready

[![Three.js](https://img.shields.io/badge/Powered%20by-Three.js-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![WebGL](https://img.shields.io/badge/WebGL-Enabled-red?style=flat-square)](https://www.khronos.org/webgl/)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square)](https://github.com/[username])

</div>
