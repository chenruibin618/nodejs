const Stack = require("../algorithm/Stack");

test('init Stack',() => {
  
  let stack = new Stack(5);
  expect(stack.count).toBe(0);

  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.count).toBe(3);

  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);

  expect(stack.pop()).toBe(null);
  expect(stack.pop()).toBe(null);
  expect(stack.pop()).toBe(null);
})