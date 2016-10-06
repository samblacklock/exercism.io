'use strict';

const responses = {
  'yell': 'Whoa, chill out!',
  'question': 'Sure.',
  'silence': 'Fine. Be that way!'
}

const parseGreeting = (greeting) => {
  greeting = greeting.trim();

  let isNumber = parseInt(greeting);
  let lastChar = greeting.substring(greeting.length - 1);
  let isUpperCase = greeting === greeting.toUpperCase();

  if (greeting === '') {
    return 'silence'
  } else {
    if ((isUpperCase && !isNumber) || (isNumber && lastChar === '!')) {
      return 'yell'
    } else if (lastChar === '?') {
      return 'question'
    }
  }
  return false;
}

module.exports = class {
  hey(greeting) {
    return responses[parseGreeting(greeting)] || 'Whatever.'
  }
};
