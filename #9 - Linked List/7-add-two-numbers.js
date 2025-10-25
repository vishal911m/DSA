// You are given two non empty linked list , representing two non-negative integers. The digits are stored in reverse order, 
// and each of the node contains a single digit. Add the two numbers and return the sum as a linked list. You may assume that the 
// two numbers do not contain leading zeros, except the number 0 itself 

var addTwoNumbers = function(l1, l2){
  var dummy = new ListNode(0);
  var current = dummy;
  var carry = 0;

  while(l1!==null || l2!==null || carry>0){
    var val1 = l1 ? l1.val : 0;
    var val2 = l2 ? l2.val : 0;

    var sum = val1+val2+carry;
    carry = Math.floor(sum/10);
    sum %= 10;

    current.next = new ListNode(sum);
    current = current.next;

    if(l1) l1=l1.next;
    if(l2) l2=l2.next;
  }

  return dummy.next;
}

// example: 2 -> 4 -> 3 + 5 -> 6 -> 4 
// result: 7 -> 0 -> 8
