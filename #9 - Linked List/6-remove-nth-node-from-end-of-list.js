// remove the nth node from the end of the list

var removeNthFromEnd = function(head, n){
  let slow = head;
  let fast = head;

  for(i=0;i<n;i++){
    fast = fast.next;
  }

  if(!fast){
    return head.next;
  }

  while(fast.next){
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
}