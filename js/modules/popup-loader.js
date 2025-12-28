// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// POPUP SYSTEM - Opens pages in iframe overlay
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONSTANTS & CONFIGURATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Path prefixes
const PATHS = {
  WEBGL: '../webgl-portfolio/pages/',
  LOCAL: 'pages/'
};

// Helper to create project mappings
const createProjectMappings = (count, template, startFrom = 1) => {
  const mappings = {};
  for (let i = 0; i < count; i++) {
    const num = startFrom + i;
    mappings[`ruangBelajarLukisan${num}`] = template;
  }
  return mappings;
};

// Page mapping - Maps 3D object names to their respective pages
const pageMapping = {
  // About & Personal (webgl-portfolio)
  'aboutMe': `${PATHS.WEBGL}about.html`,
  'introPlay': `${PATHS.WEBGL}about.html`,

  // Skills & Education
  'values': `${PATHS.LOCAL}values.html`,
  'ruangTidurLukisanKecil1': `${PATHS.LOCAL}values.html`,
  'softSkills': `${PATHS.WEBGL}work.html`,
  'ruangSkincareLukisanPuzzle': `${PATHS.WEBGL}work.html`,
  'education': `${PATHS.WEBGL}education.html`,
  'ruangSkincareLukisanGradcap': `${PATHS.WEBGL}education.html`,
  'currentlyLearning': `${PATHS.LOCAL}currently-learning.html`,
  'ruangTidurLukisanKecil2': `${PATHS.LOCAL}currently-learning.html`,

  // Experience & Organizations (webgl-portfolio)
  'certificates': `${PATHS.WEBGL}certifications.html`,
  'buttonTodoListCertificate': `${PATHS.WEBGL}certifications.html`,
  'button-to-do-list-certificate': `${PATHS.WEBGL}certifications.html`,
  'ruangBelajarMadingTodoList': `${PATHS.WEBGL}certifications.html`,
  'ruang-belajar-mading-to-do-list': `${PATHS.WEBGL}certifications.html`,
  'organizations': `${PATHS.WEBGL}organization.html`,
  'ruangSkincareLukisanBadge': `${PATHS.WEBGL}organization.html`,

  // Gallery & Contact (webgl-portfolio)
  'gallery': `${PATHS.WEBGL}gallery.html`,
  'ruangTengahTv': `${PATHS.WEBGL}gallery.html`,
  'contact': `${PATHS.WEBGL}contact.html`,

  // Projects (14 paintings) - Specific work pages
  'ruangBelajarLukisan1': `${PATHS.WEBGL}work/agriwise.html`,
  'ruangBelajarLukisan2': `${PATHS.WEBGL}work/web3d.html`,
  'ruangBelajarLukisan3': `${PATHS.WEBGL}work/scriptr.html`,
  'ruangBelajarLukisan4': `${PATHS.WEBGL}work/jastip-automation.html`,
  'ruangBelajarLukisan5': `${PATHS.WEBGL}work/bengkelin.html`,
  'ruangBelajarLukisan6': `${PATHS.WEBGL}work/bmbp.html`,
  'ruangBelajarLukisan7': `${PATHS.WEBGL}work/todi-toraja.html`,
  'ruangBelajarLukisan8': `${PATHS.WEBGL}work/mindcraft.html`,
  'ruangBelajarLukisan9': `${PATHS.WEBGL}work/veriflair.html`,
  'ruangBelajarLukisan10': `${PATHS.WEBGL}work/tenangin.html`,
  'ruangBelajarLukisan11': `${PATHS.WEBGL}work/bitescan.html`,
  'ruangBelajarLukisan12': `${PATHS.WEBGL}work/secondlife.html`,

  // Remaining projects (13-14) use template
  ...createProjectMappings(2, `${PATHS.LOCAL}project-detail.html`, 13)
};

