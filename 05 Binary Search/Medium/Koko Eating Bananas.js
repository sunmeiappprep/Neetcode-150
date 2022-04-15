// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23
 

// Constraints:

// 1 <= piles.length <= 104
// piles.length <= h <= 109
// 1 <= piles[i] <= 109




var minEatingSpeed = function(piles, h) {
    let max = Math.max(...piles)
    // console.log(min,max)
    let l = 0
    let r = max
    let mid
    let minimum = Infinity
    while(r >= l){
        // console.log()
        let totalHours = 0
        // we round cause we cant have half an airplane
        mid = Math.round((r+l)/2)
        console.log(mid)
        for (let i = 0; i < piles.lengtcxh; i++) {
            const pile = piles[i];
            totalHours += Math.ceil(pile/mid)
        }
        // console.log(totalHours)
        if (totalHours < h && minimum >= mid){
            minimum = mid
            r = mid -1
        }
        else{
            l = mid + 1
        }
        
    }
    return Math.floor(minimum)
};

console.log(minEatingSpeed([39349742,831289353,94850537,202034161,822483820,291480005,364718307,770576016,292917001,158974257,176779490,760021356,231880507,134164940,254947915,96989008,966910957,894767905,792919810,869260763,647220238,859344539,605456204,658422209,569973321,656339242,761737615,867843658,730633048,151226077,801884316,311330456,549743513,47760535,959446424,281582738,394416654,507455630,761654157,380907757,743234081,623056110,747328886,22109582,647024366,838123981,346932270,123795194,426587868,558806199,159727343,693528114,344036223,559859122,429821193,348971634,3091849,27424527,814018624,719679300,514700567,815327270,203518801,817418294,226395029,58054217,312644437,953205909,974835316,266039616,187830655,362467625,212023446,759856185,29858395,892618709,771251382,350458995,804946748,654101839,308468227,82459871,600937188,902889439,977038286,795037904,103459934,538278811,675744885,787296013,874459137],692180597))
// console.log(minEatingSpeed([30,11,23,4,20],5))
// console.log(minEatingSpeed([30,11,23,4,20],6))
