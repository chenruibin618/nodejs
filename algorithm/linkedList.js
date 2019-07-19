module.exports = class Node {

  constructor(data,next){
    this.data = data;
    this.next = next;
  }

  printNode(node){
    if(node.next!=null){
      let next2String = this.printNode(node.next);
      return node.data + "," + next2String;
    }else{
      return node.data;
    }
  }

  all(){
    return this.printNode(this);
  }

  static init (length){
    let node = null;
    let now = null;
    for(let i=0;i< length; i++){
      if(node == null){
        node = new Node(i,null);
        now = node;
      }else{
        now.next = new Node(i,null);
        now = now.next;
      }
    }
    return node;
  }

  static reverse(head){
    if(head == null || head.next == null){
      return head;
    }
    let newHead = this.reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }

}

// function reverse(head){
//   if(head == null || head.next == null){
//     return head;
//   }
//   let newHead = reverse(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// }

// Node.init = (length)=>{
//   let node = null;
//   let now = null;
//   for(let i=0;i< length; i++){
//     if(node == null){
//       node = new Node(i,null);
//       now = node;
//     }else{
//       now.next = new Node(i,null);
//       now = now.next;
//     }
//   }
//   return node;
// }

// Node.reverse = head => {
//   if(head == null || head.next == null){
//     return head;
//   }
//   let newHead = Node.reverse(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// }

// module.exports = Node;