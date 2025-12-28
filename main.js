// ========================================
// IMPORTS
// ========================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// ========================================
// CONFIGURATION
// ========================================

const CONFIG = {
    MODEL_PATH: './assets/models/bismillah5.glb',
    AUDIO: {
        CAT_MEOW_SLOW: 'assets_sound/cat-meow-slow.mp3',
        CAT_MEOW_FAST: 'assets_sound/cat-meow-fast.mp3'
    }
};

const RENDERER_CONFIG = {
    MAX_PIXEL_RATIO: 2,
    TONE_MAPPING_EXPOSURE: 1.4
};

const CAMERA_CONFIG = {
    FRUSTUM_SIZE: 40,
    NEAR: 1,
    FAR: 1000,
    FOLLOW_SETTINGS: {
        distance: 45,
        height: 35,
        angleX: -45,
        angleY: 220,
        smoothness: 0.1,
        zoom: 3.0,
        offsetX: 0,
        offsetY: 0,
        offsetZ: 0,
        lookAtOffsetX: 0,
        lookAtOffsetY: 10,
        lookAtOffsetZ: 0
    },
    INTRO_SETTINGS: {
        holdDuration: 1000,
        zoomDuration: 1500,
        holdDistance: 120,
        holdHeight: 100,
        holdZoom: 1.8
    }
};

const MOVEMENT_CONFIG = {
    maxSpeed: 0.3,
    acceleration: 0.015,
    deceleration: 0.02,
    rotationSpeed: 0.15,
    jumpForce: 0.5,
    gravity: 0.025
};

const COLLISION_CONFIG = {
    raycastDistance: 100,
    characterHeight: 0,
    groundCheckOffset: 5,
    wallCheckDistance: 2,
    wallCheckHeight: 2,
    stepHeight: 2
};

const ANIMATION_CONFIG = {
    POP_DURATION: 400,
    POP_SCALE_AMOUNT: 1.15,
    CAT_JUMP_DURATION: 500,
    CAT_JUMP_HEIGHT: 3,
    CAT_PULSE_SPEED: 0.003,
    CAT_PULSE_AMOUNT: 0.15
};

const ORBIT_CONTROLS_CONFIG = {
    enableDamping: true,
    dampingFactor: 0.08,
    screenSpacePanning: false,
    minZoom: 0.3,
    maxZoom: 4.0,
    enableRotate: true,
    rotateSpeed: 1.0,
    enablePan: true,
    panSpeed: 1.0,
    initialTarget: { x: 0, y: 20, z: 0 }
};

// Object names that should have interactive animations
const PULSATING_OBJECT_NAMES = [
    "intro-foto", "intro-play", "ruang-tengah-tv", "ruang-belajar-laptop",
    "ruang-belajar-lukisan-1", "ruang-belajar-lukisan-2", "ruang-belajar-lukisan-3",
    "ruang-belajar-lukisan-4", "ruang-belajar-lukisan-5", "ruang-belajar-lukisan-6",
    "ruang-belajar-lukisan-7", "ruang-belajar-lukisan-8", "ruang-belajar-lukisan-9",
    "ruang-belajar-lukisan-10", "ruang-belajar-lukisan-11", "ruang-belajar-lukisan-12",
    "ruang-belajar-lukisan-13", "ruang-belajar-lukisan-14", "ruang-belajar-mading-to-do-list",
    "button-to-do-list-certificate", "ruang-tidur-lukisan-kecil-1", "ruang-tidur-lukisan-kecil-2",
    "ruang-tidur-lukisan-besar", "ruang-skincare-lukisan-gradcap", "ruang-skincare-lukisan-puzzle",
    "ruang-skincare-lukisan-badge", "ruang-belajar-mouse"
];

// Maps 3D object names to page identifiers for popup system
const OBJECT_TO_PAGE_MAPPING = {
    'intro-foto': 'aboutMe',
    'intro-play': 'aboutMe',
    'ruang-tidur-lukisan-kecil-1': 'values',
    'ruang-tidur-lukisan-kecil-2': 'currentlyLearning',
    'ruang-tidur-lukisan-besar': 'gallery',
    'ruang-skincare-lukisan-gradcap': 'education',
    'ruang-skincare-lukisan-puzzle': 'softSkills',
    'ruang-skincare-lukisan-badge': 'organizations',
    'ruang-belajar-lukisan-1': 'ruangBelajarLukisan1',
    'ruang-belajar-lukisan-2': 'ruangBelajarLukisan2',
    'ruang-belajar-lukisan-3': 'ruangBelajarLukisan3',
    'ruang-belajar-lukisan-4': 'ruangBelajarLukisan4',
    'ruang-belajar-lukisan-5': 'ruangBelajarLukisan5',
    'ruang-belajar-lukisan-6': 'ruangBelajarLukisan6',
    'ruang-belajar-lukisan-7': 'ruangBelajarLukisan7',
    'ruang-belajar-lukisan-8': 'ruangBelajarLukisan8',
    'ruang-belajar-lukisan-9': 'ruangBelajarLukisan9',
    'ruang-belajar-lukisan-10': 'ruangBelajarLukisan10',
    'ruang-belajar-lukisan-11': 'ruangBelajarLukisan11',
    'ruang-belajar-lukisan-12': 'ruangBelajarLukisan12',
    'ruang-belajar-lukisan-13': 'ruangBelajarLukisan13',
    'ruang-belajar-lukisan-14': 'ruangBelajarLukisan14',
    'ruang-belajar-mading-to-do-list': 'certificates',
    'button-to-do-list-certificate': 'certificates',
    'ruang-tengah-tv': 'ruangTengahTv',
    'ruang-belajar-mouse': 'contact'
};


