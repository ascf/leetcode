/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majNum = [];
    if ( nums.length === 0 ) return majNum;
    var hash = {};
    var oneThirdNum = Math.floor(nums.length / 3);

    for (var i=0; i<nums.length;i++) {
        hash[nums[i]] = (typeof hash[nums[i]]==="undefined")?1:(hash[nums[i]]+1);
        if(hash[nums[i]] > oneThirdNum) {
            if( majNum.length === 0 || majNum.indexOf(nums[i]) == -1) {
                majNum.push(nums[i]);
            }
        }
    }
    return majNum;
};
