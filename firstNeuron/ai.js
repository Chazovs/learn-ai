import Neuron from "./neuron.js";

export default class Ai {

    trainData = [
        {
            'km':    100,
            'miles': 62.1371
        }
    ];

    exceptedValue = 0.001;

    execute() {
        let neuron = new Neuron();

        let i = 0;

        console.log(neuron.lastError);
        console.log(this.exceptedValue);

        do {
            i++;

            neuron.train(this.trainData[0].km, this.trainData[0].miles);

            console.log("Итерация " + i + " Ошибка: " + neuron.lastError);
        } while (neuron.lastError > this.exceptedValue || neuron.lastError < -this.exceptedValue);

        console.log("Нейронка считает, что в 100 километрах " + neuron.processingData(100) + " миль");
        console.log("Правильный ответ 62.1371");
    }
}