// ========================================
// SCENE & RENDERER SETUP
// ========================================

const canvas = document.getElementById('experience-canvas');
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, RENDERER_CONFIG.MAX_PIXEL_RATIO));
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = RENDERER_CONFIG.TONE_MAPPING_EXPOSURE;


// ========================================
// CAMERA SETUP
// ========================================

const aspect = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
    -aspect * CAMERA_CONFIG.FRUSTUM_SIZE,
    aspect * CAMERA_CONFIG.FRUSTUM_SIZE,
    CAMERA_CONFIG.FRUSTUM_SIZE,
    -CAMERA_CONFIG.FRUSTUM_SIZE,
    CAMERA_CONFIG.NEAR,
    CAMERA_CONFIG.FAR
);
camera.position.set(30, 120, 270);
scene.add(camera);


// ========================================
// ORBIT CONTROLS
// ========================================

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = ORBIT_CONTROLS_CONFIG.enableDamping;
controls.dampingFactor = ORBIT_CONTROLS_CONFIG.dampingFactor;
controls.screenSpacePanning = ORBIT_CONTROLS_CONFIG.screenSpacePanning;
controls.minZoom = ORBIT_CONTROLS_CONFIG.minZoom;
controls.maxZoom = ORBIT_CONTROLS_CONFIG.maxZoom;
controls.enableRotate = ORBIT_CONTROLS_CONFIG.enableRotate;
controls.rotateSpeed = ORBIT_CONTROLS_CONFIG.rotateSpeed;
controls.enablePan = ORBIT_CONTROLS_CONFIG.enablePan;
controls.panSpeed = ORBIT_CONTROLS_CONFIG.panSpeed;
controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
};
controls.target.set(
    ORBIT_CONTROLS_CONFIG.initialTarget.x,
    ORBIT_CONTROLS_CONFIG.initialTarget.y,
    ORBIT_CONTROLS_CONFIG.initialTarget.z
);
controls.enabled = false; // Disabled during intro/follow mode
controls.update();


// ========================================
// LIGHTING SETUP
// ========================================

// Key light (main directional light with shadows)
const sun = new THREE.DirectionalLight(0xfff8e7, 1.8);
sun.castShadow = true;
sun.position.set(200, 350, 200);
sun.target.position.set(0, 0, 0);
sun.shadow.camera.left = -400;
sun.shadow.camera.right = 400;
sun.shadow.camera.top = 400;
sun.shadow.camera.bottom = -400;
sun.shadow.camera.near = 0.5;
sun.shadow.camera.far = 1000;
sun.shadow.bias = -0.0005;
sun.shadow.normalBias = 0.05;
sun.shadow.mapSize.width = 4096;
sun.shadow.mapSize.height = 4096;
scene.add(sun);

// Fill lights to soften shadows
const fillLight1 = new THREE.DirectionalLight(0xe6f2ff, 0.4);
fillLight1.position.set(-150, 200, -100);
scene.add(fillLight1);

const fillLight2 = new THREE.PointLight(0xfff5e6, 0.3, 500);
fillLight2.position.set(0, 50, 0);
scene.add(fillLight2);

// Rim light for edge definition
const rimLight = new THREE.DirectionalLight(0xb3d9ff, 0.6);
rimLight.position.set(-200, 250, -200);
scene.add(rimLight);

// Hemisphere light for natural sky/ground color transition
const hemiLight = new THREE.HemisphereLight(0xf0f4ff, 0xd4c4b0, 0.5);
scene.add(hemiLight);

// Ambient light for soft global illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);


// ========================================
// STATE MANAGEMENT
// ========================================

// Game objects
const gameState = {
    character: null,
    groundCollider: null,
    cat: null,
    intersectObjects: [],
    pulsatingObjects: [],
    sharedLukisanTooltip: null
};

// Physics state
const physicsState = {
    velocityX: 0,
    velocityZ: 0,
    verticalVelocity: 0,
    isGrounded: false,
    lastTime: performance.now()
};

// Character rotation state (90-degree snap rotation)
const rotationState = {
    targetRotation: 0,
    currentRotation: 0,
    isRotating: false,
    rotationSpeed: MOVEMENT_CONFIG.rotationSpeed
};

