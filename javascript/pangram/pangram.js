'use strict';

module.exports = class Pangram {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  isPangram() {
    const regex = /([a-z])(?!.*\1)/g;
    return regex.test(this.phrase);
  }
}
