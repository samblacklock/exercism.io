'use strict';

module.exports = class WordCount {
  count(phrase) {
    const wordArr = phrase.trim().toLowerCase().split(/\s+/g);
    const obj = {};

    for (let item of new Set(wordArr)) obj[item] = 0;
    wordArr.map((val) => obj[val]++);

    return obj;
  }
}