// Tooltip labels - Maps 3D object names to display labels
const tooltipLabels = {
  // About & Personal
  'aboutMe': 'About Alma',
  'intro-play': 'About Alma',
  // 'intro-foto': excluded - no tooltip needed

  // Skills & Education
  'values': 'Values',
  // 'ruang-tidur-lukisan-kecil-1': excluded - no tooltip needed
  // 'ruangTidurLukisanKecil1': excluded - no tooltip needed
  'softSkills': 'Projects',
  'ruang-skincare-lukisan-puzzle': 'Projects',
  'ruangSkincareLukisanPuzzle': 'Projects',
  'education': 'Education',
  'ruang-skincare-lukisan-gradcap': 'Education',
  'ruangSkincareLukisanGradcap': 'Education',
  'currentlyLearning': 'Currently Learning',
  // 'ruang-tidur-lukisan-kecil-2': excluded - no tooltip needed
  // 'ruangTidurLukisanKecil2': excluded - no tooltip needed

  // Experience & Organizations
  'certificates': 'Certifications',
  // 'buttonTodoListCertificate': excluded - no tooltip needed
  // 'button-to-do-list-certificate': excluded - no tooltip needed
  'ruang-belajar-mading-to-do-list': 'Certifications',
  'ruangBelajarMadingTodoList': 'Certifications',
  'organizations': 'Organizations',
  'ruang-skincare-lukisan-badge': 'Organizations',
  'ruangSkincareLukisanBadge': 'Organizations',

  // Gallery & Contact
  'gallery': "Alma's Gallery",
  'ruang-tengah-tv': "Alma's Gallery",
  'ruangTengahTv': "Alma's Gallery",
  'contact': 'Contact',

  // Projects - Individual tooltips (hover only)
  'ruang-belajar-lukisan-1': 'Project AgriWise',
  'ruangBelajarLukisan1': 'Project AgriWise',
  'ruang-belajar-lukisan-2': 'Project 3D Web',
  'ruangBelajarLukisan2': 'Project 3D Web',
  'ruang-belajar-lukisan-3': 'Project Scriptr',
  'ruangBelajarLukisan3': 'Project Scriptr',
  'ruang-belajar-lukisan-4': 'Project Jastip Automation',
  'ruangBelajarLukisan4': 'Project Jastip Automation',
  'ruang-belajar-lukisan-5': 'Project Bengkelin',
  'ruangBelajarLukisan5': 'Project Bengkelin',
  'ruang-belajar-lukisan-6': 'Project Animation',
  'ruangBelajarLukisan6': 'Project Animation',
  'ruang-belajar-lukisan-7': 'Project Todi Toraja',
  'ruangBelajarLukisan7': 'Project Todi Toraja',
  'ruang-belajar-lukisan-8': 'Project MindCraft',
  'ruangBelajarLukisan8': 'Project MindCraft',
  'ruang-belajar-lukisan-9': 'Project VeriFlair',
  'ruangBelajarLukisan9': 'Project VeriFlair',
  'ruang-belajar-lukisan-10': 'Project Tenangin',
  'ruangBelajarLukisan10': 'Project Tenangin',
  'ruang-belajar-lukisan-11': 'Project BiteScan',
  'ruangBelajarLukisan11': 'Project BiteScan',
  'ruang-belajar-lukisan-12': 'Project SecondLife',
  'ruangBelajarLukisan12': 'Project SecondLife',
  'ruang-belajar-lukisan-13': 'Project 13',
  'ruangBelajarLukisan13': 'Project 13',
  'ruang-belajar-lukisan-14': 'Project 14',
  'ruangBelajarLukisan14': 'Project 14'
};

// Paintings that should have hover-only tooltips (not always visible)
const hoverOnlyTooltips = [
  'ruang-belajar-lukisan-1', 'ruangBelajarLukisan1',
  'ruang-belajar-lukisan-2', 'ruangBelajarLukisan2',
  'ruang-belajar-lukisan-3', 'ruangBelajarLukisan3',
  'ruang-belajar-lukisan-4', 'ruangBelajarLukisan4',
  'ruang-belajar-lukisan-5', 'ruangBelajarLukisan5',
  'ruang-belajar-lukisan-6', 'ruangBelajarLukisan6',
  'ruang-belajar-lukisan-7', 'ruangBelajarLukisan7',
  'ruang-belajar-lukisan-8', 'ruangBelajarLukisan8',
  'ruang-belajar-lukisan-9', 'ruangBelajarLukisan9',
  'ruang-belajar-lukisan-10', 'ruangBelajarLukisan10',
  'ruang-belajar-lukisan-11', 'ruangBelajarLukisan11',
  'ruang-belajar-lukisan-12', 'ruangBelajarLukisan12'
];

