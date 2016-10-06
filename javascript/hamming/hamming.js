'use strict';

const Hamming = function() {};

Hamming.prototype.compute = (string1, string2) => {
  if (string1.length != string2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  const arr1 = [... string1];
  const arr2 = [... string2];

  const result = arr1.map((letter, index) => {
    return arr1[index] === arr2[index];
  }).filter((val) => {
    return val === false;
  });
  
  return result.length;
};

module.exports = Hamming;
