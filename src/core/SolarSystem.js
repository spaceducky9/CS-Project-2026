import {Sun} from '../bodies/Sun.js'
import {Planet} from '../bodies/Planet.js'

export class SolarSystem {
    constructor(scene) {
        this.sun = new Sun();

        this.mercury = new Planet({
            radius: 0.2,
            color: 0x4b4b4b,
            orbit: {
                a: 4,
                b: 4,
                period: 15*0.241, //15 period = 1 year
                counterclockwise: false,
                direction: 90,
                
            },
            focusSetting: "middle",
        });

        this.venus = new Planet({
            radius: 0.5,
            color: 0xff9b4b,
            orbit: {
                a: 8,
                b: 8,
                period: 15*0.615,
                counterclockwise: false,
                direction: 90,
                
            },
            focusSetting: "middle",
        });

        this.earth = new Planet({
            radius: 0.5,
            color: 0x5fcfff,
            orbit: {
                a: 15,
                b: 15,
                period: 15,
                counterclockwise: false,
                direction: 60,
            },
            focusSetting: "focus+",
        });

        this.mars = new Planet({
            radius: 0.5,
            color: 0xff9b4b,
            orbit: {
                a: 20,
                b: 20,
                period: 11.23500,
                counterclockwise: false,
                direction: 90,
                
            },
            focusSetting: "middle",
        });
        
        this.sun.addTo(scene);
        this.mercury.addTo(scene);
        this.venus.addTo(scene);
        this.earth.addTo(scene);
    }
    
    update(simulationTime) {
        this.mercury.update(simulationTime);
        this.venus.update(simulationTime);
        this.earth.update(simulationTime);
    }
}