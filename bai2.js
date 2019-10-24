let nums = [12,6,3,7,21,5,7];
let x = parseInt(prompt("Nhập số bạn cần xóa khỏi mảng: "));
function tryRemoveFromArray(nums,x) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == x) {
            for (let j = i; j < nums.length; j++) {
                nums[j] = nums[j + 1];
            }
            nums.pop();
            return true;
        }
        return false;
    }

}
if (tryRemoveFromArray(nums,x)==true){
    document.write("Số bạn cần xóa có trong mảng, và mảng sau khi xóa x là: ")
    document.write(nums);
} else {
    document.write("Số bạn cần tìm k có trong mảng và mảng được trả lại là: ")
    document.write(nums);
}