/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if ( nums.length === 0 ) return null;
    if ( nums.length === 1 ) return nums[0];
    nums.sort();
    halfNum = Math.floor(nums.length / 2);
    for (var i = 0;i <= halfNum;i++){
        if (nums[i] == nums[i+ halfNum]) return nums[i];
    }
};
