function isValidIntegerString(str) {
    return /^[0-9]+$/.test(str);
}
  
function safeParseInt(str) {
    if (isValidIntegerString(str)) {
      return parseInt(str, 10);
    } else {
      return false;
    }
}
  
function addStrings(num1, num2) {
    if (typeof num1 !== 'string' || typeof num2 !== 'string') {
        return "Input must be valid integer strings";
    }
    const parsedNum1 = safeParseInt(num1);
    const parsedNum2 = safeParseInt(num2);

    if (!parsedNum1|| !parsedNum2) {
    return "Input must be valid integer strings";
    }

    return parsedNum1 + parsedNum2;
}

module.exports = addStrings;