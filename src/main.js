import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x80a0e0);
document.body.appendChild(renderer.domElement);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.set(-32, 16, -32);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(16, 0, 16);

// Scene setup
const scene = new THREE.Scene();

const geo = new THREE.PlaneGeometry(1000, 1000, 700, 700);
let h_map = new THREE.TextureLoader().setPath("../public/").load("image.png");

const mat = new THREE.MeshStandardMaterial({
  color: 0x000000,
  wireframe: true,
  displacementMap: h_map,
  displacementScale: 100
})

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

scene.add(new THREE.Mesh(geo, mat));

// TODO: Add terrain mesh to scene here


// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})


animate();