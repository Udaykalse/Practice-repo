var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    prev = curr;
    curr = next;
  }
  return prev;
};

console.log(reverseList([1,2,3,4,5]));
