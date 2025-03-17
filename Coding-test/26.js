const preorder = (nodes, index) => {
  if (index < nodes.length) {
    let result = `${nodes[index]}`;

    const leftNode = index * 2 + 1;
    const rightNode = index * 2 + 2;

    result += preorder(nodes, leftNode);
    result += preorder(nodes, rightNode);

    return result;
  }
  return "";
};

const inorder = (nodes, index) => {
  const leftNode = index * 2 + 1;
  const rightNode = index * 2 + 2;
  let result = "";

  if (index < nodes.length) {
    result += inorder(nodes, leftNode);
    result += nodes[index];
    result += inorder(nodes, rightNode);

    return result;
  }

  return "";
};

const postorder = (nodes, index) => {
  const leftNode = index * 2 + 1;
  const rightNode = index * 2 + 2;

  let result = "";

  if (index < nodes.length) {
    result += postorder(nodes, leftNode);
    result += postorder(nodes, rightNode);
    result += nodes[index];

    return result;
  }

  return "";
};

const solution = (input) => {
  let result = [];

  result.push(preorder(input, 0));
  result.push(inorder(input, 0));
  result.push(postorder(input, 0));
  return result;
};

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
