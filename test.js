function bfs(current, target) {
  const queue = [[current]];
  const visited = new Set();
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]; // right, left, down, up

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === target[0] && y === target[1]) {
      return path;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (!visited.has(`${nx},${ny}`)) {
        visited.add(`${nx},${ny}`);
        queue.push([...path, [nx, ny]]);
      }
    }
  }

  return []; // no path found
}

const current = [12, 40];
const target = [34, 23];

const result = bfs(current, target);

console.log(result);
