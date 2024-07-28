function checkValue(_) {
  return _ != null && _ === _;
}

console.log(checkValue(null));       // false
console.log(checkValue(undefined));  // false
console.log(checkValue(NaN));        // false
console.log(checkValue(0));          // true
console.log(checkValue(''));         // true
console.log(checkValue([]));         // true
console.log(checkValue({}));         // true
