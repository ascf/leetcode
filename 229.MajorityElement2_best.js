/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majNum = [];
    var majOff = [];
    var breakNum = 3;
    if ( nums.length === 0 ) return majNum;
    for (var i=0; i< nums.length;i++) {
        var index = majNum.indexOf(nums[i]);
        if (index >= 0) {
            majOff[index]++;
        } else {
            if (majNum.length < breakNum -1) {
                majNum.push(nums[i]);
                majOff[majNum.length-1]=1;
            } else {
                var majOffZero = majOff.indexOf(0);
                if (majOffZero >= 0) {
                    majNum.splice(majOffZero,1);
                    majOff.splice(majOffZero,1);
                    majNum.push(nums[i]);
                    majOff[majNum.length-1]=1;
                } else {
                    majNum.forEach(function(element,index,array){
                       majOff[index]--; 
                    });
                }
            }
        }
    }
    var flag=0;
    var i = 0;
    while(i < majNum.length) {
        majOff[i] = 0;
        flag = 0;
        nums.forEach(function(element,index,array){
            if(nums[index] === majNum[i]) {
                majOff[i] +=1;
            }
            if (majOff[i]*breakNum > nums.length) {
                flag=1;
            }
        });
        if (flag === 0) {
            majNum.splice(i,1);
            majOff.splice(i,1);
        } else {
            i++;
        }
    }
    return majNum;
};
