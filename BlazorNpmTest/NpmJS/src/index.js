import TestCalc from "./lib/testCalc"
import moment from "moment"

export function sum(x, y) {
    const calc = new TestCalc();
    return calc.sum(x, y);
}

export function getCurrentTime() {
    return moment().format();
}