class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;
  
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev;
  }
  
  // Example usage
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  
  const reversedHead = reverseLinkedList(head);
  
  // Print the reversed linked list
  let temp = reversedHead;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
  