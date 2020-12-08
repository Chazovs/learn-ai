/**
 * видит линии
 */
export default class NeuronB {
    activate(x, y, z) {
        return x === true
            && y === true
            && z === true;
    }
}
