var search = function(nums, target) {
    let l = 0
    let r = nums.length-1
    let mid
    while (r >= l){
        console.log(nums.slice(l,r+1))
        mid = Math.floor((l+r)/2)
        if (nums[mid] === target){
            return mid
        }
        if (nums[l] <= nums[mid]){
            if (nums[l] > target || nums[mid] < target){
                l = mid + 1
            }
            else{
                r = mid -1
            }
        }else{
            if (target > nums[r] || target < nums[mid]){
                r = mid - 1
            }
            else {
                l = mid + 1
            }
        }
    }
    return -1
};

console.log()
console.log()
console.log()