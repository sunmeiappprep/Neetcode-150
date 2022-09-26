var climbStairs = function(n) {
    if (n < 3) return n
    let arr = [2,3]
    let left = n-3
    while ( left > 0){
        arr.push(arr[arr.length-1]+arr[arr.length-2])
        left--
    }
    return arr[arr.length-1]
};