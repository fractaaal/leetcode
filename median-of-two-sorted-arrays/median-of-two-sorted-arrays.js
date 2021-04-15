/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = nums1.concat(nums2)
    nums3 = nums3.sort((a,b)=>{
        return a-b
    })
    console.log(nums3)
    let sum = 0
    if(nums3.length%2==1){
        return nums3[(nums3.length+1)/2-1]
    }else{
        return (nums3[nums3.length/2-1]+nums3[nums3.length/2])/2
    }
};