/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(...items) {
    this.itemsarr = [];
    if (items.length > 0) items.forEach((item) => this.itemsarr.push(item));
  }

  push(...items) {
    items.forEach((item) => this.itemsarr.push(item));
    return this.itemsarr;
  }

  pop(count = 0) {
    if (count === 0) return this.itemsarr.pop();
    return this.itemsarr.splice(-count, count);
  }

  peek() {
    return this.itemsarr[this.itemsarr.length - 1];
  }
}

module.exports = Stack;
