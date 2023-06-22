function allPathsSourceTarget(graph) {
    const paths = [];
    const target = graph.length - 1;
    const path = [0];
    
    dfs(graph, 0, target, path, paths);
  
    return paths;
  }
  
  function dfs(graph, node, target, path, paths) {
    if (node === target) {
      paths.push([...path]);
      return;
    }
  
    for (let neighbor of graph[node]) {
      path.push(neighbor);
      dfs(graph, neighbor, target, path, paths);
      path.pop();
    }
  }
  
  // Example usage
  const graph = [[1, 2], [3], [3], []];
  
  console.log(allPathsSourceTarget(graph));
  // Output: [[0, 1, 3], [0, 2, 3]]
  