const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const string = String(str),
    repeatTimes = options.repeatTimes || 1,
    separator = options.separator || '+',
    additionRepeatTimes = options.additionRepeatTimes || 1,
    additionSeparator = String(options.additionSeparator || '|');
  let addition = String(options.addition),
    res = '';

  addition = addition === 'undefined' ? '' : addition;

  for (let i = 0; i < repeatTimes; i++) {
    res += string;

    for (let n = 0; n < additionRepeatTimes; n++) {
      res += addition;

      if (n !== additionRepeatTimes - 1) {
        res += additionSeparator;
      }
    }

    if (i !== repeatTimes - 1) {
      res += separator;
    }
  }

  return res;
};
