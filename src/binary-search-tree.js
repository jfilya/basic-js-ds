const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data) {
    this.data = data;
    this.left = null;//ссылка на потомок слева
    this.right = null;//ссылка на потомок справа
  }
}
class BinarySearchTree {
  constructor(){
    this.base = null;//ссылка на корень - является пустой
  }
  root() {
    return this.base;
  }

  add(data) {
    this.base = addWithin(this.base, data);//положить в корень то, что вернет функция 

    function addWithin(node, data){
     if(!node){//если узла нет
       return new Node(data)// добавляем новый узел
     }  
     if(node.data === data){//если такой узел уже сущетсвует
       return node;//возвращаем текущий узел
     }
     if(data < node.data){//если значение, которое мы ходим добавить меньше текущего
      node.left = addWithin(node.left, data);//добавляем левый потомок 
     } else{// иначе
       node.right = addWithin(node.right, data);//добавляем правый потомок
     }
     return node;//вернем текущий узел;
    }
  }

  has(data) {
    return searchWithin(this.base, data);

    function searchWithin(node, data){
      if(!node){// если узла нет
        return false;
      }
      if (node.data === data){// если мы нашли нужное значение
        return true;
      }
      return data < node.data ?// если узел есть но значение в узле меньше искомого, то
         searchWithin(node.left, data): //поищем слева
         searchWithin(node.right, data);//иначе поищем справа
    }
  }

  find(data) {
    return findWithin(this.base, data);

    function findWithin(node, data){
      if(!node){// если узла нет
        return null;
      }
      if (node.data === data){// если мы нашли нужное значение
        return node;
      }
      return data < node.data ?// если узел есть но значение в узле меньше искомого, то
         findWithin(node.left, data): //поищем слева
         findWithin(node.right, data)//иначе поищем справа 
    }
  }

  remove(data) {
    this.base = removeNode(this.base, data)// в каком поддереве и с каким значением удалить узел
    function removeNode(node, data) {
      if(!node){//если нет узла(там бфл null)
        return null;// его и оставляем
      }
      //определяем в какую сторону идем
      if(data < node.data){//если искомое значение меньше значения узла, то идем влево
        node.left = removeNode(node.left, data);//удаляем из левого поддерева искомое data, и кладем оставшееся дерево после удаления на место удаленного узла
        return node;
      }else if(node.data < data){//если искомое значение больше значения узла аналогично справа
        node.right = removeNode(node.right, data);
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
        node.data = minFromRight.data;//помещяем его в значение удаляемого узла

        node.right = removeNode(node.right, minFromRight.data);//удаляем минимальное значение из правого поддерева
        return node;
      }
    }
  }

  min() {
    if(!this.base){//еcли нет элементов то нет и минимального
      return;
    }

    let node = this.base;//корень
    while(node.left){//есть ли кно нибудь левее(самый маленький)
      node = node.left;//переходим к нему
    }
    return node.data;//возвращаем самый маленький элемент
  }

  max() {
    if(!this.base){//ели нет элементов то нет и минимального
      return;
    }

    let node = this.base;//корень
    while(node.right){//есть ли кно нибудь правее(самый большой)
      node = node.right;//переходим к нему
    }
    return node.data;//возвращаем самый ма
  }
}

module.exports = {
  BinarySearchTree
};