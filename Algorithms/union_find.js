class UnionFind {
  constructor(size) {
    this.parent = Array(size)
      .fill()
      .map((_, i) => i);
  }

  // returns the root of the set containing x
  find(x) {
    if (this.parent[x] === x) {
      return x;
    }
    // Otherwise, recursively find the root
    return this.find(this.parent[x]);
  }

  union(x, y) {
    // Find root of the sets containing x and y
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    // Make rootY the parent of rootX
    this.parent[rootX] = rootY;
  }
}

const hasCycle = (edges, n) => {
  const uf = new UnionFind(n);

  for (const [u, v] of edges) {
    // If u and v are already in the same set, adding edge (u,v) creates a cycle
    if (uf.find(u) === uf.find(v)) {
      return true;
    }
    // Otherwise, union the sets containing u and v
    uf.union(u, v);
  }

  return false;
};

console.log(
  hasCycle(
    [
      [0, 1],
      [0, 2],
      [2, 3],
    ],
    4
  )
);
