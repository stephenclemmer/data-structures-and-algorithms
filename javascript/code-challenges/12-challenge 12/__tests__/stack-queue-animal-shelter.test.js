'use strict';

const {Node, Queue, AnimalShelter} = require('../stack-queue-animal-shelter');

describe('Validate AnimalShelter', () => {

  it('Returns the oldest animal in the queue', () => {
    let animalShelter = new AnimalShelter();

    animalShelter.primary.enqueue('Cat');
    animalShelter.primary.enqueue('Dog');
    animalShelter.primary.enqueue('Dog');

    animalShelter.secondary.enqueue('Dog');

    let test = animalShelter.dequeue('Dog');
    let test2 = animalShelter.primary.front.value;

    expect(test).toEqual('Dog');
    expect(test2).toEqual('Cat');
  });

  it('Returns the desired type of animal from the queue', () => {
    let animalShelter = new AnimalShelter();

    animalShelter.primary.enqueue('Dog');
    animalShelter.primary.enqueue('Dog');
    animalShelter.primary.enqueue('Cat');

    animalShelter.secondary.enqueue('Dog');

    let test = animalShelter.dequeue('Cat');
    let test2 = animalShelter.primary.front;

    expect(test).toEqual('Cat');
    expect(test2).toEqual(null);
  });

  it('Returns null if the desired animal is not a Cat or Dog', () => {
    let animalShelter = new AnimalShelter();

    animalShelter.primary.enqueue('Dog');
    animalShelter.primary.enqueue('Dog');
    animalShelter.primary.enqueue('Cat');

    animalShelter.secondary.enqueue('Dog');

    let test = animalShelter.dequeue('Monkey');

    expect(test).toBe('Your options for pets are Dog, Cat, or noPreference');
  });

  it('Returns the oldest animal in the shelter if there is no preference stated.', () => {
    let animalShelter = new AnimalShelter();

    animalShelter.primary.enqueue('Cat');
    animalShelter.primary.enqueue('Dog');
    animalShelter.primary.enqueue('Dog');

    animalShelter.secondary.enqueue('Dog');

    let test = animalShelter.dequeue('noPreference');
    let test2 = animalShelter.dequeue('noPreference');
    let test3 = animalShelter.primary.front.value;
    let test4 = animalShelter.secondary.front;

    expect(test).toEqual('Dog');
    expect(test2).toEqual('Cat');
    expect(test3).toEqual('Dog');
    expect(test4).toBe(null);
  });

  it('Returns the string \'no animals are in waiting for homes\' if the user requests either a Dog, Cat or noPreference, but there are no animals in the shelter.', () => {
    let animalShelter = new AnimalShelter();

    let test = animalShelter.dequeue('Dog');
    let test2 = animalShelter.dequeue('Cat');
    let test3 = animalShelter.dequeue('noPreference');

    expect(test).toEqual('no animals are in waiting for homes');
    expect(test2).toEqual('no animals are in waiting for homes');
    expect(test3).toEqual('no animals are in waiting for homes');
  });

});
