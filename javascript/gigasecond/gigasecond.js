'use strict';

//1 gigasecond in milliseconds
const gSecond = 10e11;

module.exports = class Gigasecond {
  constructor(startDate) {
    this.startDate = startDate;
  }
  date() {
    return new Date(this.startDate.getTime() + gSecond);
  }
}
