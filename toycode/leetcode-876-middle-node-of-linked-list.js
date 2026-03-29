// https://leetcode.com/problems/middle-of-the-linked-list/description/
// 876. Middle of the Linked List
// Easy
// 20240119
// Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)

// @param {ListNode} head
// @return {ListNode}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const middleNode = (head) => {
  let slow = head;
  let fast = head;
  // Move fast pointer twice as fast as the slow pointer
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // Slow pointer will be at the middle node when fast pointer reaches the end
  return slow;
};

// Example usage:
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);
console.log(middleNode(head)); // Output: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }
