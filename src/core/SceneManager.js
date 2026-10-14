import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export class SceneManager {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050711);

        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        this.camera.position.set(0, 18, 30);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        this.renderer.setPixelRatio(
            devicePixelRatio //Template says  Math.min(window.devicePixelRatio, 2) but we think its unnessesary
        )

        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        );

        this.controls.enableDamping = true;

        this.scene.add(
            new THREE.AmbientLight(0xffffff, 0.35)
        );

        const sunlight = new THREE.PointLight(0xffffff, 180);
        this.scene.add(sunlight);

        window.addEventListener('resize', () => {
            this.camera.aspect =
                window.innerWidth / window.innerHeight;

            this.camera.updateProjectionMatrix();

            this.renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );
        });
    }

    render() {
        this.controls.update();

        this.renderer.render(this.scene, this.camera);
    }
}