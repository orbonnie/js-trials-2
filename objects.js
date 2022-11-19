"use strict";

// 1. countWords
function countWords(phrase) {
  const words = {};

  phrase.split(' ').forEach((word) => {
    if (words[word]) {
      words[word] += 1;
    } else {
      words[word] = 1;
    }
  });

  return words;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melon_prices = {
    2.5: ["Cantaloupe", "Honeydew"],
    2.95: ["Watermelon"],
    3.25: ["Musk", "Crenshaw"],
    14.25: ["Christmas"],
  };

  return melon_prices[price];
}
