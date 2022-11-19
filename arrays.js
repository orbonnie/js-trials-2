'use strict';

// 1. printIndices
function printIndices(items) {
  items.forEach((item, i) => console.log(item, i))
}

// 2. everyOtherItem
function everyOtherItem(items) {
  items.forEach((item, i) => {
    if (i % 2 === 0){
      console.log(item);
    }
  });
}

// 3. smallestNItems
function smallestNItems(items, n) {
  let sortedItems = items.sort((a, b) => a - b);

  return sortedItems.slice(0, n);
}
