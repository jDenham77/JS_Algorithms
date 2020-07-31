/**
 * DIJKSTRA'S ALGORITHM
 * - Searches across a weighted graph and uses a priority queue.
 * - Most famous algorithm and algs use it. It finds the shortest path
 *  between two verticies on a graph.
 * - DIJKSTRA was a Dutch programmer, physicist. He helped to advance computer
 *  science from an art to an academic discipline.
 * - Shortest path in a graph between two points!
 */
class PriorityQueue {
    //it's unoptomized because it's not using a binary heap bec it's sorting every time. 
    //we wanta binary heap.
  constructor() {
    this.values = [];
    // O(n log n) BASIC PRIORITY QUEUE to give us the smallest priority first
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
var q = new PriorityQueue();


class weightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  //Checks if theres a vertex already in the adjacency list if not, then it adds it in.
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;

    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //as long as theres something to visit.
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //we are done
        //build path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distance[smallest] + nextNode.weight; // D + E
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority  queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
