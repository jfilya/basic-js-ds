const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(value) {
    this.value = value;
    this.left = null;//ссылка на потомок слева
    this.right = null;//ссылка на потомок справа
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null;//ссылка на корень - является пустой
  }
  root() {
    return this.root;
  }

  add(value) {
    this.root = addWithin(this.root , value);//положить в корень то, что вернет функция 

    function addWithin(node, value){
     if(!node){//если узла нет
       return new Node(value)// добавляем новый узел
     }  
     if(node.value === value){//если такой узел уже сущетсвует
       return node;//возвращаем текущий узел
     }
     if(value < node.value){//если значение, которое мы ходим добавить меньше текущего
      node.left = addWithin(node.left, value);//добавляем левый потомок 
     } else{// иначе
       node.right = addWithin(node.right, value);//добавляем правый потомок
     }
     return node;//вернем текущий узел;
    }
  }

  has(value) {
    return searchWithin(this.root, value);

    function searchWithin(node, value){
      if(!node){// если узла нет
        return false;
      }
      if (node.value === value){// если мы нашли нужное значение
        return true;
      }
      if(value < node.value) {// если узел есть но значение в узле меньше искомого, то
        return searchWithin(node.left, value) //поищем слева
      } else {
        return searchWithin(node.right, value)//иначе поищем справа
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(value) {
    this.root = removeNode(this.root, value)// в каком поддереве и с каким значением удалить узел
    function removeNode(node, value) {
      if(!node){//если нет узла(там бфл null)
        return null;// его и оставляем
      }
      //определяем в какую сторону идем
      if(value < node.value){//если искомое значение меньше значения узла, то идем влево
        node.left = removeNode(node.left, value);//удаляем из левого поддерева искомое value, и кладем оставшееся дерево после удаления на место удаленного узла
        return node;
      }else if(node.value < value){//если искомое значение больше значения узла аналогично справа
        node.right = removeNode(node.right, value);
        return node;
      }else {
        //значения одинаковые

        if(!node.left && !node.right){//если нет ни правого ни левого поддерева
          return null;//просто удаляем как-будто его и не было
        }
        if(!node.left){//если нет только левого потомка
          node = node.right;//вмещаем правого потомка и возвращаем обновленный узел
          return node;
        }
        if(!node.right){//если нет только правого потомка, аналогично
          node = node.left;
          return node;
        }
      //если есть оба поддерева
      //будем искать минимум среди правого поддерева
        let minFromRight = node.right;//корень правого поддерева
        while(minFromRight.left){//ищем меньший элемент слева
          minFromRight = minFromRight.left
        }
        node.value = minFromRight.value;//помещяем его в значение удаляемого узла

        node.right = removeNode(node.right, minFromRight.value);//удаляем минимальное значение из правого поддерева
        return node;
      }
    }
  }

  min() {
    if(!this.root){//еcли нет элементов то нет и минимального
      return;
    }

    let node = this.root;//корень
    while(node.left){//есть ли кно нибудь левее(самый маленький)
      node = node.left;//переходим к нему
    }
    return node.value;//возвращаем самый маленький элемент
  }

  max() {
    if(!this.root){//ели нет элементов то нет и минимального
      return;
    }

    let node = this.root;//корень
    while(node.right){//есть ли кно нибудь правее(самый большой)
      node = node.right;//переходим к нему
    }
    return node.value;//возвращаем самый ма
  }
}

module.exports = {
  BinarySearchTree
};