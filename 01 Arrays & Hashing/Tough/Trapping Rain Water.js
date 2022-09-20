var trap = function(height) {
    let l = 0
    let r = height.length-1
    let sum = 0
    let maxLeft = 0
    let maxRight = 0
    while (l<=r){
        if (height[l] < height[r]){
            if (height[l] > maxLeft) {
                maxLeft = height[l]
            }
            else if( height[l] < maxLeft){
                sum += maxLeft - height[l]
            }
            l++
        }
        else if (height[l] >= height[r]){
            if (height[r] >= maxRight) {
                maxRight = height[r]
            }
            else if( height[r] < maxRight){
                sum += maxRight - height[r]
            }      
            r- -  
        }
    } 
    return sum
};