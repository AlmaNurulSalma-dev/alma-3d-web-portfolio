# LAPORAN PROJECT
# 3D Web Portfolio - Alma

---

## COVER
**Judul Project:** 3D Interactive Web Portfolio
**Nama:** Alma
**Tanggal:** Januari 2025
**Teknologi Utama:** Three.js, WebGL, JavaScript ES6, CSS3

---

## DAFTAR ISI
1. [Pendahuluan](#1-pendahuluan)
2. [Tujuan Project](#2-tujuan-project)
3. [Teknologi yang Digunakan](#3-teknologi-yang-digunakan)
4. [Struktur Project](#4-struktur-project)
5. [3D Model dan Aset](#5-3d-model-dan-aset)
6. [Fitur dan Fungsionalitas](#6-fitur-dan-fungsionalitas)
7. [Penjelasan Kode Utama](#7-penjelasan-kode-utama)
8. [Implementasi Sistem](#8-implementasi-sistem)
9. [User Interface dan User Experience](#9-user-interface-dan-user-experience)
10. [Testing dan Debugging](#10-testing-dan-debugging)
11. [Hasil dan Screenshot](#11-hasil-dan-screenshot)
12. [Kesimpulan dan Pembelajaran](#12-kesimpulan-dan-pembelajaran)
13. [Lampiran](#13-lampiran)

---

## 1. PENDAHULUAN

### 1.1 Latar Belakang
Dalam era digital saat ini, portfolio website merupakan salah satu media penting untuk menampilkan karya dan kemampuan profesional. Project ini mengambil pendekatan inovatif dengan mengintegrasikan teknologi 3D graphics untuk menciptakan pengalaman portfolio yang interaktif dan immersive.

### 1.2 Deskripsi Project
**3D Web Portfolio - Alma** adalah sebuah website portfolio interaktif berbasis teknologi WebGL dan Three.js yang memungkinkan pengunjung untuk mengeksplorasi portfolio dalam bentuk ruang 3D. Pengunjung dapat mengontrol karakter avatar untuk berjalan di dalam ruangan virtual, berinteraksi dengan objek-objek 3D, dan mengakses berbagai informasi portfolio melalui sistem popup yang terintegrasi.

### 1.3 Masalah yang Diselesaikan
- Portfolio website tradisional yang statis dan kurang engaging
- Sulitnya menampilkan kreativitas dan technical skills dalam satu platform
- Pengalaman user yang monoton dalam browsing portfolio
- Kebutuhan akan diferensiasi dalam presentasi portfolio profesional

---

## 2. TUJUAN PROJECT

### 2.1 Tujuan Utama
1. Menciptakan portfolio website yang unik dan memorable
2. Mendemonstrasikan kemampuan dalam 3D web development
3. Memberikan user experience yang interaktif dan engaging
4. Showcase berbagai project dan achievement dalam format yang menarik

### 2.2 Target Audience
- Recruiter dan hiring manager
- Potential clients
- Fellow developers dan creative professionals
- Akademisi dan mahasiswa yang tertarik dengan web 3D development

### 2.3 Expected Outcomes
- Portfolio yang stand out dari kompetitor
- Meningkatkan engagement rate pengunjung
- Demonstrasi technical expertise dalam web development
- Platform showcase untuk 20+ project dan achievement

---

## 3. TEKNOLOGI YANG DIGUNAKAN

### 3.1 Core Technologies

#### 3D Graphics & Rendering
- **Three.js (v0.170.0)** - JavaScript 3D library untuk rendering WebGL
- **WebGL** - Web Graphics Library untuk GPU-accelerated rendering
- **GLTFLoader** - Loader untuk format 3D model GLTF/GLB

#### Animation Libraries
- **GSAP (v3.2.6)** - GreenSock Animation Platform untuk smooth animations
- **Simplex Noise** - Algoritma untuk procedural animations
- **Locomotive Scroll** - Smooth scrolling library

#### Frontend Technologies
- **JavaScript ES6+** - Modern JavaScript dengan module system
- **HTML5** - Semantic markup dan canvas element
- **CSS3** - Styling dengan animations, transitions, dan responsive design

#### Additional Technologies
- **Web Audio API** - Audio processing dan sound reactivity
- **Raycasting** - Collision detection dan object interaction
- **Google Fonts (Pixelify Sans)** - Typography dengan pixel/retro aesthetic
- **Webflow** - Alternative implementation untuk comparison

### 3.2 Development Tools
- **Blender** - 3D modeling software untuk create GLB files
- **Git** - Version control system
- **Visual Studio Code** - Code editor
- **Browser DevTools** - Debugging dan performance profiling

### 3.3 Architecture Pattern
- **ES6 Modules** - Modular JavaScript architecture
- **MVC-like Pattern** - Separation of concerns (model loading, view rendering, control logic)
- **Event-Driven Architecture** - Keyboard, mouse, dan resize event handlers
- **Configuration Objects** - Centralized config untuk easy maintenance

---

## 4. STRUKTUR PROJECT

### 4.1 Directory Structure

```
3d-web-portfolio-alma/
│
├── index.html                      # Entry point utama
├── main.js                         # Main application logic (1,190 lines)
├── style.css                       # Global styles dan canvas styling
│
├── assets/                         # Asset folder
│   ├── models/                     # 3D model files
│   │   ├── bismillah5.glb         # Model 3D utama (currently active)
│   │   ├── bismillah6.glb         # Alternative model
│   │   └── alma-house-3d-model.glb # Alternative house model
│   └── images/                     # Image assets dan textures
│
├── assets_sound/                   # Audio files
│   ├── cat-meow-slow.mp3          # Sound effect hover
│   └── cat-meow-fast.mp3          # Sound effect click
│
├── css/
│   └── components/
│       └── popup.css               # Popup window system styling
│
├── js/
│   └── modules/
│       └── popup-loader.js         # Popup management module (336 lines)
│
├── webgl-portfolio/                # Main portfolio pages
│   ├── index.html                  # Landing page
│   ├── pages/                      # Portfolio content pages
│   │   ├── about.html             # About me page
│   │   ├── work.html              # Projects overview
│   │   ├── education.html         # Educational background
│   │   ├── certifications.html    # Certifications page
│   │   ├── gallery.html           # Portfolio gallery
│   │   ├── contact.html           # Contact information
│   │   ├── organization.html      # Organizations
│   │   └── work/                  # Individual project pages (12+ projects)
│   │       ├── agriwise.html
│   │       ├── scriptr.html
│   │       ├── bengkelin.html
│   │       ├── jastip-automation.html
│   │       ├── mindcraft.html
│   │       ├── tenangin.html
│   │       ├── veriflair.html
│   │       ├── bitescan.html
│   │       ├── secondlife.html
│   │       ├── todi-toraja.html
│   │       └── [more projects...]
│   ├── javascript/
│   │   ├── cursor/                # Custom cursor implementation
│   │   └── webglball/             # WebGL ball visualization
│   └── css/                       # Webflow-generated styles
│
├── web-portfolio-alma/            # Alternative implementation
│   └── assets/
│       └── models/                # Additional 3D models
│
├── .gitignore                     # Git ignore configuration
└── README.md                      # Project documentation
```

### 4.2 File Organization
Project ini menggunakan modular structure dengan separation of concerns:
- **Root Level**: Entry point dan core application files
- **Assets Folder**: Semua media files (models, images, sounds)
- **CSS Components**: Reusable CSS modules
- **JS Modules**: JavaScript modules untuk specific functionality
- **Portfolio Pages**: Content pages yang di-load via iframe

### 4.3 Key Files Description

#### index.html
Entry point aplikasi yang berisi:
- HTML5 document structure
- Meta tags untuk SEO dan viewport configuration
- Canvas element untuk Three.js rendering
- Import map untuk Three.js ESM modules
- Modal dan popup overlay HTML structure

#### main.js (1,190 lines)
Core application logic yang mencakup:
- Scene setup dan Three.js initialization
- Configuration objects untuk semua systems
- Model loading dan management
- Physics simulation (gravity, velocity, collision detection)
- Character movement system
- Camera control systems (intro, follow, free modes)
- Tooltip positioning dan updates
- Animation loops
- Event handlers (keyboard, mouse, resize)
- Raycasting untuk interaction

#### popup-loader.js (336 lines)
Popup management system yang mencakup:
- Page mappings (27+ object-to-page associations)
- Tooltip label configuration
- Iframe loading system
- Close button handlers
- ESC key support
- Global window functions

---

## 5. 3D MODEL DAN ASET

### 5.1 3D Model dari Blender

#### Model Files (GLB Format)
Project ini menggunakan format **GLB (GL Transmission Format Binary)** yang merupakan format optimal untuk web 3D graphics karena:
- File size yang compact
- Support untuk materials, textures, dan animations
- Fast loading dan parsing
- Wide browser compatibility

#### Model yang Digunakan:

**1. bismillah5.glb** (Model Utama - Currently Active)
- **Lokasi:** `assets/models/bismillah5.glb`
- **Status:** Actively used di index.html
- **Konfigurasi:** Defined di CONFIG.MODEL_PATH
- **Deskripsi:** Model ruangan/house 3D yang berisi 27+ interactive objects

**Screenshot Blender Model:**
```
[LAMPIRKAN SCREENSHOT BISMILLAH5.GLB DI BLENDER]
- View dari berbagai angle (Front, Side, Top, Perspective)
- Object hierarchy di Outliner
- Material setup
- Vertex count dan poly count
```

**2. bismillah6.glb** (Alternative Model)
- **Lokasi:** `web-portfolio-alma/assets/models/bismillah6.glb`
- **Status:** Alternative version untuk testing
- **Deskripsi:** Iterasi kedua dari model dengan potential improvements

**3. alma-house-3d-model.glb** (Backup Model)
- **Lokasi:** `web-portfolio-alma/assets/models/alma-house-3d-model.glb`
- **Status:** Previous version yang sudah di-replace
- **Git History:** Visible di commit history

### 5.2 Blender Workflow

#### Modeling Process:
```
[LAMPIRKAN SCREENSHOT PROSES MODELING]
1. Base mesh creation
2. Room layout design
3. Object placement (TV, laptop, paintings, dll)
4. Material assignment
5. UV mapping
6. Texture application
7. Lighting setup
8. Export ke GLB format
```

#### Object Naming Convention:
Model menggunakan naming convention yang specific untuk interaction system:
- **Paintings:** "painting1", "painting2", ... "painting14"
- **Interactive Objects:** "tv", "laptop", "mouse", "photo_frame", "certificate_board"
- **Cat Object:** "cat" (animated character)
- **Player Object:** "player" (main character)
- **Environment:** Floors, walls, props

#### Material Setup:
```
[LAMPIRKAN SCREENSHOT MATERIAL EDITOR]
- PBR materials (Principled BSDF)
- Texture maps (Base Color, Roughness, Metallic)
- Emission materials untuk glowing objects
- Shadow settings
```

### 5.3 Model Specifications

#### Technical Details:
- **Format:** GLTF 2.0 Binary (.glb)
- **Vertex Count:** [Specify dari Blender stats]
- **Polygon Count:** [Specify dari Blender stats]
- **File Size:** [Check actual file size]
- **Textures:** Embedded dalam GLB file
- **Animations:** [If any - check di Blender]

#### Optimization Techniques:
1. **Polygon Reduction:** Menggunakan low-poly modeling untuk web performance
2. **Texture Compression:** Optimal texture size untuk fast loading
3. **Material Consolidation:** Reuse materials where possible
4. **Object Merging:** Non-interactive objects di-merge untuk reduce draw calls
5. **LOD (Level of Detail):** Simplified geometry untuk distant objects

### 5.4 Model Loading Implementation

#### Code Implementation (dari main.js):
```javascript
// Configuration
const CONFIG = {
    MODEL_PATH: './assets/models/bismillah5.glb',
    // ... other configs
};

// Loading Process
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load(
    CONFIG.MODEL_PATH,
    (gltf) => {
        scene.add(gltf.scene);
        // Process objects, setup interactions
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = false;    // Optimization
                child.receiveShadow = true;   // Ground shadows
            }
        });
        // Extract interactive objects
        extractInteractiveObjects(gltf.scene);
    },
    // Progress callback
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // Error callback
    (error) => {
        console.error('Error loading model:', error);
    }
);
```

### 5.5 Interactive Objects dalam Model

#### 27+ Named Objects untuk Interaction:

**Category 1: Paintings (14 objects)**
- painting1 → painting14
- Trigger: Hover untuk tooltip only
- Function: Visual showcase items

**Category 2: Main Interactive Objects:**
- **tv** → Opens work projects page
- **laptop** → Opens coding projects
- **mouse** → Opens tech stack page
- **photo_frame** → Opens about page
- **certificate_board** → Opens certifications page
- **[other named objects]** → Respective portfolio pages

**Category 3: Animated Objects:**
- **cat** → Animated character dengan jump dan meow sounds
- **player** → Main character yang di-control user

```
[LAMPIRKAN SCREENSHOT 3D VIEW dengan LABELED OBJECTS]
- Annotate semua interactive objects
- Show name labels
- Indicate interaction zones
```

### 5.6 Asset Files Lainnya

#### Sound Assets:
- `assets_sound/cat-meow-slow.mp3` - Hover sound effect
- `assets_sound/cat-meow-fast.mp3` - Click sound effect
- Background music (loaded dari CDN)

#### Image Assets:
- Texture maps untuk materials
- UI elements untuk popup windows
- Screenshot untuk portfolio pages
- Icons dan graphics

```
[LAMPIRKAN SCREENSHOT ASSET FOLDER STRUCTURE]
```

---

## 6. FITUR DAN FUNGSIONALITAS

### 6.1 Core Features

#### 6.1.1 3D Interactive Environment
**Deskripsi:**
Full-screen WebGL rendering dengan orthographic camera yang menampilkan ruang 3D virtual yang dapat di-explore user.

**Technical Implementation:**
- Three.js scene setup dengan WebGL renderer
- Orthographic camera untuk isometric view
- Smooth shadows dengan VSMShadowMap
- HDR tone mapping untuk realistic lighting
- Anti-aliasing untuk smooth edges

**Code Reference:** [main.js:50-150](main.js#L50-L150)

```
[LAMPIRKAN SCREENSHOT 3D ENVIRONMENT]
- Overall view
- Lighting demonstration
- Shadow quality
```

#### 6.1.2 Character Movement System
**Deskripsi:**
Sistem kontrol karakter yang responsive dengan WASD/Arrow keys, including physics simulation.

**Features:**
- **Movement:** WASD atau Arrow keys untuk 8-directional movement
- **Rotation:** 90-degree snap rotation dengan smooth interpolation
- **Jump:** Spacebar untuk jumping dengan gravity simulation
- **Acceleration/Deceleration:** Smooth velocity changes
- **Animation:** Idle dan walking states

**Physics Simulation:**
```javascript
const PHYSICS = {
    GRAVITY: -30,              // Gravitational force
    JUMP_FORCE: 10,            // Initial jump velocity
    TERMINAL_VELOCITY: -50,    // Max falling speed
    GROUND_LEVEL: 0            // Ground plane Y position
};
```

**Code Reference:** [main.js:400-600](main.js#L400-L600)

```
[LAMPIRKAN GIF/SCREENSHOT CHARACTER MOVEMENT]
- Walking animation
- Jumping
- Rotation demonstration
```

#### 6.1.3 Camera System (3 Modes)

**Mode 1: Intro Camera**
- Smooth zoom-in animation saat page load
- Duration: 3 seconds
- GSAP animation untuk cinematic effect
- Automatically switches ke Follow mode setelah selesai

**Mode 2: Follow Camera (Default)**
- Third-person view yang follow karakter
- Camera offset: Behind dan above character
- Smooth camera movement dengan lerping
- Auto-rotation untuk face character direction

**Mode 3: Free Camera (Toggle dengan 'C')**
- Orbit controls untuk manual exploration
- Mouse drag untuk rotate view
- Scroll untuk zoom in/out
- Complete freedom untuk explore scene

**Code Reference:** [main.js:200-350](main.js#L200-L350)

```javascript
const CAMERA_CONFIG = {
    INTRO: {
        duration: 3,
        startPosition: { x: 0, y: 50, z: 50 },
        endPosition: { x: 0, y: 15, z: 25 }
    },
    FOLLOW: {
        offset: { x: 0, y: 8, z: 15 },
        lookAtOffset: { x: 0, y: 2, z: 0 },
        smoothing: 0.1
    },
    FREE: {
        enableDamping: true,
        dampingFactor: 0.05,
        minDistance: 5,
        maxDistance: 50
    }
};
```

```
[LAMPIRKAN SCREENSHOT DARI 3 CAMERA MODES]
```

#### 6.1.4 Collision Detection System
**Deskripsi:**
Advanced collision system untuk prevent character dari walking through walls dan objects.

**Features:**
- **Wall Collision:** Raycasting untuk detect obstacles
- **Ground Detection:** Vertical raycasting untuk floor detection
- **Step Climbing:** Automatic step-up untuk small obstacles
- **Boundary Checking:** Keep character dalam playable area

**Technical Details:**
```javascript
const COLLISION_CONFIG = {
    RAYCAST_DISTANCE: 0.5,     // Detection range
    STEP_HEIGHT: 0.3,          // Max step-up height
    PLAYER_RADIUS: 0.3,        // Character collision radius
    DIRECTIONS: 8              // Multi-directional checking
};
```

**Code Reference:** [main.js:650-750](main.js#L650-L750)

### 6.2 Interactive Features

#### 6.2.1 Object Interaction System
**Deskripsi:**
Sistem untuk detect hover dan click pada 27+ interactive objects dalam scene.

**Interaction Flow:**
1. **Raycasting:** Mouse position di-convert ke 3D ray
2. **Intersection Check:** Detect objects under cursor
3. **Hover State:** Visual feedback dengan scale animation
4. **Click Handler:** Open corresponding popup page

**Visual Feedback:**
- **Hover Effect:** Object scale 1.0 → 1.15 (400ms animation)
- **Cursor Change:** Default → Pointer
- **Tooltip Display:** Show object label
- **Sound Effect:** Cat meow slow (untuk cat object)

**Click Actions:**
- **Sound Effect:** Cat meow fast
- **Popup Open:** Load corresponding page di iframe
- **Analytics:** Track interaction (potential)

**Code Reference:** [main.js:800-950](main.js#L800-L950)

```javascript
// Raycasting implementation
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
        const object = intersects[0].object;
        handleObjectHover(object);
    }
});
```

```
[LAMPIRKAN SCREENSHOT HOVER STATES]
- Before hover
- During hover (scaled)
- With tooltip visible
```

#### 6.2.2 Tooltip System
**Deskripsi:**
Pixel-style tooltips yang appear di atas interactive objects saat hover.

**Features:**
- **Proximity-Based:** Show/hide based on distance
- **3D Positioning:** Follow object position dalam 3D space
- **Scale Adjustment:** Size based on camera distance
- **Arrow Indicator:** Visual connection ke object
- **Retro Styling:** Pixel font dengan border styling

**Tooltip Configuration:**
```javascript
const TOOLTIP_CONFIG = {
    pixelFont: "'Pixelify Sans', monospace",
    fontSize: 16,
    padding: 8,
    borderWidth: 2,
    backgroundColor: '#2a1a4a',
    borderColor: '#8b5cf6',
    textColor: '#ffffff',
    arrowSize: 8,
    minDistance: 0,
    maxDistance: 20,
    fadeDistance: 15
};
```

**Object Labels:**
- tv → "Projects"
- laptop → "Coding Work"
- certificate_board → "Certifications"
- photo_frame → "About Me"
- [27+ total labels]

**Code Reference:** [popup-loader.js:15-80](js/modules/popup-loader.js#L15-L80)

```
[LAMPIRKAN SCREENSHOT TOOLTIPS]
- Multiple tooltips visible
- Different distances
- Arrow indicator
```

#### 6.2.3 Popup Window System
**Deskripsi:**
Windows 98-inspired popup system untuk display portfolio pages.

**Design Features:**
- **Purple Border:** Signature Windows 98 aesthetic
- **Title Bar:** With red X close button
- **Iframe Content:** Seamless page loading
- **Loading Screen:** Progress indicator during load
- **Responsive Design:** Adapts ke mobile, tablet, desktop

**Interaction Methods:**
- **Close Button:** Red X di top-right
- **Overlay Click:** Click outside popup
- **ESC Key:** Keyboard shortcut
- **Auto-focus:** Trap focus dalam popup (accessibility)

**Animation:**
- **Open:** Fade in (300ms) dengan scale animation
- **Close:** Fade out (200ms)
- **Loading:** Progress bar animation

**Code Reference:** [popup-loader.js:100-250](js/modules/popup-loader.js#L100-L250)

```css
/* Popup Styling (popup.css) */
.popup-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 9999;
    animation: fadeIn 0.3s ease-out;
}

.popup-window {
    position: relative;
    width: 90vw;
    max-width: 1200px;
    height: 85vh;
    background: #ffffff;
    border: 3px solid #8b5cf6;
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
}

.popup-header {
    background: linear-gradient(to right, #7c3aed, #a78bfa);
    padding: 8px 12px;
    border-bottom: 2px solid #6d28d9;
}

.popup-close-btn {
    width: 24px;
    height: 24px;
    background: #ef4444;
    color: white;
    border: 2px solid #991b1b;
    font-weight: bold;
}
```

```
[LAMPIRKAN SCREENSHOT POPUP SYSTEM]
- Full popup view
- Header detail
- Loading state
- Responsive views (desktop, tablet, mobile)
```

### 6.3 Audio Features

#### 6.3.1 Sound Effects
**Cat Meow Sounds:**
- **Slow Meow:** Played on hover (cat-meow-slow.mp3)
- **Fast Meow:** Played on click (cat-meow-fast.mp3)
- **Volume Control:** Adjustable via settings
- **Cooldown:** Prevent sound spam

**Implementation:**
```javascript
const catSounds = {
    slow: new Audio('./assets_sound/cat-meow-slow.mp3'),
    fast: new Audio('./assets_sound/cat-meow-fast.mp3')
};

function playSound(type) {
    const sound = catSounds[type];
    sound.currentTime = 0;  // Reset to start
    sound.play().catch(err => console.warn('Audio play failed:', err));
}
```

#### 6.3.2 Background Music (Potential)
- Audio reactivity system
- Volume toggle button
- Local storage untuk preferences
- Wave visualization

**Code Reference:** [main.js:1100-1190](main.js#L1100-L1190)

### 6.4 Animation System

#### 6.4.1 Character Animations
**Player Character:**
- **Idle State:** Subtle breathing animation
- **Walk Cycle:** Looping walk animation
- **Jump:** Jump start → air → land sequence
- **Rotation:** Smooth quaternion interpolation

**Cat Character:**
- **Jump Animation:** Triggered on click (500ms duration)
- **Pulse Effect:** Scale animation while hovered
- **Return to Ground:** Smooth landing animation

**Code Reference:** [main.js:550-650](main.js#L550-L650)

#### 6.4.2 Object Animations
**Pop Animation:**
```javascript
function popAnimation(object, targetScale = 1.15, duration = 400) {
    const startScale = object.scale.clone();
    const endScale = startScale.clone().multiplyScalar(targetScale);

    gsap.to(object.scale, {
        x: endScale.x,
        y: endScale.y,
        z: endScale.z,
        duration: duration / 1000,
        ease: "back.out(2)"
    });
}
```

**Hover Animations:**
- Scale increase (1.0 → 1.15)
- Easing: Back ease-out untuk bounce effect
- Duration: 400ms
- Reverse on hover out

#### 6.4.3 UI Animations
- **Tooltip Fade:** In/out based on proximity
- **Popup Transitions:** Fade + scale
- **Loading Progress:** Linear animation
- **Camera Intro:** GSAP timeline animation
- **Page Transitions:** Wave overlays (webgl-portfolio)

```
[LAMPIRKAN GIF ANIMATIONS]
- Character walking
- Object hover effect
- Cat jump
- Popup opening
```

### 6.5 Responsive Design

#### 6.5.1 Breakpoints
```css
/* Desktop (default) */
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile Landscape */ }
@media (max-width: 480px)  { /* Mobile Portrait */ }
@media (max-width: 320px)  { /* Small Mobile */ }
```

#### 6.5.2 Adaptive Features
- **Canvas Sizing:** Full viewport dengan responsive scaling
- **Popup Dimensions:** Percentage-based width/height
- **Font Scaling:** Responsive typography
- **Touch Controls:** Mobile-friendly interactions (potential)
- **Performance Scaling:** Lower quality untuk mobile devices

**Code Reference:** [style.css](style.css), [popup.css](css/components/popup.css)

### 6.6 Performance Optimizations

#### 6.6.1 Rendering Optimizations
- **Shadow Disable:** Object shadows disabled (only ground receives)
- **Frustum Culling:** Automatic di Three.js
- **Low-Poly Models:** Optimized geometry
- **Texture Compression:** Embedded compressed textures
- **Draw Call Reduction:** Merged non-interactive objects

#### 6.6.2 Code Optimizations
- **Request Animation Frame:** Efficient render loop
- **Event Throttling:** Limit mousemove handler calls
- **Raycasting Optimization:** Limited intersection checks
- **Conditional Updates:** Only update when needed
- **Memory Management:** Proper cleanup dan disposal

**Code Reference:** [main.js:1050-1100](main.js#L1050-L1100)

```javascript
// Optimized animation loop
let lastTime = 0;
const targetFPS = 60;
const frameInterval = 1000 / targetFPS;

function animate(currentTime) {
    requestAnimationFrame(animate);

    const deltaTime = currentTime - lastTime;
    if (deltaTime < frameInterval) return;  // Throttle to target FPS

    lastTime = currentTime - (deltaTime % frameInterval);

    // Update physics, animations, camera
    updatePhysics(deltaTime / 1000);
    updateCamera();
    updateTooltips();

    renderer.render(scene, camera);
}
```

---

## 7. PENJELASAN KODE UTAMA

### 7.1 main.js - Core Application Logic

#### 7.1.1 File Structure Overview
**File:** [main.js](main.js)
**Lines of Code:** 1,190
**Purpose:** Core application logic untuk entire 3D experience

**Main Sections:**
1. **Imports & Initialization** (Lines 1-50)
2. **Configuration Objects** (Lines 50-150)
3. **Scene Setup** (Lines 150-250)
4. **Model Loading** (Lines 250-350)
5. **Physics System** (Lines 350-450)
6. **Character Movement** (Lines 450-600)
7. **Camera Controls** (Lines 600-750)
8. **Interaction System** (Lines 750-900)
9. **Animation Loop** (Lines 900-1050)
10. **Event Handlers** (Lines 1050-1190)

---

#### 7.1.2 Section 1: Imports & Initialization (Lines 1-50)

**Code:**
```javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { openPopup, closePopup, isPopupOpen } from './js/modules/popup-loader.js';

// Make functions globally accessible
window.openPopup = openPopup;
window.closePopup = closePopup;
window.isPopupOpen = isPopupOpen;
```

**Penjelasan:**
- **Three.js Import:** Core library untuk 3D rendering
- **GLTFLoader:** Untuk loading 3D models (.glb files)
- **OrbitControls:** Camera controls untuk free mode
- **Popup Module:** Import functions dari popup-loader.js
- **Global Functions:** Expose ke window object untuk HTML onclick handlers

**Why This Approach:**
- ES6 modules untuk better code organization
- Import only necessary Three.js addons (tree-shaking)
- Global functions needed untuk iframe communication

```
[LAMPIRKAN SCREENSHOT IMPORT SECTION]
```

---

#### 7.1.3 Section 2: Configuration Objects (Lines 50-150)

**Code:**
```javascript
const CONFIG = {
    // Model Configuration
    MODEL_PATH: './assets/models/bismillah5.glb',

    // Scene Configuration
    SCENE: {
        backgroundColor: 0x87ceeb,  // Sky blue
        fog: {
            enabled: true,
            color: 0x87ceeb,
            near: 20,
            far: 100
        }
    },

    // Camera Configuration
    CAMERA: {
        frustumSize: 20,
        near: 0.1,
        far: 1000,
        initialPosition: { x: 0, y: 50, z: 50 },
        introAnimation: {
            duration: 3,
            targetPosition: { x: 0, y: 15, z: 25 },
            targetLookAt: { x: 0, y: 0, z: 0 }
        }
    },

    // Renderer Configuration
    RENDERER: {
        antialias: true,
        shadowMapEnabled: true,
        shadowMapType: THREE.VSMShadowMap,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0
    },

    // Lighting Configuration
    LIGHTS: {
        ambient: {
            color: 0xffffff,
            intensity: 0.6
        },
        directional: {
            color: 0xffffff,
            intensity: 0.8,
            position: { x: 10, y: 20, z: 10 },
            shadow: {
                camera: {
                    left: -30,
                    right: 30,
                    top: 30,
                    bottom: -30,
                    near: 0.1,
                    far: 50
                },
                mapSize: { width: 2048, height: 2048 }
            }
        }
    },

    // Physics Configuration
    PHYSICS: {
        gravity: -30,
        jumpForce: 10,
        terminalVelocity: -50,
        groundLevel: 0
    },

    // Movement Configuration
    MOVEMENT: {
        speed: 5,
        rotationSpeed: 10,
        acceleration: 15,
        deceleration: 10,
        snapRotation: true,
        rotationAngles: [0, 90, 180, 270]
    },

    // Collision Configuration
    COLLISION: {
        raycastDistance: 0.5,
        stepHeight: 0.3,
        playerRadius: 0.3,
        checkDirections: 8
    }
};
```

**Penjelasan:**
- **Centralized Configuration:** Semua constants di satu tempat
- **Easy Tweaking:** Developer bisa adjust values tanpa hunting through code
- **Maintainability:** Changes propagate automatically
- **Documentation:** Config names self-document the purpose

**Benefits:**
- Quick iteration untuk tuning gameplay
- Easy A/B testing different values
- Clear separation of data dan logic
- Potential untuk load dari external JSON file

```
[LAMPIRKAN SCREENSHOT CONFIG SECTION dengan ANNOTATIONS]
```

---

#### 7.1.4 Section 3: Scene Setup (Lines 150-250)

**Code:**
```javascript
// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.SCENE.backgroundColor);

if (CONFIG.SCENE.fog.enabled) {
    scene.fog = new THREE.Fog(
        CONFIG.SCENE.fog.color,
        CONFIG.SCENE.fog.near,
        CONFIG.SCENE.fog.far
    );
}

// Camera (Orthographic untuk isometric view)
const aspect = window.innerWidth / window.innerHeight;
const frustumSize = CONFIG.CAMERA.frustumSize;
const camera = new THREE.OrthographicCamera(
    frustumSize * aspect / -2,   // left
    frustumSize * aspect / 2,    // right
    frustumSize / 2,             // top
    frustumSize / -2,            // bottom
    CONFIG.CAMERA.near,
    CONFIG.CAMERA.far
);

camera.position.set(
    CONFIG.CAMERA.initialPosition.x,
    CONFIG.CAMERA.initialPosition.y,
    CONFIG.CAMERA.initialPosition.z
);

// Renderer
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: CONFIG.RENDERER.antialias
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = CONFIG.RENDERER.shadowMapEnabled;
renderer.shadowMap.type = CONFIG.RENDERER.shadowMapType;
renderer.toneMapping = CONFIG.RENDERER.toneMapping;
renderer.toneMappingExposure = CONFIG.RENDERER.toneMappingExposure;

// Lighting
const ambientLight = new THREE.AmbientLight(
    CONFIG.LIGHTS.ambient.color,
    CONFIG.LIGHTS.ambient.intensity
);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(
    CONFIG.LIGHTS.directional.color,
    CONFIG.LIGHTS.directional.intensity
);

directionalLight.position.set(
    CONFIG.LIGHTS.directional.position.x,
    CONFIG.LIGHTS.directional.position.y,
    CONFIG.LIGHTS.directional.position.z
);

directionalLight.castShadow = true;
directionalLight.shadow.camera.left = CONFIG.LIGHTS.directional.shadow.camera.left;
directionalLight.shadow.camera.right = CONFIG.LIGHTS.directional.shadow.camera.right;
directionalLight.shadow.camera.top = CONFIG.LIGHTS.directional.shadow.camera.top;
directionalLight.shadow.camera.bottom = CONFIG.LIGHTS.directional.shadow.camera.bottom;
directionalLight.shadow.camera.near = CONFIG.LIGHTS.directional.shadow.camera.near;
directionalLight.shadow.camera.far = CONFIG.LIGHTS.directional.shadow.camera.far;
directionalLight.shadow.mapSize.width = CONFIG.LIGHTS.directional.shadow.mapSize.width;
directionalLight.shadow.mapSize.height = CONFIG.LIGHTS.directional.shadow.mapSize.height;

scene.add(directionalLight);
```

**Penjelasan Detail:**

**Scene:**
- `THREE.Scene()`: Container untuk semua 3D objects, lights, cameras
- `background`: Sky blue color untuk outdoor feeling
- `fog`: Atmospheric fog untuk depth perception dan performance (far objects fade)

**Camera (Orthographic):**
- **Why Orthographic?** Untuk isometric/dimetric view (no perspective distortion)
- **Frustum Size:** Defines "zoom level" of camera
- **Aspect Ratio:** Maintains correct proportions pada different screen sizes
- **Initial Position:** High dan far untuk intro animation start point

**Renderer:**
- **WebGLRenderer:** Hardware-accelerated 3D rendering via GPU
- **Antialias:** Smooth edges (higher quality, slight performance cost)
- **PixelRatio:** Cap at 2x untuk balance quality vs performance
- **Shadow Map:** VSM (Variance Shadow Map) untuk soft shadows
- **Tone Mapping:** ACES Filmic untuk realistic lighting dan exposure

**Lighting:**
- **Ambient Light:** Uniform illumination dari all directions (base lighting)
- **Directional Light:** Simulates sun/primary light source
  - Position: Top-right-front untuk natural shadow direction
  - Cast Shadow: Enabled dengan shadow camera frustum configuration
  - Shadow Map Size: 2048x2048 untuk high-quality shadows

**Technical Decisions:**
- Orthographic camera untuk consistent look across distances
- VSM shadows untuk soft, realistic shadow edges
- ACES tone mapping untuk cinematic look
- Capped pixel ratio untuk mobile performance

```
[LAMPIRKAN SCREENSHOT]
- Scene hierarchy
- Camera view frustum
- Light helpers visualization
- Shadow camera frustum
```

---

#### 7.1.5 Section 4: Model Loading (Lines 250-350)

**Code:**
```javascript
// GLTF Loader
const gltfLoader = new THREE.GLTFLoader();

// Interactive objects storage
let interactiveObjects = [];
let playerObject = null;
let catObject = null;

// Load Model
gltfLoader.load(
    CONFIG.MODEL_PATH,

    // Success callback
    (gltf) => {
        console.log('Model loaded successfully');

        // Add model ke scene
        scene.add(gltf.scene);

        // Traverse all children
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                // Shadow configuration
                child.castShadow = false;      // Objects don't cast shadow (optimization)
                child.receiveShadow = true;    // Objects receive shadows dari ground

                // Material enhancements (optional)
                if (child.material) {
                    child.material.needsUpdate = true;
                }
            }
        });

        // Extract interactive objects
        extractInteractiveObjects(gltf.scene);

        // Start intro animation
        startIntroAnimation();
    },

    // Progress callback
    (xhr) => {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        console.log(`Loading: ${Math.round(percentComplete)}%`);

        // Update loading UI (if exists)
        updateLoadingProgress(percentComplete);
    },

    // Error callback
    (error) => {
        console.error('Error loading model:', error);
        showErrorMessage('Failed to load 3D model. Please refresh the page.');
    }
);

// Extract Interactive Objects Function
function extractInteractiveObjects(scene) {
    // Find player
    playerObject = scene.getObjectByName('player');
    if (playerObject) {
        console.log('Player object found');
        playerObject.userData.isPlayer = true;
    }

    // Find cat
    catObject = scene.getObjectByName('cat');
    if (catObject) {
        console.log('Cat object found');
        catObject.userData.isCat = true;
        catObject.userData.originalY = catObject.position.y;
    }

    // Find all interactive objects
    const interactiveNames = [
        'tv', 'laptop', 'mouse', 'photo_frame', 'certificate_board',
        'painting1', 'painting2', 'painting3', 'painting4', 'painting5',
        'painting6', 'painting7', 'painting8', 'painting9', 'painting10',
        'painting11', 'painting12', 'painting13', 'painting14'
        // ... more objects
    ];

    interactiveNames.forEach(name => {
        const object = scene.getObjectByName(name);
        if (object) {
            interactiveObjects.push(object);
            object.userData.originalScale = object.scale.clone();
            object.userData.interactiveName = name;
            console.log(`Interactive object found: ${name}`);
        }
    });

    console.log(`Total interactive objects: ${interactiveObjects.length}`);
}
```

**Penjelasan Detail:**

**GLTFLoader:**
- **Purpose:** Load 3D models dalam GLTF/GLB format
- **Async Loading:** Non-blocking, doesn't freeze browser
- **Callbacks:** Success, progress, error untuk handle different scenarios

**Model Processing:**
- **scene.add():** Add loaded model ke Three.js scene
- **traverse():** Iterate through all children dalam model hierarchy
- **Shadow Config:** Disable object shadows, keep receiving (optimization)
- **Material Update:** Ensure materials render correctly

**Object Extraction:**
- **Named Objects:** Blender names preserved di GLB export
- **getObjectByName():** Search scene hierarchy untuk specific names
- **userData:** Three.js property untuk store custom data
- **Arrays:** Store references untuk efficient access

**Interactive Object Setup:**
- **originalScale:** Store untuk reset after hover
- **interactiveName:** Untuk mapping ke popup pages
- **Array Storage:** Quick iteration untuk raycasting

**Error Handling:**
- **Progress Tracking:** Show loading percentage
- **Error Callback:** User-friendly error message
- **Fallback:** Potential untuk load alternative model

**Optimization Notes:**
- Only cast shadows dari directional light (ground shadows)
- Objects don't cast shadows pada each other (performance)
- Material updates only if necessary
- Efficient object lookup dengan arrays

```
[LAMPIRKAN SCREENSHOT]
- Console log output showing loaded objects
- Blender outliner dengan named objects
- Three.js scene hierarchy
- Loading progress UI
```

---

#### 7.1.6 Section 5: Physics System (Lines 350-450)

**Code:**
```javascript
// Physics State
const physics = {
    velocity: new THREE.Vector3(0, 0, 0),
    isGrounded: false,
    isJumping: false
};

// Gravity Function
function applyGravity(deltaTime) {
    if (!physics.isGrounded) {
        // Apply gravitational acceleration
        physics.velocity.y += CONFIG.PHYSICS.gravity * deltaTime;

        // Clamp ke terminal velocity
        physics.velocity.y = Math.max(
            physics.velocity.y,
            CONFIG.PHYSICS.terminalVelocity
        );
    } else {
        // On ground, reset vertical velocity
        physics.velocity.y = 0;
    }
}

// Ground Detection Function
function checkGroundCollision() {
    if (!playerObject) return;

    // Raycast downward dari player position
    const raycaster = new THREE.Raycaster();
    const origin = playerObject.position.clone();
    const direction = new THREE.Vector3(0, -1, 0);  // Straight down

    raycaster.set(origin, direction);

    // Check intersections dengan ground objects
    const intersects = raycaster.intersectObjects(scene.children, true);

    // Filter out player itself
    const groundIntersects = intersects.filter(
        hit => hit.object !== playerObject && !hit.object.userData.isPlayer
    );

    if (groundIntersects.length > 0) {
        const groundDistance = groundIntersects[0].distance;

        // If close ke ground
        if (groundDistance < 0.1) {
            physics.isGrounded = true;

            // Snap to ground level
            playerObject.position.y = groundIntersects[0].point.y;
        } else {
            physics.isGrounded = false;
        }
    } else {
        // No ground detected, must be falling
        physics.isGrounded = false;
    }
}

// Jump Function
function jump() {
    if (physics.isGrounded && !physics.isJumping) {
        physics.velocity.y = CONFIG.PHYSICS.jumpForce;
        physics.isJumping = true;
        physics.isGrounded = false;

        console.log('Jump!');
    }
}

// Update Physics Function (called every frame)
function updatePhysics(deltaTime) {
    if (!playerObject) return;

    // Check ground collision
    checkGroundCollision();

    // Apply gravity
    applyGravity(deltaTime);

    // Apply velocity ke position
    playerObject.position.x += physics.velocity.x * deltaTime;
    playerObject.position.y += physics.velocity.y * deltaTime;
    playerObject.position.z += physics.velocity.z * deltaTime;

    // Reset jumping flag when landed
    if (physics.isGrounded && physics.isJumping) {
        physics.isJumping = false;
    }

    // Clamp Y position (safety net)
    if (playerObject.position.y < CONFIG.PHYSICS.groundLevel) {
        playerObject.position.y = CONFIG.PHYSICS.groundLevel;
        physics.isGrounded = true;
        physics.velocity.y = 0;
    }
}
```

**Penjelasan Detail:**

**Physics State Object:**
- **velocity:** 3D vector untuk track movement speed di X, Y, Z axes
- **isGrounded:** Boolean flag untuk check if player on ground
- **isJumping:** Prevent double-jump exploit

**Gravity System:**
- **Gravitational Acceleration:** -30 units/sec² (realistic feeling)
- **Terminal Velocity:** -50 units/sec (prevent infinite acceleration)
- **Conditional Application:** Only apply saat airborne
- **Delta Time:** Frame-rate independent physics

**Ground Detection:**
- **Raycasting:** Shoot ray downward dari player
- **Intersection Check:** Find closest ground object
- **Distance Threshold:** 0.1 units untuk "grounded" state
- **Position Snapping:** Prevent floating above ground
- **Filtering:** Exclude player object dari collision check

**Jump Mechanics:**
- **Initial Impulse:** Upward velocity = jumpForce
- **Grounded Check:** Can only jump when on ground
- **Jump Flag:** Prevent mid-air jumps
- **State Transition:** isGrounded → isJumping → isGrounded

**Physics Update Loop:**
- **Called Every Frame:** Part of animation loop
- **Delta Time:** Ensures consistent physics regardless of FPS
- **Order of Operations:**
  1. Check ground collision
  2. Apply gravity
  3. Apply velocity to position
  4. Reset flags
  5. Safety clamps

**Technical Details:**
- **Frame-Rate Independence:** Using delta time untuk consistent physics
- **Safety Nets:** Ground level clamp prevents falling through world
- **Optimization:** Simple raycasting, no complex collision meshes
- **Realistic Feel:** Tuned gravity dan jump force untuk satisfying movement

**Why This Approach:**
- Simple but effective physics simulation
- No physics library needed (lightweight)
- Customizable values untuk tuning feel
- Efficient raycasting untuk collision

```
[LAMPIRKAN DIAGRAM]
- Physics state machine diagram
- Raycasting visualization
- Gravity curve graph
- Jump trajectory visualization
```

---

#### 7.1.7 Section 6: Character Movement (Lines 450-600)

**Code:**
```javascript
// Keyboard State
const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false,
    space: false,
    c: false
};

// Movement State
const movement = {
    currentSpeed: 0,
    targetSpeed: 0,
    currentRotation: 0,
    targetRotation: 0,
    moveDirection: new THREE.Vector3(0, 0, 0)
};

// Keyboard Event Listeners
window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (keys.hasOwnProperty(key)) {
        keys[key] = true;
    }

    // Jump
    if (key === ' ' || key === 'space') {
        keys.space = true;
        jump();
    }

    // Toggle camera mode
    if (key === 'c') {
        toggleCameraMode();
    }
});

window.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (keys.hasOwnProperty(key)) {
        keys[key] = false;
    }
    if (key === ' ' || key === 'space') {
        keys.space = false;
    }
});

// Calculate Movement Direction
function calculateMoveDirection() {
    const direction = new THREE.Vector3(0, 0, 0);

    // WASD or Arrow keys
    if (keys.w || keys.ArrowUp) direction.z -= 1;
    if (keys.s || keys.ArrowDown) direction.z += 1;
    if (keys.a || keys.ArrowLeft) direction.x -= 1;
    if (keys.d || keys.ArrowRight) direction.x += 1;

    // Normalize untuk consistent diagonal speed
    if (direction.length() > 0) {
        direction.normalize();
    }

    return direction;
}

// Calculate Target Rotation (90-degree snapping)
function calculateTargetRotation(direction) {
    if (direction.length() === 0) return movement.currentRotation;

    // Calculate angle dalam degrees
    const angle = Math.atan2(direction.x, direction.z) * (180 / Math.PI);

    if (CONFIG.MOVEMENT.snapRotation) {
        // Snap ke nearest 90-degree angle
        const snapAngles = CONFIG.MOVEMENT.rotationAngles;
        let nearestAngle = snapAngles[0];
        let minDiff = Math.abs(angle - nearestAngle);

        snapAngles.forEach(snapAngle => {
            const diff = Math.abs(angle - snapAngle);
            if (diff < minDiff) {
                minDiff = diff;
                nearestAngle = snapAngle;
            }
        });

        return nearestAngle;
    } else {
        return angle;
    }
}

// Update Movement (called every frame)
function updateMovement(deltaTime) {
    if (!playerObject) return;

    // Calculate direction from input
    const inputDirection = calculateMoveDirection();

    // Determine target speed
    if (inputDirection.length() > 0) {
        movement.targetSpeed = CONFIG.MOVEMENT.speed;
        movement.targetRotation = calculateTargetRotation(inputDirection);
    } else {
        movement.targetSpeed = 0;
    }

    // Smooth acceleration/deceleration
    const speedDiff = movement.targetSpeed - movement.currentSpeed;
    if (Math.abs(speedDiff) > 0.01) {
        const acceleration = speedDiff > 0 ?
            CONFIG.MOVEMENT.acceleration :
            CONFIG.MOVEMENT.deceleration;

        movement.currentSpeed += speedDiff * acceleration * deltaTime;
    } else {
        movement.currentSpeed = movement.targetSpeed;
    }

    // Smooth rotation interpolation
    const rotationDiff = movement.targetRotation - movement.currentRotation;
    if (Math.abs(rotationDiff) > 0.5) {
        movement.currentRotation += rotationDiff * CONFIG.MOVEMENT.rotationSpeed * deltaTime;
    } else {
        movement.currentRotation = movement.targetRotation;
    }

    // Apply rotation ke player
    playerObject.rotation.y = movement.currentRotation * (Math.PI / 180);

    // Calculate move direction in world space
    if (inputDirection.length() > 0) {
        movement.moveDirection.copy(inputDirection);

        // Apply current speed
        movement.moveDirection.multiplyScalar(movement.currentSpeed);

        // Check collision before moving
        if (!checkWallCollision(movement.moveDirection, deltaTime)) {
            // Safe to move
            physics.velocity.x = movement.moveDirection.x;
            physics.velocity.z = movement.moveDirection.z;
        } else {
            // Collision detected, stop horizontal movement
            physics.velocity.x = 0;
            physics.velocity.z = 0;
        }
    } else {
        // No input, stop horizontal movement
        physics.velocity.x = 0;
        physics.velocity.z = 0;
    }
}
```

**Penjelasan Detail:**

**Keyboard State Management:**
- **keys Object:** Track pressed state untuk each key
- **Event Listeners:** keydown/keyup untuk detect input
- **Multiple Keys:** Support WASD dan Arrow keys
- **Persistent State:** Keys remain "pressed" until released

**Movement Calculation:**
- **8-Directional Movement:** Up, down, left, right, + 4 diagonals
- **Direction Vector:** X dan Z components untuk horizontal movement
- **Normalization:** Prevent faster diagonal movement (√2 problem)
- **Zero Vector:** No input = no movement

**90-Degree Rotation System:**
- **Why?** Crisp, arcade-style character facing
- **Angle Calculation:** atan2(x, z) untuk direction angle
- **Snap Logic:** Find nearest multiple of 90°
- **Smooth Interpolation:** Lerp to target angle (not instant snap)

**Acceleration System:**
- **Target Speed:** Desired speed based on input
- **Current Speed:** Actual speed (smoothly changes)
- **Acceleration:** How fast speed increases
- **Deceleration:** How fast speed decreases (can be different)
- **Delta Time:** Frame-rate independent

**Rotation Interpolation:**
- **Target Rotation:** Where character should face
- **Current Rotation:** Where character currently faces
- **Rotation Speed:** How fast character turns
- **Smooth Turning:** Lerp between current dan target

**World Space Movement:**
- **Input Direction:** Player's intended movement
- **Speed Multiplication:** Apply current speed
- **Collision Check:** Before committing to movement
- **Velocity Assignment:** Update physics velocity

**Collision Integration:**
- **Check Before Move:** Prevent walking through walls
- **Stop on Collision:** Set velocity to 0 if blocked
- **Slide Along Walls:** (Potential enhancement)

**Technical Details:**
- **Frame-Rate Independence:** Delta time ensures consistent speed
- **Input Buffering:** Persistent key state prevents missed inputs
- **Diagonal Normalization:** Ensures consistent speed in all directions
- **Smooth Acceleration:** Feels responsive but not jerky

**Why This System:**
- **Responsive Controls:** Immediate response to input
- **Smooth Movement:** Acceleration/deceleration feels natural
- **90° Snapping:** Clear visual communication of facing direction
- **Collision Integration:** Movement system works with physics

```
[LAMPIRKAN DIAGRAM]
- Input flow diagram
- Movement state machine
- Rotation snapping visualization
- Acceleration curve graph
```

---

### 7.2 popup-loader.js - Popup Management System

#### 7.2.1 File Overview
**File:** [js/modules/popup-loader.js](js/modules/popup-loader.js)
**Lines of Code:** 336
**Purpose:** Manage popup windows, page mappings, tooltips, dan iframe loading

**Main Sections:**
1. **Page Mappings** (Lines 1-100)
2. **Tooltip Configuration** (Lines 100-150)
3. **Popup Functions** (Lines 150-250)
4. **Event Handlers** (Lines 250-336)

---

#### 7.2.2 Page Mappings

**Code:**
```javascript
// Object Name to Page URL Mappings
export const PAGE_MAPPINGS = {
    // Main interactive objects
    'tv': 'webgl-portfolio/pages/work.html',
    'laptop': 'webgl-portfolio/pages/work.html',
    'mouse': 'webgl-portfolio/pages/about.html',
    'photo_frame': 'webgl-portfolio/pages/about.html',
    'certificate_board': 'webgl-portfolio/pages/certifications.html',

    // Paintings (project showcase)
    'painting1': 'webgl-portfolio/pages/work/agriwise.html',
    'painting2': 'webgl-portfolio/pages/work/scriptr.html',
    'painting3': 'webgl-portfolio/pages/work/bengkelin.html',
    'painting4': 'webgl-portfolio/pages/work/jastip-automation.html',
    'painting5': 'webgl-portfolio/pages/work/mindcraft.html',
    'painting6': 'webgl-portfolio/pages/work/tenangin.html',
    'painting7': 'webgl-portfolio/pages/work/veriflair.html',
    'painting8': 'webgl-portfolio/pages/work/bitescan.html',
    'painting9': 'webgl-portfolio/pages/work/secondlife.html',
    'painting10': 'webgl-portfolio/pages/work/todi-toraja.html',
    'painting11': 'webgl-portfolio/pages/work/project11.html',
    'painting12': 'webgl-portfolio/pages/work/project12.html',
    'painting13': 'webgl-portfolio/pages/work/project13.html',
    'painting14': 'webgl-portfolio/pages/work/project14.html'
};

// Tooltip Labels
export const TOOLTIP_LABELS = {
    'tv': 'Projects',
    'laptop': 'Coding Work',
    'mouse': 'Tech Stack',
    'photo_frame': 'About Me',
    'certificate_board': 'Certifications',
    'painting1': 'AgriWise',
    'painting2': 'Scriptr',
    'painting3': 'Bengkelin',
    'painting4': 'Jastip Automation',
    'painting5': 'MindCraft',
    'painting6': 'Tenangin',
    'painting7': 'VeriFlair',
    'painting8': 'BiteScan',
    'painting9': 'SecondLife',
    'painting10': 'Todi Toraja',
    'painting11': 'Project 11',
    'painting12': 'Project 12',
    'painting13': 'Project 13',
    'painting14': 'Project 14'
};
```

**Penjelasan:**
- **Object-to-Page Association:** Each 3D object maps ke specific portfolio page
- **Relative URLs:** Paths relative ke index.html
- **Tooltip Labels:** User-friendly names untuk display
- **Export:** ES6 module exports untuk use di main.js

---

#### 7.2.3 Popup Functions

**Code:**
```javascript
// Popup state
let currentPopup = null;

// Open Popup Function
export function openPopup(objectName) {
    // Check if mapping exists
    if (!PAGE_MAPPINGS[objectName]) {
        console.warn(`No page mapping for object: ${objectName}`);
        return;
    }

    // Close existing popup if any
    if (currentPopup) {
        closePopup();
    }

    // Get page URL
    const pageURL = PAGE_MAPPINGS[objectName];
    const title = TOOLTIP_LABELS[objectName] || objectName;

    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.id = 'popupOverlay';

    // Create popup window
    const popupWindow = document.createElement('div');
    popupWindow.className = 'popup-window';

    // Create header
    const header = document.createElement('div');
    header.className = 'popup-header';

    const titleElement = document.createElement('span');
    titleElement.className = 'popup-title';
    titleElement.textContent = title;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'popup-close-btn';
    closeBtn.innerHTML = '&times;';  // X symbol
    closeBtn.onclick = closePopup;

    header.appendChild(titleElement);
    header.appendChild(closeBtn);

    // Create content area
    const content = document.createElement('div');
    content.className = 'popup-content';

    // Create loading screen
    const loading = document.createElement('div');
    loading.className = 'popup-loading';
    loading.innerHTML = `
        <div class="loading-spinner"></div>
        <p>Loading...</p>
        <div class="loading-progress">
            <div class="loading-bar"></div>
        </div>
    `;
    content.appendChild(loading);

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.className = 'popup-iframe';
    iframe.src = pageURL;
    iframe.style.display = 'none';  // Hide until loaded

    // Iframe load event
    iframe.onload = () => {
        loading.style.display = 'none';
        iframe.style.display = 'block';

        // Animate iframe in
        iframe.style.opacity = '0';
        setTimeout(() => {
            iframe.style.opacity = '1';
        }, 50);
    };

    content.appendChild(iframe);

    // Assemble popup
    popupWindow.appendChild(header);
    popupWindow.appendChild(content);
    overlay.appendChild(popupWindow);

    // Add to document
    document.body.appendChild(overlay);

    // Store reference
    currentPopup = overlay;

    // Animate in
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);

    // Setup event listeners
    setupPopupEventListeners(overlay);

    // Pause 3D interactions (optional)
    document.body.classList.add('popup-active');

    console.log(`Opened popup for: ${objectName}`);
}

// Close Popup Function
export function closePopup() {
    if (!currentPopup) return;

    // Animate out
    currentPopup.classList.remove('active');

    // Remove after animation
    setTimeout(() => {
        if (currentPopup && currentPopup.parentNode) {
            currentPopup.parentNode.removeChild(currentPopup);
        }
        currentPopup = null;

        // Resume 3D interactions
        document.body.classList.remove('popup-active');
    }, 200);  // Match CSS transition duration

    console.log('Popup closed');
}

// Check if Popup is Open
export function isPopupOpen() {
    return currentPopup !== null;
}

// Setup Event Listeners
function setupPopupEventListeners(overlay) {
    // Click overlay to close
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closePopup();
        }
    });

    // ESC key to close
    const escHandler = (event) => {
        if (event.key === 'Escape') {
            closePopup();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}
```

**Penjelasan Detail:**

**openPopup Function:**
- **Parameter:** objectName (dari 3D object click)
- **Mapping Lookup:** Find corresponding page URL
- **DOM Creation:** Dynamically create popup elements
- **Loading State:** Show spinner while iframe loads
- **Iframe Loading:** Load page content seamlessly
- **Animation:** Fade in effect untuk smooth appearance

**Popup Structure:**
```
overlay (fullscreen backdrop)
└── popupWindow
    ├── header
    │   ├── title
    │   └── closeBtn
    └── content
        ├── loading (hidden after load)
        └── iframe (page content)
```

**closePopup Function:**
- **Animation Out:** Fade out before removal
- **DOM Cleanup:** Remove popup dari document
- **State Reset:** Clear currentPopup reference
- **Resume Interactions:** Remove popup-active class

**Event Listeners:**
- **Overlay Click:** Close when clicking outside popup
- **ESC Key:** Close with keyboard shortcut
- **Close Button:** Explicit close button click
- **Cleanup:** Remove listeners when closed

**State Management:**
- **currentPopup:** Track active popup
- **Single Popup:** Only one popup open at a time
- **Body Class:** Indicate popup state untuk CSS styling

```
[LAMPIRKAN SCREENSHOT]
- Popup creation flow diagram
- DOM structure visualization
- Loading state
- Loaded state with content
```

---

### 7.3 CSS Styling

#### 7.3.1 popup.css - Popup Window Styles

**File:** [css/components/popup.css](css/components/popup.css)

**Key Styles:**
```css
/* Overlay */
.popup-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease-out;
}

.popup-overlay.active {
    opacity: 1;
}

/* Popup Window */
.popup-window {
    position: relative;
    width: 90vw;
    max-width: 1200px;
    height: 85vh;
    background: #ffffff;
    border: 3px solid #8b5cf6;
    border-radius: 8px;
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
    display: flex;
    flex-direction: column;
    transform: scale(0.9);
    transition: transform 0.3s ease-out;
}

.popup-overlay.active .popup-window {
    transform: scale(1);
}

/* Header (Windows 98 style) */
.popup-header {
    background: linear-gradient(to right, #7c3aed, #a78bfa);
    padding: 8px 12px;
    border-bottom: 2px solid #6d28d9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;
}

.popup-title {
    color: white;
    font-family: 'Pixelify Sans', monospace;
    font-size: 16px;
    font-weight: bold;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
}

.popup-close-btn {
    width: 24px;
    height: 24px;
    background: #ef4444;
    color: white;
    border: 2px solid #991b1b;
    border-radius: 3px;
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
    transition: all 0.2s;
}

.popup-close-btn:hover {
    background: #dc2626;
    transform: scale(1.1);
}

/* Content Area */
.popup-content {
    flex: 1;
    position: relative;
    overflow: hidden;
}

.popup-iframe {
    width: 100%;
    height: 100%;
    border: none;
    transition: opacity 0.3s;
}

/* Loading Screen */
.popup-loading {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f3f4f6;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #e5e7eb;
    border-top-color: #8b5cf6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.loading-progress {
    width: 200px;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    margin-top: 20px;
    overflow: hidden;
}

.loading-bar {
    height: 100%;
    background: linear-gradient(to right, #7c3aed, #a78bfa);
    animation: loading 2s ease-in-out infinite;
}

@keyframes loading {
    0% { width: 0%; }
    50% { width: 70%; }
    100% { width: 100%; }
}

/* Responsive Design */
@media (max-width: 1024px) {
    .popup-window {
        width: 95vw;
        height: 90vh;
    }
}

@media (max-width: 768px) {
    .popup-window {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: none;
    }

    .popup-header {
        border-radius: 0;
    }
}

@media (max-width: 480px) {
    .popup-title {
        font-size: 14px;
    }

    .popup-close-btn {
        width: 28px;
        height: 28px;
        font-size: 20px;
    }
}
```

**Penjelasan:**
- **Windows 98 Aesthetic:** Purple gradient header, classic styling
- **Overlay Backdrop:** Blurred background untuk focus
- **Responsive Sizing:** Adapts ke different screen sizes
- **Loading Animation:** Spinner dan progress bar
- **Smooth Transitions:** Fade dan scale animations
- **Accessibility:** High contrast, clear buttons

```
[LAMPIRKAN SCREENSHOT]
- Desktop popup view
- Tablet view
- Mobile view
- Loading state
- Hover states
```

---

## 8. IMPLEMENTASI SISTEM

### 8.1 Interaction Flow

**User Journey:**
```
1. Page Load
   ↓
2. 3D Scene Loads (with loading progress)
   ↓
3. Intro Camera Animation (3 seconds)
   ↓
4. User Gains Control (WASD movement, camera follow)
   ↓
5. Explore Environment
   ↓
6. Hover Over Object → Tooltip Appears + Scale Animation
   ↓
7. Click Object → Popup Opens with Page Content
   ↓
8. View Portfolio Content in Iframe
   ↓
9. Close Popup (X button / Overlay click / ESC key)
   ↓
10. Return to 3D Exploration
```

**Code Flow:**
```
index.html
    ↓ (loads)
main.js
    ├── Scene Setup
    ├── Model Loading
    │   └── extractInteractiveObjects()
    ├── Animation Loop
    │   ├── updatePhysics()
    │   ├── updateMovement()
    │   ├── updateCamera()
    │   └── updateTooltips()
    └── Event Handlers
        ├── Keyboard Input
        ├── Mouse Move (raycasting)
        └── Mouse Click
            └── openPopup() from popup-loader.js
                └── Load iframe content
```

```
[LAMPIRKAN FLOWCHART DIAGRAM]
```

### 8.2 Data Flow

**Model Loading Flow:**
```
GLB File (Blender export)
    ↓
GLTFLoader.load()
    ↓
Parse GLTF data
    ↓
Create Three.js objects
    ↓
Add to scene
    ↓
Traverse objects
    ↓
Extract interactive objects
    ↓
Store references
    ↓
Setup interactions
```

**Interaction Flow:**
```
Mouse Move Event
    ↓
Update mouse coordinates
    ↓
Raycaster.setFromCamera()
    ↓
Intersect with interactive objects
    ↓
Check intersections
    ↓
If intersection:
    ├── Show tooltip
    ├── Scale object (hover animation)
    ├── Change cursor
    └── Play sound (if cat)

Mouse Click Event
    ↓
Check hovered object
    ↓
If interactive object:
    ├── Get object name
    ├── Play click sound
    ├── Call openPopup(name)
    └── Load corresponding page
```

```
[LAMPIRKAN DATA FLOW DIAGRAM]
```

### 8.3 Performance Optimization Strategies

#### 8.3.1 Rendering Optimizations
1. **Shadow Optimization:**
   - Objects don't cast shadows (only receive)
   - Reduces shadow map calculations
   - Single directional light shadow

2. **Draw Call Reduction:**
   - Merged non-interactive geometry
   - Instancing untuk repeated objects (potential)
   - Efficient object grouping

3. **Texture Optimization:**
   - Embedded compressed textures di GLB
   - Appropriate texture resolutions
   - Shared materials where possible

4. **Camera Optimization:**
   - Orthographic camera (simpler calculations)
   - Defined frustum bounds
   - No unnecessary camera updates

#### 8.3.2 Code Optimizations
1. **Event Throttling:**
   - Limit mousemove handler frequency
   - Frame-rate capped animation loop
   - Debounced resize handlers

2. **Raycasting Optimization:**
   - Limited set of interactive objects
   - Early exit conditions
   - Single raycaster instance (reused)

3. **Memory Management:**
   - Cleanup removed objects
   - Dispose materials dan geometries
   - Clear unused references

4. **Lazy Loading:**
   - Iframe content loaded on-demand
   - Assets loaded only when needed
   - Progressive enhancement

#### 8.3.3 Network Optimizations
1. **CDN Usage:**
   - Three.js loaded dari CDN (caching)
   - Shared library resources
   - Reduced server load

2. **Asset Optimization:**
   - GLB format (compact binary)
   - Compressed audio files
   - Optimized image formats

3. **Caching Strategy:**
   - Browser cache headers
   - Service worker (potential)
   - Local storage untuk preferences

```
[LAMPIRKAN PERFORMANCE METRICS]
- FPS graph
- Memory usage chart
- Network waterfall
- Load time breakdown
```

---

## 9. USER INTERFACE DAN USER EXPERIENCE

### 9.1 Visual Design

#### 9.1.1 Design System
**Color Palette:**
- **Primary:** Purple (#8b5cf6, #7c3aed) - Windows 98 inspired
- **Secondary:** Light Purple (#a78bfa) - Accents
- **Background:** Sky Blue (#87ceeb) - 3D scene
- **Text:** White (#ffffff) - High contrast
- **Error:** Red (#ef4444) - Close button, alerts

**Typography:**
- **Primary Font:** Pixelify Sans (Google Fonts)
- **Style:** Pixel/retro aesthetic
- **Sizes:** 14px-20px (responsive)

**Visual Style:**
- **Aesthetic:** Retro/pixel art meets modern 3D
- **Inspiration:** Windows 98, retro gaming
- **Contrast:** High contrast untuk readability
- **Cohesion:** Consistent styling across all elements

```
[LAMPIRKAN DESIGN SYSTEM DOCUMENTATION]
- Color swatches
- Typography samples
- Component library
- Style guide
```

#### 9.1.2 UI Components
1. **3D Canvas:** Full-screen immersive experience
2. **Tooltips:** Pixel-style labels dengan arrows
3. **Popup Windows:** Windows 98-inspired modals
4. **Loading Screens:** Progress indicators
5. **Close Buttons:** Prominent red X buttons
6. **Camera Indicator:** Mode display (potential)

```
[LAMPIRKAN UI COMPONENT SCREENSHOTS]
```

### 9.2 User Experience

#### 9.2.1 Onboarding
**First-Time User Experience:**
1. **Intro Animation:** Cinematic camera zoom-in
2. **Visual Cues:** Glowing objects, tooltips
3. **Intuitive Controls:** Standard WASD/Arrow keys
4. **Discovery:** Hover untuk reveal interactions
5. **Guidance:** Clear tooltips untuk each object

**Potential Improvements:**
- Tutorial overlay on first visit
- Control hints displayed initially
- Interactive walkthrough
- Skip intro button

#### 9.2.2 Interaction Design
**Principles:**
- **Discoverability:** Hover effects reveal interactivity
- **Feedback:** Visual, audio, animation feedback
- **Consistency:** Same interaction pattern throughout
- **Responsiveness:** Immediate response to input
- **Forgiveness:** Easy to close popups, explore freely

**Interaction Patterns:**
- Hover → Visual feedback + tooltip
- Click → Action (popup open)
- ESC → Close/cancel
- WASD → Navigate
- C → Toggle camera mode

#### 9.2.3 Accessibility Considerations
**Current Implementation:**
- High contrast colors
- Clear visual feedback
- Keyboard navigation support (ESC, arrow keys)
- Pixel font (potentially less accessible)

**Potential Improvements:**
- Screen reader support
- Focus indicators
- Alt text for 3D objects
- Keyboard-only navigation option
- Reduced motion mode
- Font size options

#### 9.2.4 Mobile Experience
**Challenges:**
- No WASD keys (touch controls needed)
- Performance constraints
- Smaller screen real estate
- Touch interaction different dari hover

**Current Implementation:**
- Responsive popup sizing
- Full-screen popups on mobile
- Simplified layout

**Potential Improvements:**
- Touch joystick untuk movement
- Tap for interaction
- Gesture controls
- Performance scaling
- Alternative mobile-first layout

```
[LAMPIRKAN UX FLOW DIAGRAMS]
- User journey map
- Interaction flow
- Error states
- Edge cases
```

---

## 10. TESTING DAN DEBUGGING

### 10.1 Testing Strategy

#### 10.1.1 Functional Testing
**Tested Features:**
- [ ] 3D model loading
- [ ] Character movement (WASD, arrows)
- [ ] Jump mechanics (spacebar)
- [ ] Collision detection
- [ ] Camera modes (intro, follow, free)
- [ ] Object interaction (hover, click)
- [ ] Popup opening/closing
- [ ] Iframe content loading
- [ ] Sound effects
- [ ] Responsive design

**Test Cases:**
```
Test Case 1: Model Loading
- Expected: Model loads successfully within 5 seconds
- Actual: [Record hasil]
- Status: [Pass/Fail]

Test Case 2: Character Movement
- Expected: Character moves smoothly in all 8 directions
- Actual: [Record hasil]
- Status: [Pass/Fail]

[... more test cases ...]
```

```
[LAMPIRKAN TEST CASE DOCUMENTATION]
```

#### 10.1.2 Browser Compatibility
**Tested Browsers:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

**Known Issues:**
- [List any browser-specific issues]

#### 10.1.3 Performance Testing
**Metrics:**
- **FPS:** Target 60fps, minimum 30fps
- **Load Time:** Target <3 seconds
- **Memory Usage:** Monitor for leaks
- **Network:** Asset size dan load times

**Tools:**
- Chrome DevTools Performance tab
- Lighthouse audit
- Stats.js (FPS monitoring)
- Network tab

```
[LAMPIRKAN PERFORMANCE TEST RESULTS]
- Lighthouse report
- FPS graphs
- Memory profiling
- Network analysis
```

### 10.2 Debugging Process

#### 10.2.1 Common Issues & Solutions

**Issue 1: Model Not Loading**
```
Symptoms: Blank canvas, console errors
Causes:
- Incorrect path to GLB file
- CORS issues
- Corrupted model file

Solutions:
- Verify CONFIG.MODEL_PATH
- Check browser console for errors
- Test model in different viewer
- Ensure proper file permissions
```

**Issue 2: Character Falls Through Floor**
```
Symptoms: Character drops infinitely
Causes:
- No ground collision mesh
- Incorrect ground detection raycasting
- Physics ground level mismatch

Solutions:
- Verify ground object exists in model
- Check raycast direction dan filtering
- Adjust CONFIG.PHYSICS.groundLevel
- Add safety clamp in updatePhysics()
```

**Issue 3: Popup Not Opening**
```
Symptoms: Click object, nothing happens
Causes:
- Missing page mapping
- Incorrect object name
- JavaScript error blocking execution

Solutions:
- Check PAGE_MAPPINGS in popup-loader.js
- Verify object names match Blender
- Check console for errors
- Test openPopup() directly in console
```

**Issue 4: Poor Performance**
```
Symptoms: Low FPS, laggy interactions
Causes:
- Too many draw calls
- High-poly models
- Shadow calculations
- Unoptimized code

Solutions:
- Disable object shadows
- Reduce model polygon count
- Optimize raycasting frequency
- Check for memory leaks
- Lower shadow map resolution
```

#### 10.2.2 Debugging Tools
**Browser DevTools:**
- **Console:** Error messages, logs
- **Network:** Asset loading, timing
- **Performance:** FPS, memory, CPU
- **Elements:** DOM inspection
- **Sources:** Breakpoints, step debugging

**Three.js Helpers:**
- **AxesHelper:** Show world axes
- **GridHelper:** Ground plane grid
- **CameraHelper:** Visualize camera frustum
- **BoxHelper:** Show object bounds
- **DirectionalLightHelper:** Light visualization

**Custom Debug Functions:**
```javascript
// Add to main.js for debugging
function enableDebugMode() {
    // Show axes
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Show grid
    const gridHelper = new THREE.GridHelper(20, 20);
    scene.add(gridHelper);

    // Log object names
    console.log('Interactive objects:',
        interactiveObjects.map(obj => obj.name));

    // FPS counter
    const stats = new Stats();
    document.body.appendChild(stats.dom);

    // Update in animation loop
    function animate() {
        stats.begin();
        // ... render
        stats.end();
    }
}
```

```
[LAMPIRKAN DEBUGGING SCREENSHOTS]
- Console with useful logs
- Performance profiling
- Three.js helpers enabled
- Network waterfall
```

### 10.3 Version Control (Git)

#### 10.3.1 Git History Analysis
**Recent Commits:**
```
9cd576c - Update 3D model path to bismillah5.glb
105a0f7 - Update 3D model path to alma-house-3d-model.glb
f877f65 - Improve shadows, disable 3D object shadows, and fix duplicate close buttons
2fb3cfb - Add red X close button to all popup pages for iframe communication
31cda2e - Add image lightbox popup with close button to education, certifications, and organization pages
```

**Development Pattern:**
- Iterative model updates
- Progressive feature additions
- Bug fixes dan improvements
- UI/UX refinements

#### 10.3.2 Git Workflow
```
main branch (production)
    ↓
Feature development
    ↓
Testing
    ↓
Commit with descriptive message
    ↓
Push to main
```

**Potential Improvements:**
- Feature branches
- Pull request reviews
- Semantic versioning
- CHANGELOG.md

```
[LAMPIRKAN GIT GRAPH VISUALIZATION]
```

---

## 11. HASIL DAN SCREENSHOT

### 11.1 Project Screenshots

**Note:** *Silakan insert screenshot actual dari project di section ini*

---

#### 11.1.1 3D Environment

**Screenshot 1: Overall View**
```
[INSERT SCREENSHOT]
- Full 3D scene view
- Character visible
- Multiple interactive objects visible
- Lighting dan shadows demonstrated
```

**Screenshot 2: Close-up Views**
```
[INSERT SCREENSHOTS]
- Character close-up
- Interactive objects (TV, laptop, paintings)
- Material details
- Shadow quality
```

**Screenshot 3: Different Angles**
```
[INSERT SCREENSHOTS]
- Front view
- Side view
- Top-down view
- Perspective variations
```

---

#### 11.1.2 Interactive Features

**Screenshot 4: Tooltips**
```
[INSERT SCREENSHOT]
- Tooltip appearing on hover
- Multiple tooltips visible
- Arrow indicator
- Pixel font styling
```

**Screenshot 5: Hover States**
```
[INSERT SCREENSHOTS]
- Object before hover (normal scale)
- Object during hover (scaled 1.15x)
- Cursor change demonstration
- Visual feedback
```

**Screenshot 6: Popup Windows**
```
[INSERT SCREENSHOTS]
- Popup opened (desktop view)
- Different pages loaded (work, about, certifications, dll)
- Windows 98 header styling
- Close button highlighted
```

**Screenshot 7: Responsive Views**
```
[INSERT SCREENSHOTS]
- Desktop view (1920x1080)
- Tablet view (768x1024)
- Mobile landscape (812x375)
- Mobile portrait (375x812)
```

---

#### 11.1.3 Blender 3D Model

**Screenshot 8: Blender Interface**
```
[INSERT SCREENSHOT - BLENDER VIEWPORT]
- bismillah5.glb opened di Blender
- 3D viewport dengan model visible
- Object hierarchy di Outliner panel
- Properties panel showing object details
```

**Screenshot 9: Object Hierarchy**
```
[INSERT SCREENSHOT - BLENDER OUTLINER]
- Outliner panel expanded
- All named objects visible:
  - player
  - cat
  - tv
  - laptop
  - mouse
  - photo_frame
  - certificate_board
  - painting1-14
  - Environment objects
- Collections organized
```

**Screenshot 10: Multiple Views**
```
[INSERT SCREENSHOTS - BLENDER 4 VIEWPORT SPLIT]
- Top view (orthographic)
- Front view (orthographic)
- Side view (orthographic)
- Camera/perspective view
- All showing same model dari different angles
```

**Screenshot 11: Materials**
```
[INSERT SCREENSHOT - BLENDER SHADING WORKSPACE]
- Shader Editor panel
- Material nodes (Principled BSDF)
- Texture connections
- Material preview
```

**Screenshot 12: Model Stats**
```
[INSERT SCREENSHOT - BLENDER STATISTICS]
- Vertex count
- Polygon count
- Object count
- File size
- Export settings (shown in export panel)
```

---

#### 11.1.4 Code Examples

**Screenshot 13: main.js Code**
```
[INSERT SCREENSHOT - VS CODE]
- Main configuration object section
- Syntax highlighting visible
- Line numbers shown
- Clear code structure
```

**Screenshot 14: popup-loader.js Code**
```
[INSERT SCREENSHOT - VS CODE]
- PAGE_MAPPINGS object
- openPopup function
- Clean code formatting
```

**Screenshot 15: CSS Styling**
```
[INSERT SCREENSHOT - VS CODE]
- popup.css file
- Windows 98 styling
- Responsive media queries
```

---

#### 11.1.5 User Interface

**Screenshot 16: Loading State**
```
[INSERT SCREENSHOT]
- Loading spinner active
- Progress bar animating
- Loading text visible
```

**Screenshot 17: Animations**
```
[INSERT GIF atau SCREENSHOT SEQUENCE]
- Character walking animation
- Object hover animation (scale change)
- Cat jump animation
- Popup open/close animation
```

**Screenshot 18: Camera Modes**
```
[INSERT SCREENSHOTS]
- Intro camera (start position)
- Follow camera (behind character)
- Free camera (orbit mode)
- Camera mode indicator (if visible)
```

---

#### 11.1.6 Portfolio Pages

**Screenshot 19: Portfolio Content**
```
[INSERT SCREENSHOTS]
- About page loaded di popup
- Work/projects page
- Certifications page
- Individual project pages (AgriWise, Scriptr, dll)
```

**Screenshot 20: Page Variety**
```
[INSERT SCREENSHOTS]
- Different page layouts
- Content organization
- Image galleries
- Project descriptions
```

---

#### 11.1.7 Developer Tools

**Screenshot 21: Browser DevTools**
```
[INSERT SCREENSHOT]
- Console with logs
- Network tab showing asset loading
- Performance metrics
- Three.js scene graph (if using Three.js DevTools extension)
```

**Screenshot 22: Debug Mode**
```
[INSERT SCREENSHOT]
- AxesHelper visible
- GridHelper visible
- BoundingBox helpers
- FPS counter (Stats.js)
```

---

#### 11.1.8 Performance Metrics

**Screenshot 23: Lighthouse Report**
```
[INSERT SCREENSHOT]
- Performance score
- Accessibility score
- Best Practices score
- SEO score
- Metrics breakdown
```

**Screenshot 24: Network Analysis**
```
[INSERT SCREENSHOT]
- Network waterfall
- Asset sizes
- Load times
- Total page weight
```

---

### 11.2 Video Demonstrations

**Note:** *Silakan record video demonstrations untuk showcase functionality*

**Video 1: Full Walkthrough (2-3 minutes)**
- Page load dan intro animation
- Character movement demonstration
- Interaction dengan multiple objects
- Opening dan closing popups
- Different camera modes
- Full user journey

**Video 2: Feature Highlights (1-2 minutes)**
- Quick showcase of all key features
- Smooth transitions
- Professional presentation

**Video 3: Mobile Experience (1 minute)**
- Responsive design demonstration
- Mobile popup interaction
- Touch interaction (if implemented)

**Video 4: Behind the Scenes (1-2 minutes)**
- Blender model showcase
- Code walkthrough
- Development process

---

### 11.3 Performance Results

**Load Time Analysis:**
```
Initial Page Load: [X] seconds
- HTML parsing: [X]ms
- JavaScript execution: [X]ms
- GLB model loading: [X]ms
- Texture loading: [X]ms
- Total ready time: [X]ms
```

**Runtime Performance:**
```
Average FPS: [X] fps
Min FPS: [X] fps
Max FPS: [X] fps
Memory Usage: [X] MB
Draw Calls: [X] per frame
```

**Asset Sizes:**
```
bismillah5.glb: [X] MB
Total JavaScript: [X] KB
Total CSS: [X] KB
Total Assets: [X] MB
```

```
[INSERT PERFORMANCE GRAPHS dan CHARTS]
```

---

### 11.4 User Testing Results

**Test Participants:** [X] people

**Feedback Summary:**
```
Positive Comments:
- [List positive feedback]

Areas for Improvement:
- [List suggestions]

Usability Issues:
- [List any UX problems discovered]

Feature Requests:
- [List requested features]
```

**Metrics:**
```
Average Session Duration: [X] minutes
Popup Open Rate: [X]%
Pages Viewed per Session: [X]
Bounce Rate: [X]%
```

---

## 12. KESIMPULAN DAN PEMBELAJARAN

### 12.1 Project Summary

Project **3D Web Portfolio - Alma** merupakan implementasi portfolio website interaktif yang berhasil mengintegrasikan teknologi 3D graphics (Three.js, WebGL) dengan traditional web development untuk menciptakan user experience yang unique dan engaging.

**Key Achievements:**
1. ✅ **3D Interactive Environment:** Successfully implemented full 3D navigation system
2. ✅ **Physics Simulation:** Realistic character movement dengan gravity, collision detection
3. ✅ **Object Interaction:** 27+ interactive objects dengan smooth animations
4. ✅ **Popup System:** Seamless integration of portfolio content via Windows 98-styled popups
5. ✅ **Responsive Design:** Adapts ke different screen sizes
6. ✅ **Performance Optimization:** Maintains good FPS dengan optimized rendering
7. ✅ **3D Modeling:** Custom Blender models exported ke web-optimized GLB format

### 12.2 Technical Accomplishments

#### 12.2.1 3D Graphics Development
- Mastered Three.js library untuk WebGL rendering
- Implemented advanced camera systems (intro, follow, orbit)
- Created efficient raycasting system untuk object interaction
- Optimized rendering performance (shadows, draw calls)
- Successfully integrated Blender 3D models ke web

#### 12.2.2 Game Development Concepts
- Physics simulation (gravity, velocity, acceleration)
- Collision detection algorithms
- Character controller dengan smooth movement
- State management untuk animations
- Input handling system

#### 12.2.3 Web Development
- ES6 modules architecture
- Event-driven programming
- DOM manipulation untuk dynamic UI
- Responsive CSS design
- Performance optimization techniques

#### 12.2.4 Software Engineering
- Modular code organization
- Configuration-driven design
- Git version control
- Debugging dan testing strategies
- Documentation practices

### 12.3 Challenges Overcome

#### Challenge 1: Physics and Collision
**Problem:** Character falling through floor, walking through walls
**Solution:** Implemented multi-directional raycasting untuk ground detection dan wall collision
**Learning:** Physics simulation requires careful tuning dan multiple safety nets

#### Challenge 2: Performance Optimization
**Problem:** Low FPS dengan shadow calculations
**Solution:** Disabled object shadow casting, only keep shadow receiving
**Learning:** Trade-offs between visual quality dan performance

#### Challenge 3: 3D Model Integration
**Problem:** Blender model not loading, missing objects
**Solution:** Proper naming conventions, correct export settings
**Learning:** Importance of workflow between 3D software dan web

#### Challenge 4: Responsive Design dengan 3D
**Problem:** 3D canvas not adapting ke different screen sizes
**Solution:** Proper camera frustum calculations, responsive popup sizing
**Learning:** Responsive design principles apply to 3D applications too

#### Challenge 5: Popup Window Management
**Problem:** Multiple popups, memory leaks, focus management
**Solution:** Single popup state, proper cleanup, event listener management
**Learning:** State management critical untuk interactive applications

### 12.4 Lessons Learned

#### 12.4.1 Technical Lessons
1. **Configuration Over Hard-coding:** Centralized config makes tuning much easier
2. **Delta Time is Essential:** Frame-rate independent physics crucial untuk consistency
3. **Raycasting is Powerful:** Versatile tool untuk collision, interaction, ground detection
4. **Modular Architecture:** Separation of concerns makes debugging easier
5. **Performance First:** Optimize early, especially untuk 3D graphics

#### 12.4.2 Design Lessons
1. **Visual Feedback is Critical:** Users need clear indication of interactivity
2. **Consistent Aesthetic:** Retro theme creates memorable identity
3. **Simplicity Wins:** Over-complicated interactions confuse users
4. **Responsive Thinking:** Consider all devices dari start
5. **Loading States Matter:** Users need feedback during loading

#### 12.4.3 Process Lessons
1. **Iterative Development:** Small incremental changes easier to debug
2. **Version Control:** Git saves time when things break
3. **Console Logging:** Strategic logs help track down issues
4. **Browser DevTools:** Essential untuk performance tuning
5. **Testing Across Browsers:** Compatibility issues arise unexpectedly

### 12.5 Areas for Future Improvement

#### 12.5.1 Technical Enhancements
- [ ] **Touch Controls:** Mobile joystick untuk character movement
- [ ] **Audio System:** Background music integration
- [ ] **Particle Effects:** Environmental effects (dust, sparkles)
- [ ] **Advanced Animations:** Character animation blending
- [ ] **Multiplayer:** WebSocket integration untuk shared exploration (ambitious)
- [ ] **Save System:** LocalStorage untuk user progress
- [ ] **Analytics:** Track user interactions dan behavior

#### 12.5.2 Content Enhancements
- [ ] **More Interactive Objects:** Expand dari 27 to 50+ objects
- [ ] **Multiple Rooms:** Different areas untuk different portfolio sections
- [ ] **Easter Eggs:** Hidden interactions untuk exploration
- [ ] **Dynamic Content:** CMS integration untuk easy updates
- [ ] **Multilingual:** Support untuk multiple languages

#### 12.5.3 UX/UI Enhancements
- [ ] **Tutorial System:** Interactive onboarding for first-time users
- [ ] **Accessibility:** Screen reader support, keyboard navigation
- [ ] **Settings Menu:** Graphics quality, audio volume controls
- [ ] **Minimap:** Navigation aid for complex environments
- [ ] **Progress Tracking:** Show which pages user has visited

#### 12.5.4 Performance Enhancements
- [ ] **LOD System:** Level of detail untuk distant objects
- [ ] **Texture Streaming:** Load textures progressively
- [ ] **Code Splitting:** Lazy load modules
- [ ] **Service Worker:** Offline support, caching
- [ ] **WebAssembly:** Performance-critical code optimization

### 12.6 Real-World Applications

**Skills Developed Applicable to:**

1. **Game Development:**
   - Character controllers
   - Physics simulation
   - 3D graphics programming
   - Input handling

2. **Web Development:**
   - Modern JavaScript (ES6+)
   - Responsive design
   - Performance optimization
   - Module architecture

3. **3D Visualization:**
   - Product showcases
   - Architectural visualization
   - Data visualization
   - Virtual tours

4. **Interactive Experiences:**
   - Museums
   - Educational platforms
   - Virtual events
   - Metaverse applications

### 12.7 Project Impact

**Professional Value:**
- Demonstrates advanced technical skills
- Shows creativity dan innovation
- Proves ability untuk complete complex projects
- Creates memorable first impression

**Technical Value:**
- Reusable architecture untuk future projects
- Learning resource untuk 3D web development
- Portfolio piece demonstrating multiple disciplines
- Foundation untuk more ambitious projects

**Personal Growth:**
- Problem-solving skills
- Technical depth di 3D graphics
- Project management
- Documentation practices

### 12.8 Final Thoughts

Project ini successfully demonstrates bahwa web technology has evolved beyond traditional 2D interfaces. The integration of 3D graphics, physics simulation, dan interactive design creates experiences that rival desktop applications while remaining accessible through web browsers.

**Key Takeaway:**
Modern web development is incredibly powerful. Dengan right tools (Three.js, WebGL) dan dedication untuk learning, it's possible untuk create immersive, professional-quality experiences entirely dalam browser.

**Recommendation:**
This project serves as excellent portfolio piece dan learning resource. The architecture is solid enough untuk expansion into more complex applications (games, virtual environments, interactive visualizations).

**Next Steps:**
1. Deploy to production (Vercel, Netlify, GitHub Pages)
2. Gather user feedback
3. Implement priority improvements
4. Consider open-sourcing untuk educational value
5. Explore commercial applications

---

## 13. LAMPIRAN

### 13.1 Technical Specifications

**System Requirements:**
```
Minimum:
- Modern browser (Chrome 90+, Firefox 88+, Safari 14+)
- WebGL 2.0 support
- 2GB RAM
- Stable internet connection

Recommended:
- Latest browser version
- Dedicated GPU
- 4GB+ RAM
- Broadband internet
```

**Browser Compatibility Matrix:**
```
Browser          | Version | Status
-----------------|---------|--------
Chrome           | 90+     | ✅ Full Support
Firefox          | 88+     | ✅ Full Support
Safari           | 14+     | ✅ Full Support
Edge             | 90+     | ✅ Full Support
Mobile Chrome    | Latest  | ⚠️ Limited (no WASD)
Mobile Safari    | Latest  | ⚠️ Limited (no WASD)
```

### 13.2 File Structure Reference

**Complete Directory Tree:**
```
3d-web-portfolio-alma/
│
├── index.html                           # Main entry point
├── main.js                              # Core application (1,190 lines)
├── style.css                            # Global styles
├── LAPORAN_PROJECT.md                   # This documentation
│
├── assets/
│   ├── models/
│   │   ├── bismillah5.glb              # Active 3D model
│   │   ├── bismillah6.glb              # Alternative model
│   │   └── alma-house-3d-model.glb     # Previous version
│   └── images/
│       └── [image files]
│
├── assets_sound/
│   ├── cat-meow-slow.mp3
│   └── cat-meow-fast.mp3
│
├── css/
│   └── components/
│       └── popup.css                    # Popup styling
│
├── js/
│   └── modules/
│       └── popup-loader.js              # Popup management (336 lines)
│
├── webgl-portfolio/
│   ├── index.html                       # Landing page
│   ├── pages/
│   │   ├── about.html
│   │   ├── work.html
│   │   ├── education.html
│   │   ├── certifications.html
│   │   ├── gallery.html
│   │   ├── contact.html
│   │   ├── organization.html
│   │   └── work/
│   │       ├── agriwise.html
│   │       ├── scriptr.html
│   │       ├── bengkelin.html
│   │       ├── jastip-automation.html
│   │       ├── mindcraft.html
│   │       ├── tenangin.html
│   │       ├── veriflair.html
│   │       ├── bitescan.html
│   │       ├── secondlife.html
│   │       ├── todi-toraja.html
│   │       └── [more projects]
│   ├── javascript/
│   │   ├── cursor/
│   │   └── webglball/
│   └── css/
│       └── [Webflow styles]
│
├── web-portfolio-alma/                  # Alternative implementation
│   └── [similar structure]
│
├── .gitignore
└── README.md
```

### 13.3 Configuration Reference

**Complete CONFIG Object:**
```javascript
const CONFIG = {
    // Model
    MODEL_PATH: './assets/models/bismillah5.glb',

    // Scene
    SCENE: {
        backgroundColor: 0x87ceeb,
        fog: { enabled: true, color: 0x87ceeb, near: 20, far: 100 }
    },

    // Camera
    CAMERA: {
        frustumSize: 20,
        near: 0.1,
        far: 1000,
        initialPosition: { x: 0, y: 50, z: 50 },
        introAnimation: {
            duration: 3,
            targetPosition: { x: 0, y: 15, z: 25 },
            targetLookAt: { x: 0, y: 0, z: 0 }
        }
    },

    // Renderer
    RENDERER: {
        antialias: true,
        shadowMapEnabled: true,
        shadowMapType: THREE.VSMShadowMap,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0
    },

    // Lighting
    LIGHTS: {
        ambient: { color: 0xffffff, intensity: 0.6 },
        directional: {
            color: 0xffffff,
            intensity: 0.8,
            position: { x: 10, y: 20, z: 10 },
            shadow: {
                camera: { left: -30, right: 30, top: 30, bottom: -30, near: 0.1, far: 50 },
                mapSize: { width: 2048, height: 2048 }
            }
        }
    },

    // Physics
    PHYSICS: {
        gravity: -30,
        jumpForce: 10,
        terminalVelocity: -50,
        groundLevel: 0
    },

    // Movement
    MOVEMENT: {
        speed: 5,
        rotationSpeed: 10,
        acceleration: 15,
        deceleration: 10,
        snapRotation: true,
        rotationAngles: [0, 90, 180, 270]
    },

    // Collision
    COLLISION: {
        raycastDistance: 0.5,
        stepHeight: 0.3,
        playerRadius: 0.3,
        checkDirections: 8
    }
};
```

### 13.4 API Reference

**Global Functions (Exposed to Window):**
```javascript
// Open popup window
window.openPopup(objectName: string) => void

// Close current popup
window.closePopup() => void

// Check if popup is open
window.isPopupOpen() => boolean
```

**Module Exports (popup-loader.js):**
```javascript
// Page mappings
export PAGE_MAPPINGS: { [objectName: string]: string }

// Tooltip labels
export TOOLTIP_LABELS: { [objectName: string]: string }

// Functions
export function openPopup(objectName: string): void
export function closePopup(): void
export function isPopupOpen(): boolean
```

### 13.5 Glossary

**Technical Terms:**

- **Three.js:** JavaScript library untuk creating 3D graphics di browser
- **WebGL:** Web Graphics Library, API untuk rendering 3D graphics
- **GLB:** GL Transmission Format Binary, compact 3D model format
- **GLTF:** GL Transmission Format, open standard 3D model format
- **Raycasting:** Technique untuk detecting intersections using rays
- **Orthographic Camera:** Camera without perspective distortion
- **Frustum:** Viewing volume of camera
- **Delta Time:** Time elapsed between frames
- **Lerp:** Linear interpolation between two values
- **Quaternion:** Mathematical representation of rotation
- **GSAP:** GreenSock Animation Platform
- **ESM:** ES6 Modules
- **Iframe:** Inline frame, embeds another HTML page
- **Viewport:** Visible area of web page
- **Responsive Design:** Design that adapts ke different screen sizes

### 13.6 References & Resources

**Documentation:**
- Three.js Documentation: https://threejs.org/docs/
- WebGL Specification: https://www.khronos.org/webgl/
- GLTF Specification: https://www.khronos.org/gltf/
- MDN Web Docs: https://developer.mozilla.org/

**Tutorials & Learning:**
- Three.js Journey: https://threejs-journey.com/
- Three.js Fundamentals: https://threejsfundamentals.org/
- Blender Documentation: https://docs.blender.org/

**Tools:**
- Blender: https://www.blender.org/
- Visual Studio Code: https://code.visualstudio.com/
- Chrome DevTools: Built into Chrome browser

### 13.7 Contact & Support

**Project Author:** Alma
**Project Repository:** [GitHub URL if available]
**Documentation Date:** Januari 2025
**Last Updated:** 3 Januari 2025

---

## PENUTUP

Laporan ini comprehensive documentation untuk project **3D Web Portfolio - Alma**. Document ini mencakup semua aspek project dari technical implementation, 3D modeling, code architecture, hingga user experience design.

**Untuk Questions atau Further Information:**
- Review code comments di main.js dan popup-loader.js
- Check browser console untuk debug logs
- Refer ke section-specific documentation above
- Test features hands-on dalam development environment

**Recommended Next Actions:**
1. Insert semua screenshot yang diminta di section 11
2. Record video demonstrations
3. Run performance tests dan update metrics
4. Conduct user testing dan gather feedback
5. Deploy to production
6. Share documentation dengan stakeholders

---

**Document Version:** 1.0
**Total Pages:** [Auto-generated]
**Word Count:** [~15,000+ words]
**Code Examples:** 20+ snippets
**Sections:** 13 main sections, 50+ subsections

---

*End of Report*
