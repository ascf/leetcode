/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort(compareNums);
    var res = [];
    var mid = [];
    mid.push([[],nums]);
    var count = 0;
    //if (nums.length === 0) return res;
    while(mid.length !== 0) {
        count++;
        var midUnit = mid.pop();
        var midRes = midUnit[0];
        var midNums = midUnit[1];
        if(midNums.length === 0) {
            if (res.length < midRes.length) {
                res = midRes;
            }
        } else {
            var popNum = midNums.pop();
            var midResDump = (midRes.length===0)?[]:midRes.slice();
            var midNumsDump = (midNums.length===0)?[]:midNums.slice();
            mid.push([midResDump,midNumsDump]);
            if(midRes.length === 0 || popNum % midRes[midRes.length-1] === 0) {
                midRes.push(popNum);
                mid.push([midRes,midNums]);
            }
        }  
    }
    console.log(count);
    return res;
};

var compareNums = function(a, b) {
    return (b - a);
}