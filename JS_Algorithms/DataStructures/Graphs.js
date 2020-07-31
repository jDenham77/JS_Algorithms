/**GRAPHS
 * - Useful in todays world. Used in Netflix targeting movies to you, ADS, social marketing
 * - Graph data structure consists of a finite set of verticies or NODES or
 *  points, together with a set of unordered pairs(CONNECTIONS) of these verticies for an
 *  undirected graph or a set of ordered pairs for a directed graph.
 * GRAPH = NODES + CONNECTIONS:
 * - Used ALL OVER THE PLACE
 * 1. Social Media for connections of friends or a social network. Storing friendships
 *  and names in there.
 * 2. Wikipedia also has this when the pages are linked together to one another
 * 3. Google Maps too! Many different routes but it calculates the shortest paths
 *  or other variables.
 * 4. Recommendation Engines, frequently bought with...
 * 5. NODES WITH CONNECTIONS; FREEFORM
 * TYPES OF GRAPHS:
 * (Vertex = Node)
 * Edge = Connection between the Nodes
 *   - Weighted & unweighted = *values assigned to distances between verticies.
 *   - Directed / Undirected = *directions assigned to distances beteen verticies.
 * 1. Undirected graph - No direction to edges, 2 way connections. FACEBOOK
 * 2. Directed graph - Represented with arrows which allows it to move only one way. INSTAGRAM
 * 3. Weighted grap - When we assign values to edges it becomes a weighted graph
 * 4. Unweighted graph - Each connection between Nodes has NO value associated with it
 * REPRESENTING A GRAPH:
 * 1. Adjency Matrix - 2D structure usually nested with arrays. Store info with rows and columns
 *  it uses 0 for no connection 1 for a connection, or true false, boolean if there's a connection.
 * 2. Adjency List - You look at the index to ee if there's a connection and if there is then
 * inside there index are the values or connections.
 */

//Undirected Graph (A -> B && B -> A)
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
