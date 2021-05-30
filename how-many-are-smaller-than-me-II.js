var ans = [];

var Node = function (v, s) {
  this.dup = 1;
  this.val = v;
  this.sum = s;
  this.right = null;
  this.left = null;
}

function insert(num, node, ans, i, preSum) {
  if (node === null) {
    node = new Node(num, 0);
    ans[i] = preSum;
  }
  else if (node.val == num) {
    node.dup++;
    ans[i] = preSum + node.sum;
  }
  else if (node.val > num) {
    node.sum++;
    node.left = insert(num, node.left, ans, i, preSum);
  }
  else {
    node.right = insert(num, node.right, ans, i, preSum + node.dup + node.sum);
  }

  return node;
}

function smaller(arr) {

  ans = [];
  root = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    root = insert(arr[i], root, ans, i, 0);
  }

  return ans;
}

console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);