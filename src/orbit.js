import { EllipseCurve, Vector3 } from "three";

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
export function createOrbit(a, b) {

    // Distance from the ellipse center to either focus
    const c = Math.sqrt(a * a - b * b);

    //Move Ellipse so Sun is at focus. (Sun is positioned at 0, 0)
    return new EllipseCurve(
        -c, 0, //Center of the ellipse
        a, b, //Major and Minor Semi-axes
        0, 2 * Math.PI, //Start angle and End Angle
        false, //CounterClockwise
        0
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