// Cat animation state
const catState = {
    isHovered: false,
    isJumping: false,
    jumpStartTime: 0,
    originalScale: { x: 1, y: 1, z: 1 },
    originalPosition: { x: 0, y: 0, z: 0 }
};

// Camera state
let cameraMode = 'intro'; // 'intro', 'follow', or 'free'

const cameraIntroState = {
    startTime: null,
    isComplete: false
};

// Input state
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    w: false,
    a: false,
    s: false,
    d: false,
    ' ': false,
    c: false
};

// Track single key press (prevent continuous firing)
const keysPressed = {
    ArrowLeft: false,
    ArrowRight: false,
    a: false,
    d: false,
    ArrowUp: false,
    ' ': false,
    c: false
};

// Raycasting
const raycaster = new THREE.Raycaster();
const collisionRaycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const rayDirection = new THREE.Vector3(0, -1, 0);

// Audio
const audio = {
    catMeowSlow: new Audio(CONFIG.AUDIO.CAT_MEOW_SLOW),
    catMeowFast: new Audio(CONFIG.AUDIO.CAT_MEOW_FAST)
};

// Tooltip container
const tooltipsContainer = document.getElementById('tooltips-container');


// ========================================
// MODEL LOADING
// ========================================

const loader = new GLTFLoader();

loader.load(CONFIG.MODEL_PATH, function (glb) {
    // Setup all meshes in the scene
    glb.scene.traverse(child => {
        if (child.isMesh) {
            // Add to intersect objects (except character)
            if (child.name !== "character") {
                gameState.intersectObjects.push(child);
            }

            // Enable double-sided rendering
            if (Array.isArray(child.material)) {
                child.material.forEach(mat => mat.side = THREE.DoubleSide);
            } else if (child.material) {
                child.material.side = THREE.DoubleSide;
            }

            // Enable shadows
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    scene.add(glb.scene);

    // Store character reference
    gameState.character = glb.scene.getObjectByName("character");

    // Store ground collider and hide it
    gameState.groundCollider = glb.scene.getObjectByName("ground-collider");
    if (gameState.groundCollider) {
        gameState.groundCollider.traverse(child => {
            if (child.isMesh) child.visible = false;
        });
    }

    // Position character on ground
    if (gameState.character && gameState.groundCollider) {
        const rayOrigin = new THREE.Vector3(
            gameState.character.position.x,
            gameState.character.position.y + 50,
            gameState.character.position.z
        );

        collisionRaycaster.set(rayOrigin, new THREE.Vector3(0, -1, 0));
        collisionRaycaster.far = CAMERA_CONFIG.FAR;

        const intersects = collisionRaycaster.intersectObject(gameState.groundCollider, true);

        if (intersects.length > 0) {
            const groundHeight = intersects[0].point.y;
            gameState.character.position.y = groundHeight + COLLISION_CONFIG.characterHeight;
            physicsState.isGrounded = true;
        }

        // Setup initial camera target
        camera.lookAt(gameState.character.position);
        controls.target.set(
            gameState.character.position.x,
            gameState.character.position.y + ORBIT_CONTROLS_CONFIG.initialTarget.y,
            gameState.character.position.z
        );
        controls.update();
    }

    // Store cat reference and original properties
    gameState.cat = glb.scene.getObjectByName("cat");
    if (gameState.cat) {
        catState.originalScale = {
            x: gameState.cat.scale.x,
            y: gameState.cat.scale.y,
            z: gameState.cat.scale.z
        };
        catState.originalPosition = {
            x: gameState.cat.position.x,
            y: gameState.cat.position.y,
            z: gameState.cat.position.z
        };
    }

    // Setup pulsating objects and tooltips
    setupPulsatingObjects(glb.scene);
});


// ========================================
// PULSATING OBJECTS & TOOLTIPS SETUP
// ========================================

function setupPulsatingObjects(sceneRoot) {
    const lukisanObjects = [];

    PULSATING_OBJECT_NAMES.forEach(name => {
        const obj = sceneRoot.getObjectByName(name);
        if (!obj) return;

        // Get tooltip configuration from external functions
        const label = window.getTooltipLabel ? window.getTooltipLabel(name) : null;
        const isHoverOnly = window.isHoverOnlyTooltip ? window.isHoverOnlyTooltip(name) : false;

        // Create tooltip element
        let tooltipElement = null;
        if (label) {
            tooltipElement = document.createElement('div');

            const offset = window.getTooltipOffset ? window.getTooltipOffset(name) : 1;
            const isArrowUp = offset < 0;

            tooltipElement.className = isArrowUp ? 'pixel-tooltip arrow-up' : 'pixel-tooltip';
            tooltipElement.textContent = label;

            if (isHoverOnly) {
                tooltipElement.style.display = 'none';
            }

            tooltipsContainer.appendChild(tooltipElement);
        }

        // Store object data
        const itemData = {
            name: name,
            object: obj,
            originalScale: { x: obj.scale.x, y: obj.scale.y, z: obj.scale.z },
            isHovered: false,
            isAnimating: false,
            animationStartTime: 0,
            wasHovered: false,
            tooltipElement: tooltipElement,
            isHoverOnlyTooltip: isHoverOnly
        };

        gameState.pulsatingObjects.push(itemData);

        if (isHoverOnly) {
            lukisanObjects.push(obj);
        }
    });

    // Create shared tooltip for all lukisan objects
    if (lukisanObjects.length > 0) {
        const sharedTooltip = document.createElement('div');
        sharedTooltip.className = 'pixel-tooltip';
        sharedTooltip.textContent = "Alma's Project";
        sharedTooltip.id = 'shared-lukisan-tooltip';
        tooltipsContainer.appendChild(sharedTooltip);

        gameState.sharedLukisanTooltip = {
            element: sharedTooltip,
            objects: lukisanObjects
        };
    }
}


// ========================================
// EVENT HANDLERS
// ========================================

// Window resize
function onResize() {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    const aspect = sizes.width / sizes.height;

    camera.left = -aspect * CAMERA_CONFIG.FRUSTUM_SIZE;
    camera.right = aspect * CAMERA_CONFIG.FRUSTUM_SIZE;
    camera.top = CAMERA_CONFIG.FRUSTUM_SIZE;
    camera.bottom = -CAMERA_CONFIG.FRUSTUM_SIZE;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, RENDERER_CONFIG.MAX_PIXEL_RATIO));
}

// Pointer move (for hover detection)
function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    // Check cat hover
    if (gameState.cat) {
        const intersects = raycaster.intersectObject(gameState.cat, true);
        const wasHovered = catState.isHovered;
        catState.isHovered = intersects.length > 0;

        if (catState.isHovered && !wasHovered) {
            audio.catMeowSlow.currentTime = 0;
            audio.catMeowSlow.play();
        }
    }

    // Check pulsating objects hover
    gameState.pulsatingObjects.forEach(item => {
        const intersects = raycaster.intersectObject(item.object, true);
        const currentlyHovered = intersects.length > 0;

        // Start pop animation on hover
        if (currentlyHovered && !item.wasHovered && !item.isAnimating) {
            item.isAnimating = true;
            item.animationStartTime = Date.now();
        }

        // Show/hide hover-only tooltips
        if (item.isHoverOnlyTooltip && item.tooltipElement) {
            item.tooltipElement.style.display = currentlyHovered ? 'block' : 'none';
        }

        item.isHovered = currentlyHovered;
        item.wasHovered = currentlyHovered;
    });
}

