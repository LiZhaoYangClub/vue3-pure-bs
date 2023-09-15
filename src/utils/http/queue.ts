class TipQueue {
  queue: string[];
  constructor() {
    this.queue = [];
  }
  add(tip) {
    this.queue.push(tip);
  }
  has(tip) {
    return this.queue.indexOf(tip) > -1;
  }
  delete(tip) {
    const index = this.queue.indexOf(tip);
    if (index > -1) {
      this.queue.splice(index, 1);
    }
  }
}

export default TipQueue;
