/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if ( nums.length === 0 ) return null;
    var hash = {};
    for (var i=0; i<nums.length;i++) {
        hash[nums[i]] = (typeof hash[nums[i]]==="undefined")?1:(hash[nums[i]]+1);
    }
    /*
    for (var i=0; i<nums.length;i++) {
        //hash[nums[i]] = (hash[nums[i]]===null)?1:(hash[nums[i]]+1);
        hash[nums[i]]++;
    }
    */
    var majNum = nums[0];
    for (var j=1; j<nums.length;j++) {
        if(hash[nums[j]]>hash[majNum]) {
            majNum = nums[j];
        }
    }
    return majNum;
};
