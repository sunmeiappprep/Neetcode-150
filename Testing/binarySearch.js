
const search = (num,left,right,target) =>{
    if (left > right){
        return -1
    }
    left = 0
    right = num.length-1
    // console.log(num)
    let mid = Math.floor((left+right)/2)
    if (num[mid] === target){
        return mid
    }
    else if (num[mid] > target){
        return search(num.slice(0,mid),left,mid-1,target)
    }
        return search(num.slice(mid+1),mid,right,target) + mid +1
}

console.log(search([1,2,3,4,5,6,7,8,9,2000],0,0,2000))
console.log(search([1,2,3,4,5,6,7,8,9,2000],0,0,2000))

// console.log(binarySearchRecursion("aaaaa"))
// console.log(binarySearchRecursion("racerarasd"))