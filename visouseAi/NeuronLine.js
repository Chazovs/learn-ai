/**
 * видит линии
 */
export default class NeuronLine {
    /**
     * стоимость одного заполненного пикселя
     * @type {number}
     */
    pixelWeight = 1;

    /** вес соприкосновения  с другим квадратом в строке */
    jointWeight = 0.2;

    input;

    /**
     * общая стоиомсть линии
     */
    lineCost = 0;

    /**
     * функция активации
     */
    execute(input) {
        console.log(input)
         input.forEach(
            (value, index) => {

                console.log('Значение '+value)
                console.log('Индекс'+index)
                if (value !== '_') {
                    this.lineCost += this.pixelWeight;

                    if (input[index - 1] !== undefined && input[index - 1] !== '_') {

                        this.lineCost += this.jointWeight;
                    }
                    if (input[index + 1] !== undefined && input[index + 1] !== '_') {
                        this.lineCost += this.jointWeight
                    }
                }
            }
        )
        console.log('ценность:' + this.lineCost);
        return  this.lineCost;
    }

    /**
     * функция тренеровки
     */
    train(){

    }
}


