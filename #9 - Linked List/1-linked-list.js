// Linked List in Javascript

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addFirst(data) {
//     const newNode = new Node(data);
//     newNode.next = this.head;
//     this.head = newNode;
//   }

//   addLast(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }

//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }

//     current.next = newNode;
//   }

//   size() {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   addAt(index, data) {
//     if (index < 0 || index > this.size()) {
//       console.error("Invalid Index");
//       return;
//     }

//     const newNode = new Node(data);
//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//       return;
//     }

//     let current = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       current = current.next;
//     }

//     newNode.next = current.next;
//     current.next = newNode;
//   }

//   removeTop() {
//     if (!this.head) {
//       return;
//     }

//     this.head = this.head.next;
//   }

//   removeLast() {
//     if (!this.head) {
//       return;
//     }

//     let current = this.head;
//     while (current.next.next) {
//       current = current.next;
//     }

//     current.next = null;
//   }

//   removeAt(index) {
//     if (index < 0 || index > this.size()) {
//       console.error("Invalid Index");
//       return;
//     }

//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }

//     let current = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       current = current.next;
//     }

//     if (current.next) {
//       current.next = current.next.next;
//     }
//   }

//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const linkedlist = new LinkedList();

// linkedlist.addFirst(5);
// linkedlist.addFirst(3);
// linkedlist.addFirst(8);
// linkedlist.addLast(6);

// linkedlist.removeTop();

// linkedlist.addAt(2, 8);

// linkedlist.removeLast();
// linkedlist.removeAt(2);

// linkedlist.print();
// console.log("size = " + linkedlist.size());

// #########################################################################################################################################

// // ChatGPT code with console logs to understand the functions
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() { this.head = null; }

//   addFirst(data) {
//     console.log("\naddFirst(", data, ")");
//     const newNode = new Node(data);
//     console.log("  Step 1: newNode:", newNode);
//     console.log("  Step 1: old head:", this.head);
//     newNode.next = this.head;            // step 1
//     console.log("  Step 2: newNode.next ->", newNode.next);
//     this.head = newNode;                 // step 2
//     console.log("  Step 3: new head:", this.head);
//   }

//   addLast(data) {
//     console.log("\n🟢 addLast(", data, ")");
//     const newNode = new Node(data);
//     console.log("   Step1: Created new node:", newNode);

//     // ✅ CASE 1: If the list is empty
//     if (!this.head) {
//       this.head = newNode;
//       console.log("   Step2: List was empty, new node becomes head:", this.head);
//       return;
//     }

//     // ✅ CASE 2: Traverse to the end
//     let current = this.head;
//     console.log("   Step3: Starting traversal from head:", current);

//     while (current.next) {
//       console.log("   Step3: current:", current.data, "→ next:", current.next.data);
//       current = current.next;
//     }

//     console.log("   Step4: Reached last node:", current.data);
//     current.next = newNode;
//     console.log("   Step4: Linked new node at the end:", current.next);
//   }
  
//   size() {
//     let count = 0;            // Step 1: Initialize a counter
//     let current = this.head;  // Step 2: Start from the head node

//     // console.log("\nStarting size() calculation...");
//     // console.log("Initial head:", current ? current.data : "null");

//     // Step 3: Traverse the list
//     while (current !== null) {
//       count++;  // Increment counter for each node
//       // console.log(`\n   Visited node ${count} with data:`, current.data);
//       current = current.next;  // Move to the next node
//       // console.log("   Moving to next node:", current ? current.data : "null");
//     }

//     // Step 4: Return total count
//     // console.log("\nTotal number of nodes in the list:", count);
//     return count;
//   }

//   addAt(index, data) {
//     console.log(`\n--> addAt(${index}, ${data}) called`);

//     // Step 1: Validate index
//     if (index < 0 || index > this.size()) {
//       console.error("❌ Invalid Index");
//       return;
//     }

//     // Step 2: Create a new node
//     const newNode = new Node(data);
//     console.log(`   Stage 1: Created new node with data: ${data} , newNode: `,newNode);

//     // Step 3: Handle case when inserting at the beginning (index = 0)
//     if (index === 0) {
//       console.log("   Stage 2: Inserting at the beginning...");
//       newNode.next = this.head; // new node points to the old head
//       this.head = newNode;      // new node becomes the new head
//       console.log("✅ Node inserted at index 0.");
//       return;
//     }

//     // Step 4: Traverse to (index - 1)
//     let current = this.head;
//     console.log("   Stage 2: Traversing the list to reach index:", index - 1);

//     for (let i = 0; i < index - 1; i++) {
//       console.log(`     ➡️ Step ${i}: Currently at node with data = ${current.data}`);
//       current = current.next;
//       // console.log(`     Current:`, current)
//     }

//     console.log(`   Stage 3: Reached node at position ${index - 1} with data: ${current.data}`);

//     // Step 5: Insert the new node between current and current.next
//     console.log(`   Stage 4: Linking new node between ${current.data} and ${current.next ? current.next.data : "null"}`);
//     newNode.next = current.next;  console.log(`   newNode.next= `,newNode.next); // new node points to current.next 
//     current.next = newNode; console.log(`   current.next= `,current.next) // current points to new node

//     console.log(`✅ Node with data ${data} inserted at index ${index}`);
//   }

//   removeTop() {
//     console.log("\n-->Removing top node...");

//     if (!this.head) {
//       console.log("⚠️ List is empty. Nothing to remove.");
//       return;
//     }

//     console.log(`📍 Current head data: ${this.head.data}`);

//     if (this.head.next) {
//       console.log(`➡️ Next node data: ${this.head.next.data}`);
//     } else {
//       console.log("🚫 There is no next node — this was the only node.");
//     }

//     // Remove the top node by shifting head to next
//     this.head = this.head.next;

//     if (this.head) {
//       console.log(`✅ New head is now: ${this.head.data}`);
//     } else {
//       console.log("🪣 List is now empty after removal.");
//     }
//   }

//   removeLast() {
//     console.log("\n-->Removing the last node...");

//     if (!this.head) {
//       console.log("⚠️ The list is empty. Nothing to remove.");
//       return;
//     }

//     // Case 1: Only one node
//     if (!this.head.next) {
//       console.log(`🪣 Only one node (${this.head.data}). List will be empty after removal.`);
//       this.head = null;
//       return;
//     }

//     let current = this.head;
//     console.log(`   Starting traversal from head: ${current.data}`);

//     // Move until current is the second-last node
//     while (current.next.next) {
//       console.log(`   Moving from node ${current.data} to ${current.next.data}`);
//       current = current.next;
//     }

//     console.log(`   Reached second-last node: ${current.data}`);
//     console.log(`   Removing last node: ${current.next.data}`);

//     // Remove the last node
//     current.next = null;

//     console.log("✅ Last node removed successfully!");
//   }

//   removeAt(index) {
//     console.log(`\n-->removeAt() called for index: ${index}`);

//     // Step 1: Check for invalid index
//     if (index < 0 || index >= this.size()) {
//       console.error("❌ Invalid Index — operation aborted");
//       return;
//     }

//     // Step 2: Handle case where first node (head) is removed
//     if (index === 0) {
//       console.log(`🔹 Removing the first node. Head data = ${this.head.data}`);
//       this.head = this.head.next;
//       console.log("✅ Head moved to next node");
//       return;
//     }

//     // Step 3: Traverse the list to find the node before the one to remove
//     let current = this.head;
//     console.log(`🚶 Starting traversal from head: ${current.data}`);

//     for (let i = 0; i < index - 1; i++) {
//       console.log(`   ➡️ Moving from node ${current.data} to ${current.next.data}`);
//       current = current.next;
//     }

//     // Step 4: Remove the node at the given index
//     if (current.next) {
//       console.log(`   Node to remove: ${current.next.data}`);
//       current.next = current.next.next;
//       console.log(`   ✅ Node removed. ${current.data} now points to ${current.next ? current.next.data : 'null'}`);
//     } else {
//       console.warn("⚠️ No node found at this position");
//     }
//   }

//   print() {
//     let cur = this.head;
//     const out = [];
//     while (cur) { out.push(cur.data); cur = cur.next; }
//     console.log("List:", out.join(" -> "));
//   }
// }

// const linkedList = new LinkedList();
// linkedList.addFirst(5); linkedList.print();
// linkedList.addFirst(3); linkedList.print();
// linkedList.addFirst(8); linkedList.print();

// linkedList.addLast(5); linkedList.print();
// linkedList.addLast(10); linkedList.print();
// linkedList.addLast(15); linkedList.print();
// linkedList.addLast(20); linkedList.print();
// linkedList.addAt(5, 911); linkedList.print();
// linkedList.removeTop(); linkedList.print();
// linkedList.removeLast(); linkedList.print();
// linkedList.removeAt(3); linkedList.print();

// linkedList.size();

// #######################################################################################################################################
// linked list practice

class Node{
  constructor(data){
    this.data = data;
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  addFirst(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data){
    const newNode = new Node(data);

    if(!this.head){
      this.head = newNode;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = newNode
  }

  addAt(index, data){
    if(index<0 || index> this.size){
      console.error("Index is out of range");
      return;
    }

    let newNode = new Node(data);
    if(index === 0){
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for(let i=0; i<index-1; i++){
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop(){
    if(!this.head){
      return
    }

    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head){
      return;
    }

    let current = this.head;
    while(current.next.next){
      current = current.next;
    }

    current.next = null;
  }

  removeAt(index){
    if(index<0 || index>this.size()){
      console.error("Index is out of range");
      return;
    }

    if(index === 0){
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for(let i=0; i<index-1; i++){
      current = current.next;
    }

    if(current.next){
      current.next = current.next.next;
    }
  }

  size(){
    let count = 0;
    let current = this.head;
    while(current){
      count++;
      current = current.next;
    }

    return count;
  }

  print() {
    let cur = this.head;
    const out = [];
    while (cur) { out.push(cur.data); cur = cur.next; }
    console.log("List:", out.join(" -> "));
  }  
}

const linkedList = new LinkedList();

linkedList.addFirst(5); linkedList.print();
linkedList.addFirst(8); linkedList.print();
linkedList.addFirst(3); linkedList.print();
linkedList.addLast(10); linkedList.print();
linkedList.addLast(15); linkedList.print();
linkedList.addLast(20); linkedList.print();
linkedList.addAt(4, 911); linkedList.print();
linkedList.removeTop(); linkedList.print();
linkedList.removeLast(); linkedList.print();
linkedList.removeAt(4); linkedList.print();

console.log("Size of the linked list: ",linkedList.size());