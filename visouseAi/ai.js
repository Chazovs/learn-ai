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


    execute() {
        /**
         * ценность линий
         */
        for (let j = 0; j < this.inputData.length; j++) {
            let neuron        = new NeuronLine();
            this.rowWeight[j] = neuron.execute(this.inputData[j]);

            this.inputData[j].forEach((value, index, array) => {

                if (j === 0) {
                    this.column[index] = [];
                }


                this.column[index][j] = value;
            })
        }
        /**
         * ценность столбцов
         */
        for (let j = 0; j < this.column.length; j++) {
            let neuron        = new NeuronLine();
            this.columnWeight[j] = neuron.execute(this.column[j]);
        }
    }
}

/*let x = [
    ['_', '_', 'X','_', '_', '_','_'],
    ['_', '_', 'X','_', '_', '_','_'],
    ['_', '_', 'X','_', '_', '_','_'],
    ['_', '_', '_','_', '_', '_','_'],
    ['_', '_', 'X','X', 'X', 'X','X']
]*/


