const LeapYear = function() {};

LeapYear.prototype.isLeap = (year) => {
  if(!(year % 4) && !(year % 100)) {

    if(!(year % 400)) {
      return false;
    }
    
    return true;
  }
}

module.exports = LeapYear;
