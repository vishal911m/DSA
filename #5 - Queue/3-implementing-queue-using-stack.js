// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

// // skeleton:
// var MyQueue = function(){}

// MyQueue.prototype.enqueue = function(){}

// MyQueue.prototype.dequeue = function(){}

// MyQueue.prototype.front = function(){}

// MyQueue.prototype.empty = function(){}

var MyQueue = function(){
  this.stack1 = [];
  this.stack2 = [];
}

MyQueue.prototype.enqueue = function(x){
  this.stack1.push(x);
};

// stack1 = [1,2,3]
// stack2 = [3,2,1]

MyQueue.prototype.dequeue = function(){
  if(this.stack2.length === 0){
    while(this.stack1.length>0){
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop();
}

MyQueue.prototype.front = function(){
  if(this.stack2.length === 0){
    while(this.stack1.length>0){
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2[this.stack2.length - 1]
}

MyQueue.prototype.empty = function(){
  return this.stack1.length === 0 && this.stack2.length === 0;
}

[3,6]

const queue = new MyQueue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
console.log(queue.front());