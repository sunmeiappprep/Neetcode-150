const recursionPlanland = (string) =>{
    if (string.length === 1|| string.length === 0){
        return true
    }
    console.log(string[0],string[string.length-1])
    if (string[0] === string[string.length-1]){
        return recursionPlanland(string.substring(1,string.length-1)) 
    }
    return false
}

console.log(recursionPlanland("racecar"))
console.log(recursionPlanland("aaaaa"))
console.log(recursionPlanland("racerarasd"))