// Tooltip Y-offsets for paintings to prevent overlap
const tooltipOffsets = {
  'ruang-belajar-lukisan-1': 1,
  'ruangBelajarLukisan1': 1,
  'ruang-belajar-lukisan-2': 1,
  'ruangBelajarLukisan2': 1,
  'ruang-belajar-lukisan-3': 1,
  'ruangBelajarLukisan3': 1,
  'ruang-belajar-lukisan-4': 1,
  'ruangBelajarLukisan4': 1,
  'ruang-belajar-lukisan-5': 1,
  'ruangBelajarLukisan5': 1,
  'ruang-belajar-lukisan-6': 1,
  'ruangBelajarLukisan6': 1,
  'ruang-belajar-lukisan-7': 1,
  'ruangBelajarLukisan7': 1,
  'ruang-belajar-lukisan-8': 1,
  'ruangBelajarLukisan8': 1,
  'ruang-belajar-lukisan-9': 1,
  'ruangBelajarLukisan9': 1,
  'ruang-belajar-lukisan-10': 1,
  'ruangBelajarLukisan10': 1,
  'ruang-belajar-lukisan-11': 1,
  'ruangBelajarLukisan11': 1,
  'ruang-belajar-lukisan-12': 1,
  'ruangBelajarLukisan12': 1
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DOM ELEMENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const DOM = {
  overlay: document.getElementById('popup-overlay'),
  iframe: document.getElementById('popup-iframe'),
  closeBtn: document.getElementById('close-popup')
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// POPUP FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// UTILITY FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Converts relative path to absolute URL for iframe loading
 * @param {string} path - Relative or absolute path
 * @returns {string} Absolute URL
 */
const resolveAbsoluteUrl = (path) => {
  if (!path.startsWith('../')) return path;

  const baseUrl = window.location.origin +
    window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
  return new URL(path, baseUrl).href;
};

/**
 * Adds or removes class with optional callback
 * @param {Element} element - DOM element
 * @param {string} className - Class name to toggle
 * @param {boolean} add - Add or remove
 */
const toggleClass = (element, className, add) => {
  element.classList[add ? 'add' : 'remove'](className);
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// POPUP FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Opens popup overlay with the specified page
 * @param {string} objectName - The 3D object name (must exist in pageMapping)
 */
function openPopup(objectName) {
  const pageUrl = pageMapping[objectName];

  if (!pageUrl) {
    console.error(`[Popup] No mapping found for: ${objectName}`);
    return;
  }

  console.log(`[Popup] Opening: ${pageUrl}`);

  // Load page in iframe
  DOM.iframe.src = resolveAbsoluteUrl(pageUrl);

  // Show popup overlay
  toggleClass(DOM.overlay, 'active', true);
  toggleClass(document.body, 'popup-open', true);
}

/**
 * Closes the popup overlay and clears iframe
 */
function closePopup() {
  console.log('[Popup] Closing');

  // Hide popup overlay
  toggleClass(DOM.overlay, 'active', false);
  toggleClass(document.body, 'popup-open', false);

  // Clear iframe after fade-out animation (300ms)
  setTimeout(() => {
    DOM.iframe.src = '';
  }, 300);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EVENT LISTENERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const initEventListeners = () => {
  // Close on button click
  DOM.closeBtn.addEventListener('click', closePopup);

  // Close when clicking outside popup content
  DOM.overlay.addEventListener('click', (e) => {
    if (e.target === DOM.overlay) closePopup();
  });

  // Close on ESC key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.overlay.classList.contains('active')) {
      closePopup();
    }
  });
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INITIALIZATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Get tooltip label for object name
 * @param {string} objectName - The 3D object name
 * @returns {string|null} Tooltip label or null if not found
 */
function getTooltipLabel(objectName) {
  return tooltipLabels[objectName] || null;
}

/**
 * Get tooltip Y-offset for object name to prevent overlap
 * @param {string} objectName - The 3D object name
 * @returns {number} Y-offset value (default: 1)
 */
function getTooltipOffset(objectName) {
  return tooltipOffsets[objectName] || 1;
}

/**
 * Check if tooltip should only show on hover
 * @param {string} objectName - The 3D object name
 * @returns {boolean} True if hover-only
 */
function isHoverOnlyTooltip(objectName) {
  return hoverOnlyTooltips.includes(objectName);
}

const init = () => {
  initEventListeners();

  // Global exports for three-scene.js
  window.openPopup = openPopup;
  window.closePopup = closePopup;
  window.getTooltipLabel = getTooltipLabel;
  window.getTooltipOffset = getTooltipOffset;
  window.isHoverOnlyTooltip = isHoverOnlyTooltip;

  console.log('[Popup] System initialized successfully');
  console.log(`[Popup] ${Object.keys(pageMapping).length} page mappings loaded`);
  console.log(`[Popup] ${Object.keys(tooltipLabels).length} tooltip labels loaded`);
};

// Initialize on load
init();
