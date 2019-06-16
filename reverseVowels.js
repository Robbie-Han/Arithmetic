// Reverse Vowels of a String
var reverseVowels = function(s) {
  let strArray = s.split('');
  let first = 0, last = s.length - 1;
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  while(first < last) {
      if(vowels.includes(strArray[first]) && vowels.includes(strArray[last])){
          const t = strArray[first];
          strArray[first] = strArray[last];
          strArray[last] = t;
          first++;
          last--;
      }
      if(!vowels.includes(strArray[first])){
          first++;
       }
      if(!vowels.includes(strArray[last])){
          last--
      }
  }
  return strArray.join('')
};