class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index1 = 0;
    this.index2 = 0;
  }
  enqueue(value){
    this.index2++;
    this.storage[this.index2] = value;
  }

  dequeue() {
    if (this.size() === 0) {
      return;
    }
    else {
      let storedValue = this.storage[this.index1];
      delete this.storage[this.index1];
      this.index2--;

      return storedValue;
    }
  }
  size() {
    return (this.index2 - this.index1);
  }
}
