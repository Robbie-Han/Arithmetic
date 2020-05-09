/* 二分法快速排序
设置两个空数组，每次取代排数组中间值，大于中间值的放右边，小的放左边
 注意每次遍历的时候，要判断是不是中间元素，是的话要排除 */
function quickSort(arr) {
	if(arr.length <= 1){
		return arr;
	}
  let left = [],right = [];
	const middleIndex = Math.floor(arr.length/2);
  const middle = arr[middleIndex];
  
	for(let i =0; i<arr.length;i++){
		if(i !== middleIndex){
			if(arr[i]>=middle){
				right.push(arr[i]);
			}else{
				left.push(arr[i]);
			}
		}
	}
	return quickSort(left).concat(middle,quickSort(right));
}

/* 双指针法，左右各一个指针，取第一个值flag，先动右指针，大于等于flag的时候像左移动，小的时候停止
再移动左指针，在遇到不小于flag的时候停止，交换位置。直到i>j为止。然后分别递归i左侧和右侧的部分数组 */
function proper(left,right) {
  var flag = arr[left];
  var i = left,j = right;
  if(i>j) return; 
  while(i<j){
    while(arr[j]>=flag && i<j){
      j--;
    }  
    while(arr[i]<=flag && i<j){
      i++;
    }
    var t = arr[j];
    arr[j] = arr[i];
    arr[i] = t;
  }
  [arr[i], arr[left]] = [arr[left], arr[i]];
  proper(left,i-1);
  proper(i+1,right);
}

proper(0,arr.length-1)
