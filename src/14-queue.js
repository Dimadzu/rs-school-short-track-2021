// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor(...items) {
    this.arritems = [];
    this.enqueue(...items);
  }

  get size() {
    return this.arritems.length;
  }

  enqueue(...items) {
    items.forEach((item) => this.arritems.push(item));
    return this.arritems;
  }

  dequeue(count = 1) {
    this.arritems.splice(this.arritems.length - 1, count);
    return this.arritems;
  }
}

module.exports = Queue;
