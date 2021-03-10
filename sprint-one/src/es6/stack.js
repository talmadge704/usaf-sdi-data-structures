class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.amount = 0;
  }
  push(value){
    this.amount++;
    this.storage[this.amount] = value;
  }
  pop(){
    if (this.amount === 0) {
    return;
    }
    else {
    let storedValue = this.storage[this.amount];
    delete this.storage[this.amount];
    this.amount--;
    return storedValue;
    }
  }
  size(){
    return this.amount;
  }
}