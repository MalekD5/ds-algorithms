function maxSubArray(arr) {
  return findMaxSubArray(arr, 0, arr.length - 1);
}

function findMaxSubArray(arr, low, high) {
  if (high === low) {
    return arr[high];
  }

  const mid = parseInt((high + low) / 2);
  const lss = findMaxSubArray(arr, low, mid);
  const rss = findMaxSubArray(arr, mid+1, high);
  const css = findCrossSum(arr, low, mid, high);
  return Math.max(lss, rss, css);
}

function findCrossSum(arr, low, mid, high) {
  let ls = -Infinity;
  let sum = 0;
  for (let i = mid; i >= low; i--) {
    sum += arr[i];
    if (sum > ls) 
      ls = sum; 
  }

  sum = 0;
  let rs = -Infinity;

  for (let i = mid+1; i <= high; i++) {
    sum += arr[i];
    if (sum > rs)
      rs = sum;
  }

  return rs + ls;
}


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));;

module.exports = maxSubArray;
