'use strict';

const {Node, LinkedList, zipNode, zipLists} = require('../linked-list-zip');

describe('zipLists', () => {

  it('Returns a zipped list if both of the lists are the same length', () => {

    let listOne = new LinkedList;
    let listTwo = new LinkedList;

    listOne.insert(1);
    listOne.append(3);
    listOne.append(5);

    listTwo.insert(2);
    listTwo.append(4);
    listTwo.append(6);

    let zipped = zipLists(listOne, listTwo);

    expect(zipped).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

  it('Returns a zipped list if the second list is longer than the first length', () => {

    let listOne = new LinkedList;
    let listTwo = new LinkedList;

    listOne.insert(1);
    listOne.append(3);
    listOne.append(5);

    listTwo.insert(2);
    listTwo.append(4);
    listTwo.append(6);
    listTwo.append(7);
    listTwo.append(8);
    listTwo.append(9);

    let zipped = zipLists(listOne, listTwo);

    expect(zipped).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> { 9 } -> NULL');
  });

  it('Returns a zipped list if the first list is longer than the second', () => {

    let listOne = new LinkedList;
    let listTwo = new LinkedList;

    listOne.insert(1);
    listOne.append(3);
    listOne.append(5);
    listOne.append(7);
    listOne.append(8);
    listOne.append(9);

    listTwo.insert(2);
    listTwo.append(4);
    listTwo.append(6);

    let zipped = zipLists(listOne, listTwo);

    expect(zipped).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> { 9 } -> NULL');
  });

  it('Returns a zipped list if one of the lists is empty', () => {

    let listOne = new LinkedList;
    let listTwo = new LinkedList;

    listOne.insert(1);
    listOne.append(2);
    listOne.append(3);
    listOne.append(4);
    listOne.append(5);

    let zipped = zipLists(listOne, listTwo);

    expect(zipped).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });

});

