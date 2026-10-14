import {Sun} from '../bodies/Sun.js'
import {Planet} from '../bodies/Planet.js'

export class SolarSystem {
    constructor(scene) {
        this.sun = new Sun();

        this.planet = new Planet({
            radius: 0.45,
            color: 0xff9b4b,
            orbit: {
                a: 10,
                b: 9.8,
                period: 30,
            },
        });

        this.planet2 = new Planet({
            radius: 0.6,
            color: 0x4b9bff,
            orbit: {
                a: 24,
                b: 20,
                period: 20,
            },
        });
        
        this.sun.addTo(scene);
        this.planet.addTo(scene);
        this.planet2.addTo(scene);
    }
    
    update(simulationTime) {
        this.planet.update(simulationTime);
        this.planet2.update(simulationTime);
    }
}