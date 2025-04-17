class Node {
  constructor(info, num, left = null, right = null) {
    this.info = info;
    this.left = left;
    this.right = right;
    this.num = num;
  }

  hasLeft() {
    return this.left !== null;
  }

  hasRight() {
    return this.right !== null;
  }
}

const makeBT = (nodeInfo) => {
  const nodes = Array.from({ length: nodeInfo.length }, (_, i) => i + 1);

  nodes.sort((a, b) => {
    const [ax, ay] = nodeInfo[a - 1];
    const [bx, by] = nodeInfo[b - 1];
    return ay === by ? ax - bx : by - ay;
  });

  let root = null;
  for (const node of nodes) {
    if (!root) {
      root = new Node(nodeInfo[node - 1], node);
    } else {
      let parent = root;

      const child = new Node(nodeInfo[node - 1], node);

      while (true) {
        if (child.info[0] < parent.info[0]) {
          if (parent.hasLeft()) {
            parent = parent.left;
            continue;
          }
          parent.left = child;
          break;
        } else {
          if (parent.hasRight()) {
            parent = parent.right;
            continue;
          }
          parent.right = child;
          break;
        }
      }
    }
  }
  return root;
};

const preorder = (node, result = []) => {
  if (!node) return result;

  result.push(node.num);

  if (node.hasLeft()) preorder(node.left, result);

  if (node.hasRight()) preorder(node.right, result);

  return result;
};

const postorder = (node, result = []) => {
  if (!node) return result;

  if (node.hasLeft()) postorder(node.left, result);
  if (node.hasRight()) postorder(node.right, result);

  result.push(node.num);

  return result;
};

function solution(nodeinfo) {
  const root = makeBT(nodeinfo);

  const answer = [];
  const pre = preorder(root);
  const post = postorder(root);

  answer.push(pre);
  answer.push(post);
  return answer;
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
//expected: [[7,4,6,9,1,8,5,2,3],[9,6,5,8,1,4,3,2,7]]
