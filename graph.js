// Isabel Ojeda
// Activity 4

<<<<<<< HEAD
class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addNode(n) {
      if (!this.adjacencyList.has(n)) {
        this.adjacencyList.set(n, []);
      }
    }
    // n1 -> n2
    addEdge(n1, n2) {
      if (!this.adjacencyList.has(n1)) {
        this.addNode(n1);
      }
      if (!this.adjacencyList.has(n2)) {
        this.addNode(n2);
      }
  
      this.adjacencyList.get(n1).push(n2);    
    }
  
    dfs(startNode) {
      // Initializes relevant data structures
      let stack = []  // a stack initialized with the startNode
      let visited = new Set()  // a set that tracks nodes already visited
      let results = []  // the output to be returned
  
      stack.push(startNode);
      // iterate over each node to be visited (in the stack)
      while(stack.length != 0){
  
        // pop node from the stack
        let current = stack.pop();
        // check if node is visited
        if(!visited.has(current)){
          // add node to the output
          results.push(current);
          // mark node as visited
          visited.add(current);
          // traverse children nodes
          let children = this.adjacencyList.get(current);
          for(let i = children.length - 1; i >= 0 ; i--){
            stack.push(children[i]);
          }
        }
      }
      // return the results (list of nodes)
      return results;
    }
=======
const graph = {
    adjacencyList: {}, 
    
    addNode: function(n) {
>>>>>>> f555b486d3a3612cc53703d3c065d02338dda838

    // activity 5 
    bfs(startNode) { // fifo (level by level)
        // queue = in line to be visited 
        let queue = [];
        // visited set 
        let visited = new Set();
        let results = []
        // push first node 
        queue.push(startNode); 
        visited.add(startNode); 
        // pop from queue and mark as visited, add adjacent nodes to the queue
        // pop next node from the queue, mark as visited and add adjacent nodes
        // nothing is left in the queue = algorithm is finished 
        while (queue.length > 0) {
            let current = queue.shift(); 
            results.push(current); 
            let children = this.adjacencyList.get(current);
            for(let i = 0; i < children.length; i++){
                if (!visited.has(children[i])) {
                    queue.push(children[i]);
                    visited.add(children[i]); 
                }
            } 
        }
    return results; 
    }


<<<<<<< HEAD
=======
    } 
}; 
>>>>>>> f555b486d3a3612cc53703d3c065d02338dda838
