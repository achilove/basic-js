module.exports = function getSeason(d) {
  function byMonth(month) {
    ++month
    if (3 <= month && month <= 5) {
      return 'spring';
    }

    if (6 <= month && month <= 8) {
      return 'summer';
    }

    if (9 <= month && month <= 11) {
      return 'fall';
    }

    return 'winter';
  }


  if (!d) {
    return 'Unable to determine the time of year!'
  }
  if (!(d instanceof Date) || isNaN(d.getTime())) {
    throw Error('invalid date')
  }

  return byMonth(d.getMonth())

};
