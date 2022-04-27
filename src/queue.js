const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;//ссылка на начало очереди
    this.tail = null;//ссылка на конец очереди
    this.length = 0;//количество элементов
  }

  getUnderlyingList() {// возвращает **связный список**, лежащий в основе данной **очереди**
    return this.head;
  }

  enqueue(value) {//— помещает `value` в конец **очереди**
    const node = new ListNode(value)//создаем очередной элеменнт
    if(this.head){// если какойто элемент есть в очереди, то 
      this.tail.next = node;//следующий за последним будет наш новосозданный узел
      this.tail = node;//tail указывает на новосозданный элемент
    }else {// если элементов не было
      this.head = node;//ты будешь первым
      this.tail = node;// и последним
    }
    this.length++;//увеличение длины очереди
  }

  dequeue() {//извлекает значение с начала **очереди** и удаляет его
    const current = this.head//ссылка на текущий элемент
    this.head = this.head.next//теперь начало это следующий элемент
    this.length--;//уменьшаем длину очереди
    return current.value;//возвращаем его значение
}
}

module.exports = {
  Queue
};
