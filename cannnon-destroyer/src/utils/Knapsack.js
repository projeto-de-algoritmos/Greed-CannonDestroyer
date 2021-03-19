export default class Knapsack {
  constructor() {
    this.maxWeight = 0;
    this.weights = [];
    this.values = [];
    this.specifyValue = [];
    this.maxValue = 0;
    this.getMaxValue();
    this.getWeights();
    this.getValues();
    this.getSpecificValues();
  }
  getMaxValue() {
    this.maxWeight = Math.ceil(Math.random() * (100 - 2) + 2);
  }
  getWeights() {
    for (var i = 0; i < 3; i++)
      this.weights.push(
        Math.ceil(Math.random() * (this.maxWeight / 2 - 1) + 1)
      );
  }
  getValues() {
    for (var i = 0; i < 3; i++)
      this.values.push(Math.ceil(Math.random() * (300 - 1) + 1));
  }
  getSpecificValues() {
    for (var i = 0; i < 3; i++)
      this.specifyValue.push(Math.floor(this.values[i] / this.weights[i]));
  }
  getAnswer() {
    let orderedArray = this.specifyValue.sort((a, b) => b - a);
    console.log(orderedArray);
    let sumWeight = 0;
    orderedArray.forEach((item) => {
      var position = this.specifyValue.indexOf(item);
      if (sumWeight + this.weights[position] <= this.maxWeight) {
        sumWeight += this.weights[position];
        this.maxValue += this.values[position];
      }
    });
    console.log(`max:${this.maxWeight} actual:${sumWeight}`);
    return this.maxValue;
  }
}
