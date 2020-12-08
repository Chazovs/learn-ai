import NeuronLine from "./NeuronLine.js";



export default class Ai {

    /**
     * цифра 7
     */
    inputData = [
        ['_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_'],
        ['X', 'X', 'X', '_', 'X'],
        ['_', '_', '_', '_', 'X'],
        ['_', '_', '_', '_', 'X'],
        ['_', '_', '_', '_', 'X'],
        ['_', '_', '_', '_', 'X']
    ];

    /**
     *массив весов строк
     * @type {[]}
     */
    rowWeight = [];


    /**
     * массив весов столбцов
     * @type {[]}
     */
    columnWeight = [];

    /**
     * колонки из inputData
     */
    column = [];
    pixelWeight = 1;



    execute() {
       this.getLineCost();
       this.getColumnCost();
console.log(this.rowWeight)
console.log(this.columnWeight)
       /* /!** вычисляем углы **!/
        this.rowWeight.forEach(
            (value, index, array) => {
                /!** если стоимость линии выше стоимости одной закрашенной клетки, то приступаем к обработке *!/
                if (value > this.pixelWeight) {
                    this.columnWeight.forEach(

                        getAngelsCost

                    )
                }
            }
        )*/
    }

    /**
     * Получить соимость всех линий
     */
    getLineCost() {
        /**
         * ценность линий
         */
        for (let j = 0; j < this.inputData.length; j++) {
            let neuron        = new NeuronLine(this.pixelWeight);
            this.rowWeight[j] = neuron.execute(this.inputData[j]);

            this.inputData[j].forEach((value, index, array) => {

                if (j === 0) {
                    this.column[index] = [];
                }


                this.column[index][j] = value;
            })
        }

    }

    /**
     * получить ценность столбцов
     */
    getColumnCost() {

        for (let j = 0; j < this.column.length; j++) {
            let neuron        = new NeuronLine(this.pixelWeight);
            this.columnWeight[j] = neuron.execute(this.column[j]);
        }
    }
}



