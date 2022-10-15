'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    if (this.front === null) {
      return 'this queue is empty';
    } else {
      let temp = new Node();
      temp.next = this.front;
      this.front = this.front.next;
      temp.next.next = null;
      return temp.next.value;
    }
  }

  peek() {
    if (this.front === null) {
      return 'this queue is empty';
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }

}


class AnimalShelter {
  constructor(){
    this.primary = new Queue();
    this.secondary = new Queue();
  }

  enqueue(animal) {

    if (animal !== 'Cat' || animal !== 'Dog'){
      return null;
    } else {


      let newNode = new Node(animal);
      // console.log(newNode);

      if (this.primary.front) {
        this.primary.back.next = newNode;
      } else {
        this.primary.front = newNode;
      }
      this.primary.back = newNode;
    }
  }


  dequeue(preference){
    console.log('+++++++++++++', preference);
    // console.log(this.secondary.front.value);
    if (this.secondary.front.value === preference){

      console.log('==============', this.secondary.front.value);
    } else {
      // console.log(preference);
      while(this.secondary.front.value !== preference){
        // console.log(this.primary.dequeue());
        this.secondary.enqueue(this.primary.dequeue());
        this.primary.front = this.primary.front.next;
      }
      return this.secondary.front;
    }
    // console.log(this.secondary.front);
  }
}

// let animalShelter = new AnimalShelter();

// animalShelter.primary.enqueue('Cat');
// animalShelter.primary.enqueue('Dog');
// animalShelter.primary.enqueue('Dog');
// animalShelter.primary.enqueue('Cat');

// animalShelter.secondary.enqueue('Dog');

// console.log(animalShelter.secondary);

// animalShelter.dequeue('Cat');
// console.log(animalShelter.primary);

module.exports = (AnimalShelter, Node, Queue);

