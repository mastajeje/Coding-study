class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill().map((_, i) => i);
  }

  find(x) {
    if (this.parent[x] === x) {
      return x;
    }

    return this.find(this.parent[x]);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return;

    this.parent[rootX] = rootY;
  }
}

function solution(n, costs) {
  var answer = 0;
  const uf = new UnionFind(n);
  costs.sort((a, b) => a[2] - b[2]);

  for (const [x, y, cost] of costs) {
    if (uf.find(x) === uf.find(y)) continue;

    uf.union(x, y);
    answer += cost;
  }

  return answer;
}
