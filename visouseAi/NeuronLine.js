/**
 * видит линии
 */
export default class NeuronLine {
    /**
     * стоимость одного заполненного пикселя
     * @type {number}
     */
    pixelWeight;

    /** вес соприкосновения  с другим квадратом в строке */
    jointWeight = 0.2;

    input;

    /**
     * общая стоиомсть линии
     */
    lineCosts = [];

    /**
     *
     * @param pixelWeight
     */
    constructor(pixelWeight) {
        this.pixelWeight = pixelWeight;
    }

    /**
     * функция активации
     * @param input - одна линия изображения
     * @returns {[]}
     */
    execute(input) {
        let lineCostIndex = 0;
        this.lineCosts[lineCostIndex] = 0;

        input.forEach(
            (value, index) => {
                if (value !== '_') {
                    this.lineCosts[lineCostIndex] += this.pixelWeight;
                    if (input[index + 1] !== undefined && input[index + 1] !== '_') {
                        this.lineCosts[lineCostIndex] += this.jointWeight;
                    }
                }else if (input[index+1] !== undefined) {
                    lineCostIndex++;
                    this.lineCosts[lineCostIndex] = 0;
                }
            }
        )
        return  this.lineCosts;
    }

    /**
     * функция тренеровки
     */
    train(){

    }
}


