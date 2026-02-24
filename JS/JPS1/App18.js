function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    let current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

let root = buildTree([3,9,20,null,null,15,7]);

console.log(levelOrd(root));