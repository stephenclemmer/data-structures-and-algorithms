'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addNode(value) {
    this._adjacencyList.set(value, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Vertices');
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNodes() {
    return this._adjacencyList;
  }

  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex');
    }

    return [...this._adjacencyList.get(vertex)];
  }

  size() {
    return this._adjacencyList.size;
  }

  breadthFirst(startNode) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
  }

  businessTrip(graph, arr) {
    let total = 0;
    let result = true;
    for (let i = 0; i < arr.length; i++) {
      let neighbors = graph.getNeighbors(arr[i]);
      if (neighbors.length === 0) {
        result = false;
        break;
      }
      for (let j = 0; j < neighbors.length; j++) {
        if (neighbors[j].vertex === arr[i + 1]) {
          total += neighbors[j].weight;
          break;
        }
      }
    }
    return [result, total];
  }
}


// depthFirst(startNode) {
//   const visitedNodes = new Set();
//   const _traverseNeighbors = (vertex) => {
//     if (!vertex) {
//       return;
//     }
//     visitedNodes.add(vertex);
//     const neighbors = this.getNeighbors(vertex);
//     for (let neighbor of neighbors) {
//       const neighborNode = neighbor.vertex;
//       if (visitedNodes.has(neighborNode)) {
//         continue;
//       } else {
//         _traverseNeighbors(neighborNode);
//       }
//     }
//   };
// }


module.exports = { Vertex, Edge, Graph };
