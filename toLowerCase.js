// 实现tolocalString函数

var toLowerCase = function(str) {
  var strArray = str.split('');
  var reg = /[A-Z]/;
  strArray = strArray.map(item => reg.test(item) ? String.fromCharCode(item.charCodeAt() + 32) : item)
  return strArray.join('');
};

// String.fromCharCode(), ''.charCodeAt()