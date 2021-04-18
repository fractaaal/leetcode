/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)!==-1){
        return nums.indexOf(target)
    }else{
        nums.push(target)
        nums.sort((a,b)=>{
            if(a<b){
                return -1
            }else if(a==b){
                return 0
            }else{
                return 1
            }
        })
        return nums.indexOf(target)
    }
};