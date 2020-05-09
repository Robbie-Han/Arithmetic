// 冒泡排序

function bubble(arr) {
  const length = arr.length;
  if(length <= 1) return arr;

  for(let i = 0; i < length; i++) {
    let flag = false; // 设置标志位，当为false表示没有交换，此时应该返回数组
    for(let j = 0; j < length-i-1; j++) { // 后面是和j+1个元素比较，所以还需要再减一
      if(arr[j] > arr[j+1]) { // 保证冒泡是稳定的算法
        let tmp = arr[j]; // 需要额外的一个空间，空间复杂度为O(1)
        arr[j] = arr[j+1];
        arr[j+1] = tmp; 
        flag = true;
      }
    }
    if(!flag) return arr; // 最好的情况下是元素都已经有序了，没有元素交换，此时时间复杂度为O(n)，最坏的情况为倒序，需要经理n次冒泡，时间复杂度O(n )
  }

  return arr;
}

// 插入排序
/* 插入排序思想：第一个元素有序，从第二个元素开始，在前面有序的元素中一次比较找到合适的插入位置*/
/*空间复杂度O(1),时间复杂度在完全有序时为O(n)，倒序时为最坏情况，时间复杂度O(n^2) */

function inserttionSort(arr) {
  const length = arr.length;
  if(length <= 1) return arr;
  
  for(let i = 1; i < length; i++){
    let value = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > value) { // 对已有序的元素遍历，如果值大于value就继续向前找，不大于的话就插入，插入排序是稳定排序
      arr[j+1] = arr[j];
      j--;
    }

    if(j + 1 !== i){ // 如过arr[i]不用移动，那么就不需要插入操作
      arr[j+1] = value;
    }
  }

  return arr
}

// 选择排序
/*思路：从待排序元素中找到最小的元素，然后与第一个元素交换，然后选择第二小的元素与第二个元素交换....*/
/*选择排序是不稳定的例如： 5，3，5，1*/
/*空间复杂度为O(1)，时间复杂度都是O(n^2)*/

function selectionSort(arr) {
  const length = arr.length;
  if(length <= 1) return arr;

  for(let i = 0; i < length; i++){
    let minValue = arr[i];
    let index = i;
    for(let j = i+1; j < length; j++) {
      if(arr[j] <= minValue) { // 遍历后面的元素，找出最小的元素
        minValue = arr[j];
        index = j;
      }
    }
    arr[index] = arr[i]; // 交换元素
    arr[i] = minValue
  }

  return arr;
} 

// 快排
/* 双指针法，左右各一个指针，取第一个值flag，先动右指针，大于等于flag的时候向左移动，否则停止移动，
移动左指针，小于或者等于flag时向右移动，大于flag的时候停止，然后交换位置。直到i>j为止。然后分别递归i左侧和右侧的部分数组 */
 
function proper(arr, left, right) {
  const flag = arr[left];
  let i = left, j = right;
  if(i >= j) return;
  while(i < j) {
     while(arr[j] >= flag && i < j){
       j--;
     }
     while(arr[i] <= flag && i < j) {
       i++;
     }
     [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[i], arr[left]] = [arr[left], arr[i]];
  proper(arr, left, i-1);
  proper(arr, i+1, right);
}

proper(arr, 0, arr.length-1)

// 归并排序
/*归并排序采用的是分治的思想，将待排数组逐步二分，当二分长度为1的时候停止。然后再将分好的数组排序，并逐步合并为一个有序的数组*/

function mergeSort(arr) {
  const length = arr.length;
  if(length <= 1) { // 当数组为一个元素时停止
    return arr;
  }
  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, length);

  return merge(mergeSort(left), mergeSort(right)); //对原始数组递归二分 
}

function merge(left, right) {
  const result = [];
  let il = 0;
  let ir = 0;

  while(il < left.length && ir < right.length) { //对二分好的数据排序整合在一起
    if(left[il] < right[ir]) {
      result.push(left[il]);
      il++;
    }else {
      result.push(right[ir]);
      ir++;
    }
  }
// 处理剩余元素
  while(il < left.right) {
    result.push(left[ir]);
    il++;
  }
  while(ir < right.length) {
    result.push(right[ir]);
    ir++;
  }
  return result;
}