
var majorityElement = function(nums) {
    var majNum = [];
    if ( nums.length === 0 ) return majNum;
    if ( nums.length === 1 ) {
        majNum.push(nums[0]);
        return majNum;
    }
    nums.sort();
    oneThirdNum = Math.floor(nums.length / 3);
    for (var i = 0;i < nums.length - oneThirdNum;i++){
        if (nums[i] == nums[i+ oneThirdNum]) {
            if (majNum.length===0 || nums[i] != majNum[majNum.length-1]) {
                majNum.push(nums[i]);
            }
            i = i + oneThirdNum;
        }
    }
    return majNum;
};
