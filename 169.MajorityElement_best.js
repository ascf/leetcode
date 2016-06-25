/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if ( nums.length === 0 ) return null;
    maj = nums[0];
    majOff = 1;
    for (var i=1; i< nums.length;i++) {
        if (nums[i] !== maj) majOff--;
        else majOff++;
        if (majOff === 0) {
            maj = nums[i];
            majOff = 1;
        }
    }
    return maj;
};
