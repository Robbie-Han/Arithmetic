const users = [
  { id: 1, name: "a" },
  { id: 2, name: "a" },
  { id: 3, name: "b" },
  { id: 4, name: "v" }
];

Array.prototype.uniqueTest = function() {
  var arr = this;
  var key = arguments[0];
  var result = arr.reduce((acc,item) => {
    debugger
    if(!acc.some(v => v[key] === item[key])){
       acc.push(item);
    }
    return acc;
  },[]);
  return result;
};
console.log(users.uniqueTest('name'))