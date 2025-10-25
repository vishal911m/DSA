// code to delete node 5
// Delete node in a linked list

var deleteNode = function(node){
  node.val = node.next.val; // 4 -> 5 -> 1-> 9  goes to 4 -> 1 -> 1-> 9
  node.next = node.next.next; // 4 -> 1 -> 1-> 9 goes to 4 -> 1-> 9
}