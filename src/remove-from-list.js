const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function ListNode (value){
    this.value = value;
    this.next = null;
}

function removeKFromList(head, value) {
 let d = new ListNode(-1);
 d.next = head;
 let prev = d;
 let cur = head;

 while(cur){
   if(cur.value === value){
     prev.next = cur.next;
     cur = cur.next;
   } else {
     prev = cur;
     cur = cur.next;
   }
 }
 return d.next;
}
module.exports = {
  removeKFromList
};
