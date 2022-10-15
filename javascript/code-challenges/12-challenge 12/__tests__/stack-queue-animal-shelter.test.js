'use strict';

const {Node, Queue, AnimalShelter} = require('../stack-queue-animal-shelter');

describe('Validate AnimalShelter', () => {

  it('Returns the oldest animal in the queue', () => {
    let animalShelter = new AnimalShelter();

    animalShelter.primary.enqueue('Cat');
    animalShelter.primary.enqueue('Dog');
    animalShelter.primary.enqueue('Dog');
    animalShelter.primary.enqueue('Cat');

    animalShelter.secondary.enqueue('Dog');

    let test = animalShelter.dequeue('Dog');

    expect(test).toBe(true);
  });


});
