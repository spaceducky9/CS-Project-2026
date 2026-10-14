import * as THREE from 'three';

export class Sun {
  constructor({
    radius = 1.5,
    color = 0xffcc55,
  } = {}) {
    const geometry = new THREE.SphereGeometry(
      radius, 48, 32
    );

    const material = new THREE.MeshBasicMaterial({
      color,
    });

    this.mesh = new THREE.Mesh(geometry, material);
  }

  addTo(scene) {
    scene.add(this.mesh);
  }
}