// Click handler
function onClick() {
    raycaster.setFromCamera(pointer, camera);

    // Check cat click
    if (gameState.cat) {
        const catIntersects = raycaster.intersectObject(gameState.cat, true);
        if (catIntersects.length > 0) {
            onCatClick();
            return;
        }
    }

    // Check pulsating objects click
    for (const item of gameState.pulsatingObjects) {
        const intersects = raycaster.intersectObject(item.object, true);
        if (intersects.length > 0) {
            handlePulsatingObjectClick(item);
            return;
        }
    }
}

// Keyboard handlers
function onKeyDown(event) {
    if (event.key in keys) {
        if (!keys[event.key] && event.key in keysPressed) {
            keysPressed[event.key] = true;
        }
        keys[event.key] = true;
    }
}

function onKeyUp(event) {
    if (event.key in keys) {
        keys[event.key] = false;
    }
    if (event.key in keysPressed) {
        keysPressed[event.key] = false;
    }
}

// Register event listeners
window.addEventListener('resize', onResize);
window.addEventListener('click', onClick);
window.addEventListener('pointermove', onPointerMove);
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);


// ========================================
// CLICK HANDLERS
// ========================================

function handlePulsatingObjectClick(item) {
    const pageName = OBJECT_TO_PAGE_MAPPING[item.name];

    if (pageName && typeof window.openPopup === 'function') {
        window.openPopup(pageName);
    } else {
        console.warn('No popup mapping found for:', item.name);
    }
}

function onCatClick() {
    if (!gameState.cat || catState.isJumping) return;

    catState.isJumping = true;
    catState.jumpStartTime = Date.now();

    // Play meow sound twice
    audio.catMeowFast.currentTime = 0;
    audio.catMeowFast.play();

    audio.catMeowFast.addEventListener('ended', function playSecondMeow() {
        audio.catMeowFast.currentTime = 0;
        audio.catMeowFast.play();
        audio.catMeowFast.removeEventListener('ended', playSecondMeow);
    }, { once: true });
}


// ========================================
// COLLISION DETECTION
// ========================================

function checkWallCollision(direction) {
    if (!gameState.character || !gameState.groundCollider) return false;

    const rayOrigin = new THREE.Vector3(
        gameState.character.position.x,
        gameState.character.position.y + COLLISION_CONFIG.wallCheckHeight,
        gameState.character.position.z
    );

    collisionRaycaster.set(rayOrigin, direction);
    collisionRaycaster.far = COLLISION_CONFIG.wallCheckDistance;

    const intersects = collisionRaycaster.intersectObject(gameState.groundCollider, true);

    return intersects.length > 0;
}

