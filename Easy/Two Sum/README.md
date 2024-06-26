# Two Sum

## Description

<div align="center" >
<img style="width:70%;" src="./assets/ss1.png" />
</div>

## Solutions

<br />

**Solution-1:**

```javascript
/**
 * Returns back an array with a pair of numbers,
 * the sum of which is equal to the given target
 * @param {array<number>} nums
 * @param {number} target
 * @returns {array<number>}
 */
function twoSum(nums, target) {
  let myMap = [];
  let i = 0;
  while (i < nums.length) {
    if (myMap[nums[i]] != undefined) return [i, myMap[nums[i]]];
    myMap[target - nums[i]] = i++;
  }
  return null;
}
```

<div align="center" >
<img style="width:70%;" src="assets/sol1.png" />
</div>

<br />

**Solution-2:**

```javascript
/**
 * Returns back an array with a pair of numbers,
 * the sum of which is equal to the given target
 * @param {array<number>} nums
 * @param {number} target
 * @returns {array<number>}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
}
```

<div align="center" >
<img style="width:70%;" src="assets/sol2.png" />
</div>

<br />