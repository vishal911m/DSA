// Ques 1 : Given the head of a singly linked list, return true if it is
// a palindrome or false otherwise

// Input: head = [1,2,2,1]      ----->>>>>      Output: true;
// Input: head = [1,2]          ----->>>>>      Output: false;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var isPalindrome = function (head) {
  let string1 = "";
  let string2 = "";
  let node = head;

  while (node != null) {
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string2}`;
    node = node.next;
  }
  return string1 === string2;
};

// ###############################################################################################################################################
// ChatGPT code with console logs
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Helper function to build a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

var isPalindrome1 = function (head) {
  console.log("🟢 isPalindrome() called");

  // Step 1: Initialize two empty strings
  let string1 = "";
  let string2 = "";
  let node = head;

  console.log("🔸 Starting traversal of linked list...");

  // Step 2: Traverse the linked list
  while (node != null) {
    console.log(`\n-->Visiting node with value: ${node.val}`);

    // string1 builds the list in forward order
    string1 = `${string1}${node.val}`;
    console.log(`   ➡️ string1 (forward so far): ${string1}`);

    // string2 builds the list in reverse order
    string2 = `${node.val}${string2}`;
    console.log(`   ⬅️ string2 (reverse so far): ${string2}`);

    // Move to the next node
    node = node.next;
  }

  // Step 3: Compare both strings
  console.log("\nTraversal finished");
  console.log(`string1 (forward): ${string1}`);
  console.log(`string2 (reverse): ${string2}`);

  const result = string1 === string2;
  console.log(`✅ Is Palindrome? ${result}`);

  // Step 4: Return true or false
  return result;
};

const head = createLinkedList([2, 0, 0, 2]);
// isPalindrome1(head);

// ##########################################################################################################################################

const isPalindrome2 = function(head){
  let string1 = "";
  let string2 = "";

  let node = head;

  while(node!==null){
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string2}`;
    node = node.next;
  }

  return string1 === string2;
}

const head2 = createLinkedList([2,0,0,3]);
console.log(isPalindrome2(head2));