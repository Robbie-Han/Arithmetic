// 思路：先比较两个数的大小，然后将大的数和2的52次方比较，小与这个值直接相加返回。
// 如果值比较大，字符串切割为数组，然后反转数组，从个位逐位相加，大于等于10的将标志位等于1
function add(a, b) {
  if(+a < +b) {
    var t = a;
    a = b;
    b = t;
  }

  if(+a < Math.pow(2,52)){
    return +a + +b + '';  // js在2的53次方一下加法不会失精
  }

  var flag = 0; 
  var aArray = a.split('').reverse(),bArray = b.split('').reverse();
  for(var i = 0 ,length= aArray.length; i<length; i++) {
    if(bArray[i]){
        aArray[i] = +aArray[i] + +bArray[i] + flag;
    }else {
        aArray[i] = +aArray[i] + flag;
    }
     if(aArray[i] >= 10){
        flag = 1;
        aArray[i] = +aArray[i] - 10;
      }else {
        flag = 0
      }
  }
  if(flag === 1){
    aArray[i] = 1; //当a,b最高位相加有进位
  }
  return aArray.reverse().join('');
}

// codeWar高赞答案；
function add1 (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}