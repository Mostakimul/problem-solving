const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  const prev = {};
  for (let index = 0; index < nums.length; index++) {
    const currentNum = nums[index];
    const neededVal = target - currentNum;
    const index2 = prev[neededVal];
    if (index2 != null) {
      return [index2, index];
    } else {
      prev[currentNum] = index;
    }
  }
}

console.log(twoSum(nums, target));
