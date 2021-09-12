import './style.css'

import * as THREE from 'three';
/* in three js you will always need three things 
1.Scene = is like a container that holds all your objects, camera, lights Scene == Container
2.Camera = is used to see things in the scene the most common type used is the perspective camera
3.Renderer*/

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) //(arg1 = field of view(what can be seen), arg2 = aspect ratio(which is based of the users browsers winder can be calculated by deviding the windows inner width byt the inner height), view frustum, view frustum)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30)

// renderer.render(scene, camera); //render == draw

//When creating a object there are 3 basic parts
//1. geometry - the {x,y,z} points that makeup a shape
//2. material - The wrapping paper for an object (color or a texture) I can make custome shaders with webGL
//3. mesh - geometry + material
const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true }); //MeshBasicMaterial doesn't require a light source
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render( scene, camera );
}

animate()