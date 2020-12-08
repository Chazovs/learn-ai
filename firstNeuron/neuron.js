export default class Neuron {

    /**
     * стартовый вес
     *
     * @type {number}
     */
    weight = 0.5;

    lastError;

    smoothing = 0.00001;

    /**
     * функция активации
     *
     * @param km
     * @returns {number}
     */
    processingData(km) {
        return this.weight * km;
    }

    /**
     *
     * @param input - введенные данные (километры)
     * @param expectedResult - желаемый результат (мили)
     */
    train(input, expectedResult) {
        let actualResult = input * this.weight;
        this.lastError   = expectedResult - actualResult;
        let correction   = (this.lastError / actualResult) * this.smoothing;
        this.weight += correction;
    }
}


