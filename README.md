# 3D Web Portfolio - Alma Nurul Salma

Interactive 3D web portfolio showcasing projects, education, certifications, and personal gallery through an immersive house exploration experience.

## Project Structure

```
3D-web-portfolio-L25020007/
│
├── index.html                    # Main entry point - 3D interactive house
├── main.js                       # Main Three.js logic and 3D scene
│
├── assets/                       # All project assets
│   ├── models/                   # 3D models (.glb files)
│   │   ├── bismillah5.glb       # Current active house model
│   │   ├── bismillah6.glb       # Alternative model (backup)
│   │   └── alma-house-v1.glb    # Previous version (backup)
│   │
│   ├── sounds/                   # Audio files
│   │   ├── cat-meow-slow.mp3
│   │   └── cat-meow-fast.mp3
│   │
│   └── images/                   # All image assets
│       ├── profile/              # Profile photo (1 image)
│       ├── certifications/       # Certification images (7 images)
│       ├── education/            # Education images (16 images)
│       ├── gallery/              # Personal gallery (18 images)
│       ├── organizations/        # Organization images (18 images)
│       └── work/                 # Project screenshots (48 images)
│
├── css/                          # Stylesheets
│   ├── main.css                  # Main 3D portfolio styles
│   ├── portfolio.css             # 2D portfolio page styles
│   └── components/
│       └── popup.css             # Popup/modal styles
│
├── js/                           # JavaScript modules
│   ├── modules/
│   │   ├── popup-loader.js       # Popup system & page mappings
│   │   ├── cursor.js             # Custom cursor effects
│   │   └── webgl-ball.js         # WebGL ball animation
│   └── utils/
│       └── shaders.js            # WebGL shader utilities
│
├── pages/                        # HTML pages loaded in popups
│   ├── portfolio.html            # 2D portfolio landing page
│   ├── about.html                # About page
│   ├── work.html                 # Projects overview
│   ├── gallery.html              # Photo gallery
│   ├── certifications.html       # Certifications showcase
│   ├── education.html            # Education history
│   ├── organization.html         # Organizations & involvement
│   ├── contact.html              # Contact information
│   └── work/                     # Individual project detail pages
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
└── docs/                         # Project documentation
    ├── LAPORAN_LENGKAP_FINAL.md
    ├── LAPORAN_PROJECT.md
    └── LAPORAN_TAMBAHAN.md
```

## Technologies Used

### 3D Interactive Experience
- **Three.js** (v0.170.0) - 3D rendering engine
- **GLTFLoader** - 3D model loading
- **OrbitControls** - Camera controls
- **WebGL** - Hardware-accelerated graphics

### 2D Portfolio Pages
- **GSAP** - Animation library
- **Locomotive Scroll** - Smooth scrolling
- **Custom WebGL Effects** - Interactive animations
- **Vanilla JavaScript** - No framework dependencies

### Styling
- **CSS3** - Modern styling with animations
- **Google Fonts** - Pixelify Sans typeface
- **Responsive Design** - Mobile-friendly layouts

## Features

### 3D House Exploration
- Interactive 3D house model navigation
- Clickable objects that open detailed pages
- Camera modes: Follow mode & Free camera
- Hover tooltips for interactive elements
- Cat meow sound effects on interaction
- Smooth animations and transitions

### Popup System
- Windows 98-style popup windows
- Iframe-based page loading
- Multiple close methods (button, ESC, click outside)
- Smooth fade-in/fade-out animations

### Portfolio Content
- **About**: Personal introduction and background
- **Work**: 12 detailed project showcases
- **Gallery**: Personal photo collection
- **Certifications**: Professional certificates
- **Education**: Academic history with images
- **Organizations**: Community involvement
- **Contact**: Contact information

## File Statistics

- **Total Images**: 108 files
  - Profile: 1
  - Certifications: 7
  - Education: 16
  - Gallery: 18
  - Organizations: 18
  - Work Projects: 48

- **3D Models**: 3 GLB files (~74MB total)
- **Audio Files**: 2 MP3 files
- **HTML Pages**: 21 files
- **CSS Files**: 3 files
- **JavaScript Files**: 4 files
- **Documentation**: 3 markdown files

## Setup & Development

### Prerequisites
- Modern web browser with WebGL support
- Local web server (for development)

### Running Locally

1. Clone the repository
2. Start a local web server in the project root:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx http-server
   ```
3. Open `http://localhost:8000` in your browser

### Browser Compatibility
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Note: WebGL and modern JavaScript features required.

## Project Mappings

Interactive objects in the 3D house are mapped to specific pages:

- **aboutMe** → about.html
- **softSkills** → work.html
- **education** → education.html
- **certificates** → certifications.html
- **organizations** → organization.html
- **gallery** → gallery.html
- **contact** → contact.html
- **ruangBelajarLukisan1-12** → Individual project pages

See `js/modules/popup-loader.js` for complete mappings.

## Performance Notes

- 3D model is ~25MB (bismillah5.glb)
- Images are not optimized - consider compression for production
- CDN dependencies may affect load time
- Recommended: Use image lazy loading for production

## Recent Changes (Restructuring)

The project was recently reorganized for better maintainability:

- Consolidated all images into `assets/images/` with categorized subfolders
- Moved audio files to `assets/sounds/`
- Unified CSS files into `css/` directory
- Organized JavaScript into `js/modules/` and `js/utils/`
- Moved all pages to `pages/` directory
- Created `docs/` for documentation
- Removed duplicate files and folders (~74MB saved)
- Standardized file extensions (.JPG → .jpg)
- Updated all file path references in code

## License

Personal portfolio project by Alma Nurul Salma.

## Contact

For inquiries, please visit the contact page in the portfolio.
