import { EllipseCurve, error, Vector3 } from 'three';

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {boolean} cc
 * @param {number} d
 * @param {string} focus
 */
export function createOrbit(a, b, cc, d, focus) {

    // Distance from the ellipse center to either focus
    // Formerly c = Math.sqrt(a*a-b*b)
    let c1 = 0
    if(focus === "middle") {
        c1 = 0;
    }else if(focus === "focus+") {
        c1 = Math.sqrt(a*a - b*b);
    }else if(focus === "focus-") {
        c1 = -Math.sqrt(a*a-b*b);
    }else {
        throw new Error('Invalid Midpoint, Try "middle", "focus+" or "focus-"');
    }

    let c2 = 0
    if(focus === "middle") {
        c2 = 0;
    }else if(focus === "focus+") {
        c2 = Math.sqrt(a*a - b*b);
    }else if(focus === "focus-") {
        c2 = -Math.sqrt(a*a-b*b);
    }


    //Move Ellipse so Sun is at focus. (Sun is positioned at 0, 0)
    return new EllipseCurve(
        -c1 * Math.cos(d * (Math.PI / 180)), -c2 * Math.sin(d * (Math.PI / 180)), //Center of the ellipse
        a, b, //Major and Minor Semi-axes
        0, 2 * Math.PI, //Start angle and End Angle
        cc, //CounterClockwise
        d * (Math.PI / 180)
    );
}

/**
 * 
 * @param {number} time 
 * @param {number} period 
 * @param {EllipseCurve} curve
 */
export function positionAtTime(time, period, curve) {

    const progress = (time / period) - Math.floor(time / period);

    const point = curve.getPointAt(progress);

    return new Vector3(point.x, 0, point.y);
}