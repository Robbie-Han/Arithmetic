// 找出数组唯一重复的数
const arr = [1,2,3,2,4,5];
const xorArr = arr.reduce((acc,item) => acc^item);
const newArr = [...new Set(arr)];
const result = newArr.reduce((acc,item) => acc^item,xorArr);
console.log(result);

// 找出数组中唯一不重复的数
const arr = [1, 3, 1, 4, 5, 6, 4, 5, 3];
const result = arr.reduce((acc,item) => acc^item)

// 若只有2个数不重复，实现一个函数找出这2个数。
const arr = [1, 3, 1, 4, 5, 6, 4, 8, 5, 3];
arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));

// 找出数组唯一重复的字符
// 先转成数字再使用异或操作
const str = 'abadefhjsk';
const strArr = str.split('');
const numArray = strArr.map(item => item.charCodeAt());

const xorValue = numArray.reduce((acc,item)=> acc^item);
const newArray = [...new Set(numArray)];
const value = newArray.reducer((acc,item)=> acc^item, xorValue);
console.log(String.fromCharCode(value));
