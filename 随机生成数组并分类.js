// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。

//生成随机数
function number(min,max){
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//生成随机数组
function newArray(n,min,max){
  return Array.from({length: n}, v => number(min,max));
}

function classifyArray(n,min,max){
  let hashObj = {};
  let initialArray = newArray(n,min,max);
  initialArray.sort((a,b) => a-b);
  let result = [];
  for(item of initialArray){
    key = Math.floor(item/10);
    if(!hashObj[key]){
      hashObj[key] = [item];
    }else {
      hashObj[key].push(item);
    }
  }
  for(key in hashObj){
    if(hashObj[key].length !== 0){
      result.push(hashObj[key])
    }
  }
  return result
}
const arr = classifyArray(10,0,99);
console.log(arr)

// 解法二
const arr = Array.from({
  length: 10
}, () => ~~(Math.random() * 50)) //创建数据
.sort((a, b) => a - b)； //排序
const arr1 = [...new Set(arr.map(i => ~~(i / 10)))] //划分区域
.map(i => arr.filter(a => ~~(a / 10) === i)) //数据划分
console.log(arr1);