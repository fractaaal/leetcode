/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let sum = 0
    for(let i=0; i<nums.length ; i++){
        for(let j=0; j<nums.length; j++){
            if(i==j){
                continue
            }
            sum = nums[i]+nums[j]
            if(sum==target){
                return [i,j]
            }
        }
    }
};

// twoSum(nums,target)
