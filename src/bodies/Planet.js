import * as THREE from "three";
import { createOrbit, positionAtTime } from "../orbit.js"

export class Planet {
    constructor({
        radius = 0.45,
        color = 0x4b9bff,
        orbit
    }) {
        if (!orbit || orbit.period <= 0) {
            throw new Error("Planet requires a valid orbit period."); //Make sure the planet has a valid period. Throw error otherwise.
        }

        this.orbit = orbit;
        this.curve = createOrbit(orbit.a, orbit.b);

        const geometry = new THREE.SphereGeometry(
            radius, 32, 24 //Define the geometry that will end up as our sphere
        );

        const material = new THREE.MeshStandardMaterial({
            color,
            roughness: 0.8 // Make the material that our sphere will be
        });

        this.mesh = new THREE.Mesh(geometry, material) // Form the sphere mesh.

        const points = this.curve.getPoints(200).map(
            point => new THREE.Vector3(point.x, 0, point.y) // Get the points to draw the orbit
        );

        const geometryLine = new THREE.BufferGeometry().setFromPoints(points); // Create the line geometry

        const materialLine = new THREE.LineBasicMaterial({ //Give it a texture
            color: 0x65718c
        });

        this.orbitLine = new THREE.Line(
            geometryLine, materialLine //Make Orbit line
        );
    }

    addTo(scene) {
        scene.add(this.orbitLine); //Add orbit line to scene
        scene.add(this.mesh); //Add Mesh to scene
    }

    update(simulationTime) {
        const position = positionAtTime(
            simulationTime,
            this.orbit.period,
            this.curve
        ); //Solve for new position

        this.mesh.position.copy(position) //Set the planet to the new position
    }
}