// https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 2665. Counter II
// Easy, 20250123
// Write a function createCounter. It should accept an initial
// integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Example 1:
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Example 2:
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

// Constraints:
// -1000 <= init <= 1000
// 0 <= calls.length <= 1000
// calls[i] is one of "increment", "decrement" and "reset"

// @param {integer} init
// @return { increment: Function, decrement: Function, reset: Function }

// const counter = createCounter(5)
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

const createCounter = (init) => {
  let current = init;
  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => (current = init),
  };
};

// Purpose of current
// The variable current in the createCounter function serves
// multiple important roles:

// State Management: current holds the state of the counter. It
// starts with the initial value (init) and can be modified by the
// methods increment, decrement, and reset.

// Encapsulation: By defining current within the createCounter
// function, the state of the counter is encapsulated. This means it
// is not directly accessible from outside the function, reducing
// the risk of unintended side effects. Only the returned methods
// can modify current.

// Closure: current is captured by the closure created by the inner
// functions (increment, decrement, reset). This ensures that each
// counter instance created by createCounter maintains its own
// separate state, independent of other instances. This allows for
// multiple counters to be created, each with its own initial value
// and independent state.

// A feature in JavaScript where an inner function has access to the
// variables of its outer function, even after the outer function
// has returned. The increment, decrement, and reset functions form
// a closure around current, preserving its state between calls.
