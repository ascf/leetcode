/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majNum = [];
    if ( nums.length === 0 ) return majNum;
    var hash = {};
    for (var i=0; i<nums.length;i++) {
        hash[nums[i]] = (typeof hash[nums[i]]==="undefined")?1:(hash[nums[i]]+1);
    }
    var oneThirdNum = Math.floor(nums.length / 3);
    for (var j=0; j<nums.length;j++) {
        if(hash[nums[j]] > oneThirdNum) {
            if( majNum.length === 0 || majNum.indexOf(nums[j]) == -1) {
                majNum.push(nums[j]);
            }
        }
    }
    return majNum;
};
