'use strict';
const { describe, it } = require('eslint/lib/rule-tester/rule-tester');
const { Graph, Vertex } = require('../../36-graph-breadth-first/graph-breadth-first.js');

describe('Graphs', () => {
  it('should traverse breadth first', () => {
    const graph = new Graph();
    const pandora = new Vertex('Pandora');
    const arendelle = new Vertex('Arendelle');
    const metroville = new Vertex('Metroville');
    const monstroplolis = new Vertex('Monstroplolis');
    const naboo = new Vertex('Naboo');
    const narnia = new Vertex('Narnia');
    graph.addNode(pandora);
    graph.addNode(arendelle);
    graph.addNode(metroville);
    graph.addNode(monstroplolis);
    graph.addNode(naboo);
    graph.addNode(narnia);
    graph.addEdge(pandora, arendelle);
    graph.addEdge(pandora, metroville);
    graph.addEdge(arendelle, metroville);
    graph.addEdge(arendelle, monstroplolis);
    graph.addEdge(metroville, monstroplolis);
    graph.addEdge(metroville, naboo);
    graph.addEdge(metroville, narnia);
    graph.addEdge(monstroplolis, naboo);
    graph.addEdge(naboo, narnia);

    expect(graph.breadthFirst(pandora)).toBe(['Pandora', 'Arendelle', 'Metroville', 'Monstroplolis', 'Naboo', 'Narnia']);
  });
});

