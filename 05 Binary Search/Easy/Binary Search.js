var search = function(nums, target) {
    let left = 0
    let right = nums.length-1
    let mid
    
    while (right >= left){
        mid = Math.floor((right+left)/2)
        if (nums[mid] === target){
            return mid
        }
        else if (nums[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    
    return -1
};

console.log(search([-1,0,3,5,9,12],2))
console.log(search([-1,0,3,5,9,12],9))