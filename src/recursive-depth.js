const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;

    if (!Array.isArray(arr)) {
      return 0;
    }

    for (let i = 0; i < arr.length; i++) {
      let elementDepth = this.calculateDepth(arr[i]);
      elementDepth > maxDepth ? (maxDepth = elementDepth) : '';
    }

    return maxDepth + 1;
  }
};
