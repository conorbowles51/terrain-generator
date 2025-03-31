import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 50, 100); // Adjust for landscape scale

// Load photogrammetry model
const loader = new GLTFLoader();
loader.load(
  '/Users/jason/Desktop/terrainGen/public/img4.jpg',
  (gltf) => {
    gltf.scene.scale.set(10, 10, 10); // Scale if needed
    scene.add(gltf.scene);
  },
  undefined,
  (error) => console.error(error)
);

// Add skybox (optional)
scene.background = new THREE.Color(0x87CEEB);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();