function checkStepClimb(direction) {
    if (!gameState.character || !gameState.groundCollider) return null;

    const rayOrigin = new THREE.Vector3(
        gameState.character.position.x + direction.x * COLLISION_CONFIG.wallCheckDistance,
        gameState.character.position.y + COLLISION_CONFIG.stepHeight,
        gameState.character.position.z + direction.z * COLLISION_CONFIG.wallCheckDistance
    );

    const downDirection = new THREE.Vector3(0, -1, 0);
    collisionRaycaster.set(rayOrigin, downDirection);
    collisionRaycaster.far = COLLISION_CONFIG.stepHeight + 1;

    const intersects = collisionRaycaster.intersectObject(gameState.groundCollider, true);

    if (intersects.length > 0) {
        const stepGroundHeight = intersects[0].point.y;
        const currentGroundHeight = gameState.character.position.y;
        const stepDifference = stepGroundHeight - currentGroundHeight;

        if (stepDifference > 0.1 && stepDifference <= COLLISION_CONFIG.stepHeight) {
            return stepGroundHeight + COLLISION_CONFIG.characterHeight;
        }
    }

    return null;
}

function checkGroundCollision() {
    if (!gameState.character || !gameState.groundCollider) return;

    const rayOrigin = new THREE.Vector3(
        gameState.character.position.x,
        gameState.character.position.y + COLLISION_CONFIG.groundCheckOffset,
        gameState.character.position.z
    );

    collisionRaycaster.set(rayOrigin, rayDirection);
    collisionRaycaster.far = COLLISION_CONFIG.raycastDistance;

    const intersects = collisionRaycaster.intersectObject(gameState.groundCollider, true);

    if (intersects.length > 0) {
        const groundHeight = intersects[0].point.y;
        const targetY = groundHeight + COLLISION_CONFIG.characterHeight;

        if (gameState.character.position.y <= targetY || physicsState.verticalVelocity <= 0) {
            gameState.character.position.y = targetY;
            physicsState.isGrounded = true;
            physicsState.verticalVelocity = 0;
        } else {
            physicsState.isGrounded = false;
        }
    } else {
        physicsState.isGrounded = false;
    }
}


// ========================================
// CHARACTER MOVEMENT
// ========================================

function updateCharacterMovement() {
    if (!gameState.character) return;

    const currentTime = performance.now();
    const deltaTime = (currentTime - physicsState.lastTime) / 16.67;
    physicsState.lastTime = currentTime;

    // Camera mode toggle
    handleCameraModeToggle();

    // Jump mechanics
    if (keysPressed[' '] && physicsState.isGrounded) {
        physicsState.verticalVelocity = MOVEMENT_CONFIG.jumpForce;
        physicsState.isGrounded = false;
        keysPressed[' '] = false;
    }

    // Apply gravity
    if (!physicsState.isGrounded) {
        physicsState.verticalVelocity -= MOVEMENT_CONFIG.gravity * deltaTime;
    }

    gameState.character.position.y += physicsState.verticalVelocity * deltaTime;

    // 90-degree rotation
    handleCharacterRotation();

    // Forward/backward movement
    handleCharacterTranslation(deltaTime);
}

function handleCameraModeToggle() {
    if (!keysPressed.c) return;

    cameraMode = (cameraMode === 'follow') ? 'free' : 'follow';

    const indicator = document.getElementById('camera-mode-indicator');
    const angleYRad = CAMERA_CONFIG.FOLLOW_SETTINGS.angleY * (Math.PI / 180);

    if (cameraMode === 'free') {
        controls.enabled = true;

        const closeDistance = 15;
        const closeHeight = 12;

        camera.position.set(
            gameState.character.position.x + Math.cos(angleYRad) * closeDistance,
            gameState.character.position.y + closeHeight,
            gameState.character.position.z + Math.sin(angleYRad) * closeDistance
        );

        camera.zoom = 5.0;
        camera.updateProjectionMatrix();

        controls.target.set(
            gameState.character.position.x,
            gameState.character.position.y + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetY,
            gameState.character.position.z
        );
        controls.update();

        if (indicator) {
            indicator.querySelector('.camera-mode-text').textContent =
                '🎮 FREE CAMERA - Drag to orbit around character';
            indicator.style.background = 'rgba(50, 150, 50, 0.8)';
        }
    } else {
        controls.enabled = false;

        if (indicator) {
            indicator.querySelector('.camera-mode-text').textContent =
                '📷 FOLLOW MODE - Press C for first-person';
            indicator.style.background = 'rgba(0, 0, 0, 0.7)';
        }
    }

    keysPressed.c = false;
}

