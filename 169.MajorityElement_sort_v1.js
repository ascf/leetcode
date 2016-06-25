/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if ( nums.length === 0 ) return null;
    nums.sort();
    var i = 0;
    var j = nums.length -1;
    while( i < j ) {
        if ( nums[i] !== nums[j] ) {
            nums.splice(j,1);
            nums.splice(i,1);
            j -= 2;
        } else {
            i+=1;
            j-=1;
        }
    }
    return nums[0];
};
