test('linkedList reverse', () => {
  const Node = require("../algorithm/linkedList");
  let node = Node.init(5);
  expect(node.all()).toBe('0,1,2,3,4')
  let newNode = Node.reverse(node);
  expect(newNode.all()).toBe('4,3,2,1,0')
});