function handleCharacterRotation() {
    if ((keysPressed.a || keysPressed.ArrowLeft) && !rotationState.isRotating) {
        rotationState.targetRotation -= Math.PI / 2;
        rotationState.isRotating = true;
        keysPressed.a = false;
        keysPressed.ArrowLeft = false;
    } else if ((keysPressed.d || keysPressed.ArrowRight) && !rotationState.isRotating) {
        rotationState.targetRotation += Math.PI / 2;
        rotationState.isRotating = true;
        keysPressed.d = false;
        keysPressed.ArrowRight = false;
    }

    if (rotationState.isRotating) {
        const rotationDiff = rotationState.targetRotation - rotationState.currentRotation;
        rotationState.currentRotation += rotationDiff * rotationState.rotationSpeed;
        gameState.character.rotation.y = rotationState.currentRotation;

        if (Math.abs(rotationDiff) < 0.01) {
            rotationState.currentRotation = rotationState.targetRotation;
            gameState.character.rotation.y = rotationState.targetRotation;
            rotationState.isRotating = false;
        }
    }
}

function handleCharacterTranslation(deltaTime) {
    const moveInput =
        (keys.w || keys.ArrowUp ? 1 : 0) +
        (keys.s || keys.ArrowDown ? -1 : 0);

    let inputX = 0;
    let inputZ = 0;

    if (moveInput !== 0) {
        inputX = Math.sin(gameState.character.rotation.y) * moveInput;
        inputZ = Math.cos(gameState.character.rotation.y) * moveInput;
    }

    const inputMagnitude = Math.sqrt(inputX * inputX + inputZ * inputZ);

    // Apply acceleration or deceleration
    if (inputMagnitude > 0) {
        const targetVelocityX = inputX * MOVEMENT_CONFIG.maxSpeed;
        const targetVelocityZ = inputZ * MOVEMENT_CONFIG.maxSpeed;

        physicsState.velocityX += (targetVelocityX - physicsState.velocityX) * MOVEMENT_CONFIG.acceleration * deltaTime;
        physicsState.velocityZ += (targetVelocityZ - physicsState.velocityZ) * MOVEMENT_CONFIG.acceleration * deltaTime;
    } else {
        const currentSpeed = Math.sqrt(physicsState.velocityX * physicsState.velocityX + physicsState.velocityZ * physicsState.velocityZ);

        if (currentSpeed > 0.001) {
            const decelAmount = MOVEMENT_CONFIG.deceleration * deltaTime;
            const decelFactor = Math.max(0, 1 - decelAmount / currentSpeed);

            physicsState.velocityX *= decelFactor;
            physicsState.velocityZ *= decelFactor;
        } else {
            physicsState.velocityX = 0;
            physicsState.velocityZ = 0;
        }
    }

    // Apply velocity with collision detection
    const currentSpeed = Math.sqrt(physicsState.velocityX * physicsState.velocityX + physicsState.velocityZ * physicsState.velocityZ);

    if (currentSpeed > 0.001) {
        const moveDirection = new THREE.Vector3(physicsState.velocityX, 0, -physicsState.velocityZ).normalize();
        const hasWallCollision = checkWallCollision(moveDirection);

        if (!hasWallCollision) {
            gameState.character.position.x += physicsState.velocityX * deltaTime;
            gameState.character.position.z -= physicsState.velocityZ * deltaTime;
        } else {
            const stepTargetY = checkStepClimb(moveDirection);

            if (stepTargetY !== null) {
                gameState.character.position.x += physicsState.velocityX * deltaTime;
                gameState.character.position.z -= physicsState.velocityZ * deltaTime;
                gameState.character.position.y = stepTargetY;
            } else {
                physicsState.velocityX = 0;
                physicsState.velocityZ = 0;
            }
        }
    }
}


// ========================================
// CAMERA UPDATES
// ========================================

