// Basic Stack Implementation

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(element) {
//     this.stack.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is Empty. Can't perform pop.";
//     }

//     return this.stack.pop();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is Empty. Can't perform peek.";
//     }

//     return this.stack[this.size() - 1];
//   }

//   isEmpty() {
//     return this.size() === 0;
//   }

//   size() {
//     return this.stack.length;
//   }

//   printStack() {}
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(69);
// stack.push(420);

// console.log(stack.size());

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());




























class Stack{
  constructor(){
    this.stack = []
  }

  push(element){
    this.stack.push(element);
  }

  pop(){
    if(this.isEmpty()){
      return "Stack is empty, cannot perform pop";
    }

    return this.stack.pop();
  }

  peep(){
    if(this.isEmpty()){
      return "Stack is empty, cannot perform peep";
    }

    return this.stack[this.size() -1]
  }

  isEmpty(){
    return this.size() === 0; 
  }

  size(){
    return this.stack.length;
  }

  printStack(){
    if (this.isEmpty()) {
    console.log("array is empty");   // log it here
    return;
    }
    return this.stack.forEach((x)=>console.log("values are :",x))
  }
}

const stack = new Stack();

stack.push(10);
stack.push(123);
stack.push(456);

stack.printStack();

console.log(stack.size());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log("Peep: ",stack.peep());
console.log("Is empty?:",stack.isEmpty());
console.log("Stack size: ",stack.size());

stack.printStack();
