// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

var searchMatrix = function(matrix, target) {
    let firstDigit = []
    for (let i = 0; i < matrix.length; i++) {
        const array = matrix[i];
        firstDigit.push(array[0])
    }
    let idx = (binarySearch(firstDigit,target))
    console.log(idx)
    for (let i = 0; i < matrix[idx].length; i++) {
        const num = matrix[idx][i];
        if (num === target) return true
    }
    return false
};  

var binarySearch = (array,target) =>{
    let left = 0
    let right = array.length-1
    let mid

    while (right >= left){
        mid = Math.floor((right+left)/2)
        if (array[mid] === target){
            return mid
        }
        else if(array[mid] > target && array[mid-1] < target ){
            return mid-1
        }
        else if(array[mid] < target && array[mid+1] > target ){
            return mid
        }
        else if(array[mid] < target && array[mid+1] < target && !array[mid+2] ){
            return mid+1
        }
        else if (array[mid] < target){
            left = mid+1
        }
        else{
            right = mid-1
        }
    }
    return 0
}

// console.log(binarySearch([1,2,3,4,5,6],0))
// console.log(binarySearch([1,2,3,4,5,6],1))
// console.log(binarySearch([1,2,3,4,5,6],6))
// console.log(binarySearch([1,2,3,4,5,6],4))

// console.log(searchMatrix([1],0))
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13))

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],30))