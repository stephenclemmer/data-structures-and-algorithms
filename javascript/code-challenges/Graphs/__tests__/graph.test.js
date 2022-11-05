'use strict';
const { describe } = require('eslint/lib/rule-tester/rule-tester');
const { Graph, Vertex, Edge } = require('../graphs.js');

describe('Graphs', () => {
  it('should add a node to the graph', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    graph.addNode(ten);
    expect(graph.getNodes()).toEqual(new Map([[10, []]]));
  });

  it('should add a edge to the graph', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const two = new Vertex(2);
    graph.addNode(ten);
    graph.addNode(two);
    graph.addEdge(ten, two);
    expect(graph.getNodes()).toEqual(new Map([[10, [new Edge(2, 0)]], [2, []]]));
  });

  it('should return a collection of all nodes in the graph', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    graph.addNode(ten);
    graph.addNode(two);
    graph.addNode(six);
    expect(graph.getNodes()).toEqual(new Map([[10, []], [2, []], [6, []]]));
  });

  it('should return a collection of all nodes in the graph', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    graph.addNode(ten);
    graph.addNode(two);
    graph.addNode(six);
    graph.addEdge(ten, two);
    graph.addEdge(ten, six);
    expect(graph.getNeighbors(ten)).toEqual([new Edge(2, 0), new Edge(6, 0)]);
  });

  it('should return the size of the graph', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    graph.addNode(ten);
    graph.addNode(two);
    graph.addNode(six);
    graph.addEdge(ten, two);
    graph.addEdge(ten, six);
    expect(graph.size()).toEqual(3);
  });

  it('should return the size of the graph', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    graph.addNode(ten);
    graph.addNode(two);
    graph.addNode(six);
    graph.addEdge(ten, two);
    graph.addEdge(ten, six);
    expect(graph.breadthFirst(ten)).toEqual([10, 2, 6]);
  });
});
