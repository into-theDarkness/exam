let nums = [10,5,2,8,-1,6,8];
function findMaxScore(nums) {
    let max = nums[0];
    for (let i =0; i< nums.length;i++){
        if (max < nums[i]){
            max = nums[i];
        }
    } return max;
}
let Max1 = findMaxScore(nums);
document.write('max of nums: ' + Max1);
document.write('<br>');
let nums2 = [2,4,0,5,1];
let Max2 = findMaxScore(nums2);
document.write("max of nums2: " + Max2);