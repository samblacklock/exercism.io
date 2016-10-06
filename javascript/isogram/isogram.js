'use strict';

module.exports = class Isogram {
  constructor(word) {
      this.word = word.replace(/[\s-]?/g, '').toLowerCase();
  }

  isIsogram() {
    const unique = new Set(this.word.split(''))
    return unique.size === this.word.length;
  }
}
