class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function rotateLinkedList(head, k) {
    if (head === null || head.next === null || k === 0) {
      return head;
    }
  
    let current = head;
    let count = 1;
  
    while (count < k && current !== null) {
      current = current.next;
      count++;
    }
  
    if (current === null) {
      return head;
    }
  
    let kthNode = current;
  
    while (current.next !== null) {
      current = current.next;
    }
  
    current.next = head;
    head = kthNode.next;
    kthNode.next = null;
  
    return head;
  }
  
  // Example usage
  const head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(7);
  head.next.next.next = new Node(8);
  head.next.next.next.next = new Node(9);
  
  const rotatedHead = rotateLinkedList(head, 3);
  
  // Print the rotated linked list
  let temp = rotatedHead;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
  