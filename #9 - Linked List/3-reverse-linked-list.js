// Ques 2 : Given the head of a singly linked list, reverse the list, and
// return the reversed list.

// Input: head = [1,2]      ----->>>>>      Output: [2,1];

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseList1 = (head) => {
  let prev = null;
  let current = head;
  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
};

// // ChatGPT code with console logs

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// // Helper function to create a linked list from an array
// function createLinkedList(arr) {
//   if (arr.length === 0) return null;

//   let head = new Node(arr[0]);
//   let current = head;

//   for (let i = 1; i < arr.length; i++) {
//     current.next = new Node(arr[i]);
//     current = current.next;
//   }

//   return head;
// }

// // Helper function to print the linked list
// function printLinkedList(head) {
//   let nodes = [];
//   let current = head;
//   while (current !== null) {
//     nodes.push(current.val);
//     current = current.next;
//   }
//   console.log(nodes.join(" -> ") + " -> null");
// }

// // Reverse linked list function with console logs
// var reverseList = (head) => {
//   console.log("🟢 reverseList() called");

//   let prev = null;
//   let current = head;
//   let step = 1;

//   console.log("🔸 Initial state:");
//   console.log(`prev: ${prev}, current: ${current ? current.val : null}`);

//   while (current !== null) {
//     console.log(`\n➡️ Step ${step++}:`);
//     console.log(`Current node value: ${current.val}`);

//     const nextNode = current.next;
//     console.log(`Next node value: ${nextNode ? nextNode.val : null}`);

//     current.next = prev;
//     console.log(
//       `Step1: Reversing link: now ${current.val}.next -> ${prev ? prev.val : null}`
//     );

//     prev = current;
//     current = nextNode;

//     console.log(`After move:`);
//     console.log(`  Step2: prev is now -> ${prev ? prev.val : null}`);
//     console.log(`  Step3: current is now -> ${current ? current.val : null}`);
//   }

//   console.log("\n✅ Reversal complete!");
//   console.log(`New head is node with value: ${prev ? prev.val : null}`);
//   return prev;
// };

// // Example usage
// const head = createLinkedList([1, 2, 3, 4]);

// console.log("Original linked list:");
// printLinkedList(head);

// const reversedHead = reverseList(head);

// console.log("\nReversed linked list:");
// printLinkedList(reversedHead);

// ##############################################################################################################################################

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Helper function to create a linked list from an array
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

// Helper function to print a full linked list from a head node
function printLinkedList(head) {
  let nodes = [];
  let current = head;
  while (current !== null) {
    nodes.push(current.val);
    current = current.next;
  }
  console.log(nodes.join(" -> ") + " -> null");
}

// Helper to print the current reversal state: reversed prefix | remaining suffix
function printReversalState(prev, current) {
  const prefix = [];
  let p = prev;
  while (p !== null) {
    prefix.push(p.val);
    p = p.next;
  }

  const suffix = [];
  let q = current;
  while (q !== null) {
    suffix.push(q.val);
    q = q.next;
  }

  const prefixStr = prefix.length ? prefix.join(" -> ") + " -> null" : "null";
  const suffixStr = suffix.length ? suffix.join(" -> ") + " -> null" : "null";

  console.log(`State: Reversed: ${prefixStr}  |  Remaining: ${suffixStr}`);
}

// Reverse linked list function with console logs after each iteration
// var reverseList = (head) => {
//   console.log("🟢 reverseList() called\n");

//   let prev = null;
//   let current = head;
//   let step = 1;

//   console.log("🔸 Initial state:");
//   printReversalState(prev, current);

//   while (current !== null) {
//     console.log(`\n➡️ Step ${step++}:`);
//     console.log(`Current node value: ${current.val}`);

//     const nextNode = current.next;
//     console.log(`   Stage 1: Next node value: ${nextNode ? nextNode.val : "null"}`);

//     // Reverse the link
//     current.next = prev;
//     console.log(`   Stage 2: Reversing link: now ${current.val}.next -> ${prev ? prev.val : "null"}`);

//     // Move pointers forward
//     prev = current;
//     console.log(`\n   Stage 3: prev: `, prev);
//     console.log(`   Stage 3: current: `, current);
//     current = nextNode;
//     console.log(`\n   Stage 4: prev: `, prev);
//     console.log(`   Stage 4: current: `, current);

//     // Print the full list state after this iteration
//     printReversalState(prev, current);
//   }

//   console.log("\n✅ Reversal complete!");
//   console.log(`New head is node with value: ${prev ? prev.val : "null"}`);
//   return prev;
// };

var reverseList = function(head){
  console.log(`reverseList() called`);
  var current = head;
  var prev = null;
  var step = 1;

  while(current !== null){
    console.log(`\n-->Step: ${step++}`);
    var nextNode = current.next;
    console.log(`   Stage1: Next node : ${nextNode ? nextNode.val : "null"}`);
    current.next = prev;
    console.log(`   Stage2: Reversing - ${current.val}.next -> ${prev ? prev.val : "null"}`);
    prev = current;
    console.log(`\n   Stage3: prev:`, prev);
    console.log(`   Stage3: current:`, current);
    current = nextNode;
    console.log(`\n   Stage4: prev:`, prev);
    console.log(`   Stage4: current:`, current);
    console.log(`Reversed list of the current iteration:`)
    printReversalState(prev, current);
  }
  return prev;
}

// Example usage
const head = createLinkedList([1, 2, 3, 4]);

console.log("Original linked list:");
printLinkedList(head);

const reversedHead = reverseList(head);

console.log("\nFinal Reversed linked list:");
printLinkedList(reversedHead);


