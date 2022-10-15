'use strict';

// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue Class
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

// Animal Shelter Class


class AnimalShelter {
  constructor() {
    this.primary = new Queue();
    this.secondary = new Queue();
  }

  enqueue(animal) {

    if (animal !== 'Cat' || animal !== 'Dog') {
      return null;

    } else {
      let newNode = new Node(animal);

      if (this.primary.front) {
        this.primary.back.next = newNode;
      } else {
        this.primary.front = newNode;
      }
      this.primary.back = newNode;
    }
  }


  dequeue(preference) {
    if (this.secondary.front && this.secondary.front.value === preference) {
      let pet = this.secondary.front.value;
      this.secondary.front = this.secondary.front.next;

      if (this.secondary.front === null) {
        this.secondary.back = null;
      }
      return pet;

    } else {
      if (this.primary.front === null) {
        return 'no animals match the preference';

      } else {
        while (this.primary.front.next && this.primary.front.value !== preference) {
          this.secondary.enqueue(this.primary.dequeue());
        }
        let pet = this.primary.front.value;
        this.primary.front = this.primary.front.next;
        if (this.primary.front === null) {
          this.primary.back = null;
          return pet;
        }
        if (this.primary.front === null) {
          return 'no animals match the preference';
        }
      }
    }
  }
}


// let animalShelter = new AnimalShelter();

// console.log(animalShelter);

// animalShelter.primary.enqueue('Cat');
// animalShelter.primary.enqueue('Dog');
// animalShelter.primary.enqueue('Cat');
// animalShelter.primary.enqueue('Cat');
// animalShelter.primary.enqueue('Cat');
// animalShelter.primary.enqueue('Dog');

// animalShelter.secondary.enqueue('Dog');

// console.log('============', animalShelter.dequeue('Dog'));
// console.log('+++++++++++++', animalShelter.primary);
// console.log('_____________', animalShelter.secondary);

// console.log('ROUND TWO');
// console.log('============', animalShelter.dequeue('Dog'));
// console.log('+++++++++++++', animalShelter.primary);
// console.log('_____________', animalShelter.secondary);

// console.log('============', animalShelter.dequeue('Dog'));
// console.log('+++++++++++++', animalShelter.primary);
// console.log('_____________', animalShelter.secondary);

module.exports = (AnimalShelter, Node, Queue);

