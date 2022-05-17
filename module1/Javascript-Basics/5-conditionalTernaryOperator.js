// Use the Conditional (Ternary) Operator:
// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

function findGreater(a,b) {
    return (a>b) ? "a is greater" : "b is greater";
}

console.log(findGreater(10,20));

//Use Multiple Conditional (Ternary) Operators: 
function findGreaterOrEqualTest(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }
//Instead we can use Multiple Conditional (Ternary) Operators as follows

function indGreaterOrEqual(a,b) {
    return (a === b) ? 'a and b are equal' : (a > b) ? 'a is greater' : 'b is greater';
}
