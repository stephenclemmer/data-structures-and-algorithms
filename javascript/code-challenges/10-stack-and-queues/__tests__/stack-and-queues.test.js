'use strict';

const {Node, Stack, Queue} = require('../stack-and-queues');

describe('Stack and Queue', () => {

  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(5);

    expect(stack.top.value).toBe(5);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);

    expect(stack.top.value).toBe(10);
    expect(stack.top.next.value).toBe(5);
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    let answer = stack.pop();

    expect(answer).toEqual(10);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toEqual(null);
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    let answer = stack.peek();

    expect(answer).toEqual(15);
  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();

    expect(stack).toBeInstanceOf(Stack);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    let peeked = stack.peek();
    let popped = stack.pop();

    expect(peeked).toBe('this stack is empty');
    expect(popped).toBe('this stack is empty');
  });

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(10);

    expect(queue.front.value).toBe(10);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);

    expect(queue.front.value).toBe(10);
    expect(queue.front.next.value).toBe(15);
    expect(queue.back.value).toBe(20);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    let answer = queue.dequeue();

    expect(answer).toEqual(10);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    let answer = queue.peek();

    expect(answer).toEqual(10);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toEqual(null);
    expect(queue.back.next).toEqual(null);
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue).toBeInstanceOf(Queue);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    let peeked = queue.peek();
    let dequeued = queue.dequeue();

    expect(peeked).toBe('this queue is empty');
    expect(dequeued).toBe('this queue is empty');
  });

});