function updateCameraIntro() {
    if (!gameState.character || cameraIntroState.isComplete) return;

    if (cameraIntroState.startTime === null) {
        cameraIntroState.startTime = Date.now();
    }

    const elapsed = Date.now() - cameraIntroState.startTime;
    const angleYRad = CAMERA_CONFIG.FOLLOW_SETTINGS.angleY * (Math.PI / 180);

    // Phase 1: Hold at initial position
    if (elapsed < CAMERA_CONFIG.INTRO_SETTINGS.holdDuration) {
        const holdX = gameState.character.position.x +
            Math.cos(angleYRad) * CAMERA_CONFIG.INTRO_SETTINGS.holdDistance + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetX;
        const holdY = gameState.character.position.y + CAMERA_CONFIG.INTRO_SETTINGS.holdHeight + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetY;
        const holdZ = gameState.character.position.z +
            Math.sin(angleYRad) * CAMERA_CONFIG.INTRO_SETTINGS.holdDistance + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetZ;

        camera.position.set(holdX, holdY, holdZ);
        camera.zoom = CAMERA_CONFIG.INTRO_SETTINGS.holdZoom;
        camera.updateProjectionMatrix();

        const lookAtTarget = new THREE.Vector3(
            gameState.character.position.x + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetX,
            gameState.character.position.y + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetY,
            gameState.character.position.z + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetZ
        );
        camera.lookAt(lookAtTarget);
        return;
    }

    // Phase 2: Zoom in to follow position
    const zoomElapsed = elapsed - CAMERA_CONFIG.INTRO_SETTINGS.holdDuration;
    const zoomProgress = Math.min(zoomElapsed / CAMERA_CONFIG.INTRO_SETTINGS.zoomDuration, 1);

    // Ease-in-out function
    const easeProgress = zoomProgress < 0.5
        ? 2 * zoomProgress * zoomProgress
        : 1 - Math.pow(-2 * zoomProgress + 2, 2) / 2;

    const holdX = gameState.character.position.x +
        Math.cos(angleYRad) * CAMERA_CONFIG.INTRO_SETTINGS.holdDistance + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetX;
    const holdY = gameState.character.position.y + CAMERA_CONFIG.INTRO_SETTINGS.holdHeight + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetY;
    const holdZ = gameState.character.position.z +
        Math.sin(angleYRad) * CAMERA_CONFIG.INTRO_SETTINGS.holdDistance + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetZ;

    const targetX = gameState.character.position.x +
        Math.cos(angleYRad) * CAMERA_CONFIG.FOLLOW_SETTINGS.distance + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetX;
    const targetY = gameState.character.position.y + CAMERA_CONFIG.FOLLOW_SETTINGS.height + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetY;
    const targetZ = gameState.character.position.z +
        Math.sin(angleYRad) * CAMERA_CONFIG.FOLLOW_SETTINGS.distance + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetZ;

    camera.position.x = holdX + (targetX - holdX) * easeProgress;
    camera.position.y = holdY + (targetY - holdY) * easeProgress;
    camera.position.z = holdZ + (targetZ - holdZ) * easeProgress;

    camera.zoom = CAMERA_CONFIG.INTRO_SETTINGS.holdZoom + (CAMERA_CONFIG.FOLLOW_SETTINGS.zoom - CAMERA_CONFIG.INTRO_SETTINGS.holdZoom) * easeProgress;
    camera.updateProjectionMatrix();

    const lookAtTarget = new THREE.Vector3(
        gameState.character.position.x + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetX,
        gameState.character.position.y + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetY,
        gameState.character.position.z + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetZ
    );
    camera.lookAt(lookAtTarget);

    if (zoomProgress >= 1) {
        cameraIntroState.isComplete = true;
        cameraMode = 'follow';
    }
}

function updateCameraFollow() {
    if (!gameState.character || cameraMode !== 'follow') return;

    const angleYRad = CAMERA_CONFIG.FOLLOW_SETTINGS.angleY * (Math.PI / 180);

    const targetX = gameState.character.position.x +
        Math.cos(angleYRad) * CAMERA_CONFIG.FOLLOW_SETTINGS.distance + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetX;
    const targetY = gameState.character.position.y + CAMERA_CONFIG.FOLLOW_SETTINGS.height + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetY;
    const targetZ = gameState.character.position.z +
        Math.sin(angleYRad) * CAMERA_CONFIG.FOLLOW_SETTINGS.distance + CAMERA_CONFIG.FOLLOW_SETTINGS.offsetZ;

    camera.position.x += (targetX - camera.position.x) * CAMERA_CONFIG.FOLLOW_SETTINGS.smoothness;
    camera.position.y += (targetY - camera.position.y) * CAMERA_CONFIG.FOLLOW_SETTINGS.smoothness;
    camera.position.z += (targetZ - camera.position.z) * CAMERA_CONFIG.FOLLOW_SETTINGS.smoothness;

    camera.zoom = CAMERA_CONFIG.FOLLOW_SETTINGS.zoom;
    camera.updateProjectionMatrix();

    const lookAtTarget = new THREE.Vector3(
        gameState.character.position.x + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetX,
        gameState.character.position.y + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetY,
        gameState.character.position.z + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetZ
    );

    camera.lookAt(lookAtTarget);
}

function updateCameraFree() {
    if (!gameState.character || cameraMode !== 'free') return;

    controls.target.set(
        gameState.character.position.x,
        gameState.character.position.y + CAMERA_CONFIG.FOLLOW_SETTINGS.lookAtOffsetY,
        gameState.character.position.z
    );
}


// ========================================
// ANIMATIONS
// ========================================

function updateCatAnimation() {
    if (!gameState.cat) return;

    if (catState.isJumping) {
        const elapsed = Date.now() - catState.jumpStartTime;
        const progress = Math.min(elapsed / ANIMATION_CONFIG.CAT_JUMP_DURATION, 1);

        const jumpOffset = Math.sin(progress * Math.PI) * ANIMATION_CONFIG.CAT_JUMP_HEIGHT;
        gameState.cat.position.y = catState.originalPosition.y + jumpOffset;

        if (progress >= 1) {
            catState.isJumping = false;
            gameState.cat.position.y = catState.originalPosition.y;
        }
    } else if (catState.isHovered) {
        const time = Date.now() * ANIMATION_CONFIG.CAT_PULSE_SPEED;
        const scale = 1 + Math.sin(time) * ANIMATION_CONFIG.CAT_PULSE_AMOUNT;
        gameState.cat.scale.set(
            catState.originalScale.x * scale,
            catState.originalScale.y * scale,
            catState.originalScale.z * scale
        );
    } else {
        gameState.cat.scale.set(catState.originalScale.x, catState.originalScale.y, catState.originalScale.z);
    }
}

