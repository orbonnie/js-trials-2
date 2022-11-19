'use strict';

function wordsInCommon(words1, words2) {
  const words2Set = new Set(words2);

  return words1.filter(word => words2Set.has(word));
}

function kidsGame(names) {
  const first = names.shift();
  const answer = [first];

  while (names.length) {
    let ansLen = answer.length;

    for (let i = 0; i < names.length; i++) {
      let last = answer[answer.length - 1];
      if (names[i][0] === last[last.length - 1]) {
        answer.push(names[i]);
        names.splice(i, 1);
        break;
      }
    }
    if (ansLen === answer.length) {
      break;
    }
  }

  return answer;
}
