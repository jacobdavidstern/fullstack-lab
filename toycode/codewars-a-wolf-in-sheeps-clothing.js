// CodeWars: A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that
// you are standing at the front of the queue which is at the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]
// If the wolf is the closest animal to you, return "Pls go away and stop eating my
//  sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!"
// where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.

const warnTheSheep = (queue) => {
  const wolfIndex = queue.indexOf('wolf');
  if (wolfIndex === queue.length - 1) {
    return 'Pls go away and stop eating my sheep';
  } else {
    return `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`;
  }
};