function updatePulsatingObjects() {
    gameState.pulsatingObjects.forEach(item => {
        if (!item.isAnimating) return;

        const elapsed = Date.now() - item.animationStartTime;
        const progress = Math.min(elapsed / ANIMATION_CONFIG.POP_DURATION, 1);

        const popProgress = Math.sin(progress * Math.PI);
        const currentScale = 1 + (ANIMATION_CONFIG.POP_SCALE_AMOUNT - 1) * popProgress;

        item.object.scale.set(
            item.originalScale.x * currentScale,
            item.originalScale.y * currentScale,
            item.originalScale.z * currentScale
        );

        if (progress >= 1) {
            item.isAnimating = false;
            item.object.scale.set(
                item.originalScale.x,
                item.originalScale.y,
                item.originalScale.z
            );
        }
    });
}


// ========================================
// TOOLTIP POSITIONING
// ========================================

function updateTooltipPositions() {
    // Update individual tooltips
    gameState.pulsatingObjects.forEach(item => {
        if (!item.tooltipElement) return;

        // Skip hover-only tooltips if hidden
        if (item.isHoverOnlyTooltip && item.tooltipElement.style.display !== 'block') return;

        const position = new THREE.Vector3();
        item.object.getWorldPosition(position);

        const yOffset = window.getTooltipOffset ? window.getTooltipOffset(item.name) : 1;
        position.y += yOffset;

        const screenPosition = position.clone().project(camera);

        const x = (screenPosition.x * 0.5 + 0.5) * sizes.width;
        const y = (screenPosition.y * -0.5 + 0.5) * sizes.height;

        const distanceToCamera = camera.position.distanceTo(item.object.position);
        const isInFrontOfCamera = screenPosition.z < 1;
        const isWithinRange = distanceToCamera < 150;

        if (isInFrontOfCamera && isWithinRange) {
            item.tooltipElement.style.left = `${x}px`;
            item.tooltipElement.style.top = `${y}px`;

            if (!item.isHoverOnlyTooltip) {
                item.tooltipElement.style.display = 'block';
            }

            const scale = Math.max(0.6, Math.min(1.2, 100 / distanceToCamera));
            const isArrowUp = item.tooltipElement.classList.contains('arrow-up');

            if (isArrowUp) {
                item.tooltipElement.style.transform = `translate(-50%, 0%) scale(${scale})`;
            } else {
                item.tooltipElement.style.transform = `translate(-50%, -100%) scale(${scale})`;
            }
        } else {
            if (!item.isHoverOnlyTooltip) {
                item.tooltipElement.style.display = 'none';
            }
        }
    });

    // Update shared lukisan tooltip
    if (gameState.sharedLukisanTooltip) {
        const { element, objects } = gameState.sharedLukisanTooltip;

        const centerPosition = new THREE.Vector3(0, 0, 0);
        let validObjects = 0;

        objects.forEach(obj => {
            const pos = new THREE.Vector3();
            obj.getWorldPosition(pos);
            centerPosition.add(pos);
            validObjects++;
        });

        if (validObjects > 0) {
            centerPosition.divideScalar(validObjects);
            centerPosition.y += 3;

            const screenPosition = centerPosition.clone().project(camera);
            const x = (screenPosition.x * 0.5 + 0.5) * sizes.width;
            const y = (screenPosition.y * -0.5 + 0.5) * sizes.height;

            const distanceToCamera = camera.position.distanceTo(centerPosition);
            const isInFrontOfCamera = screenPosition.z < 1;
            const isWithinRange = distanceToCamera < 150;

            if (isInFrontOfCamera && isWithinRange) {
                element.style.left = `${x}px`;
                element.style.top = `${y}px`;
                element.style.display = 'block';

                const scale = Math.max(0.6, Math.min(1.2, 100 / distanceToCamera));
                element.style.transform = `translate(-50%, -100%) scale(${scale})`;
            } else {
                element.style.display = 'none';
            }
        }
    }
}


// ========================================
// ANIMATION LOOP
// ========================================

function animate() {
    // Character updates
    updateCharacterMovement();
    checkGroundCollision();

    // Camera updates
    if (cameraMode === 'intro') {
        updateCameraIntro();
    } else if (cameraMode === 'follow') {
        updateCameraFollow();
    } else if (cameraMode === 'free') {
        updateCameraFree();
    }

    if (controls.enabled) {
        controls.update();
    }

    // Object animations
    updateCatAnimation();
    updatePulsatingObjects();

    // UI updates
    updateTooltipPositions();

    // Render
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
