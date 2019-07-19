module.exports = class Stack{

  constructor(n){
    this.itmes = new Array(n)
    this.n = n;
    this.count = 0;
  }

  // 入栈操作 
  push(item){
    if(this.count === this.n){
      return false;
    }
    this.itmes[this.count] = item;
    this.count++;
    return true;
  }

  // 出栈操作 
  pop() {
    if(this.count == 0) return null;
    let result = this.itmes[this.count -1 ];
    this.count--;
    return result;
  }

}