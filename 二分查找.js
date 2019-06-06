// 使用二分查找的前提是默认数组元素有序

// 使用递归遍历数组
function binSearch(target,arr,first,last){
  var first = first||0;
  var last = last||arr.length-1;

  const midIndex = first + parseInt((last-start)/2);
  const mid = arr[midIndex];

  if(target === mid) {
    return midIndex;
  }else if(target > mid){
    binSearch(target,arr,midIndex+1,last);
  }else {
    binSearch(target,arr,first,midIndex-1);
  }
  return -1
}
var result = binSearch(2,[1,2,3,4])
console.log(result);

// 不使用递归
function binarySearch(target,arr){
	let first = 0,last = arr.length - 1;
	while(first <= last){
		const midIndex = first + parseInt((last - first)/2);
		const middle = arr[midIndex];
		if(middle === target){
			return midIndex;
		}else if(target > middle){
			start = midIndex +1;
		}else {
			end = midIndex -1;
		}
	}
	return -1;
}