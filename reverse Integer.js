/* Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21 
*/

var reverse = function(x) {
  return x > 0 ? +(reverseInt(x) <= Math.pow(2,31)-1) && reverseInt(x) 
               : +(-reverseInt(-x) >= -Math.pow(2,31)) && -reverseInt(-x);
};

var reverseInt = function(x){
   var numString = x+'';
   var newString = numString.split('')
   var reverse = newString.reverse();
   return +reverse.join('');
}