function validPath(n, edges, source, destination) {
    const graph = buildGraph(n, edges);
    const visited = new Set();
    return dfs(graph, source, destination, visited);
  }
  
  function buildGraph(n, edges) {
    const graph = Array.from({ length: n }, () => []);
  
    for (let [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
  
    return graph;
  }
  
  function dfs(graph, current, destination, visited) {
    if (current === destination) {
      return true;
    }
  
    visited.add(current);
  
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        if (dfs(graph, neighbor, destination, visited)) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  // Example usage
  const n = 6;
  const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
  const source = 0;
  const destination = 5;
  
  console.log(validPath(n, edges, source, destination)); // Output: false
  