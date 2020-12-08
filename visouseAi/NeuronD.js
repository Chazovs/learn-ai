/**
 * видит фигуры
 */
export default class NeuronD {

    /**
     * необходимые признаки
     * @type {[]}
     */
    input = [];

    /**
     * конечное значение
     * @type {number}
     */
    exceptedResult;

    /**
     * вес
     * @type {number}
     */
    weight;

    /**
     *   определяем число.
     *
     * @param input
     * @param exceptedResult
     * @param weight
     */
    constructor(input, exceptedResult, weight) {
        this.input          = input;
        this.exceptedResult = exceptedResult;
        this.weight         = weight;
    }

    activate(x, y) {
       //TODO
    }
}
