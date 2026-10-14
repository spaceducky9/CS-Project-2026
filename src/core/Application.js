import { Timer } from "three"
import { SceneManager } from "./SceneManager.js"
import { SolarSystem } from "./SolarSystem.js"


export class Application {
    constructor() {
        this.sceneManager = new SceneManager();

        this.solarSystem = new SolarSystem(
            this.sceneManager.scene
        );

        this.clock = new Timer();
        this.simulationTime = 0
    }

    start() {
        this.clock.reset();
        this.animate();
    }

    animate() {
        requestAnimationFrame(() =>this.animate());

        this.clock.update();

        const deltaTime = this.clock.getDelta();
        this.simulationTime += deltaTime;

        this.solarSystem.update(this.simulationTime);
        this.sceneManager.render();
    }

}