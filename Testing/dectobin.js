const decToBin = (num) =>{
    if (num === 0){
        return ""
    }
    let divided = Math.floor(num/2)
    let mod = num%2
    return decToBin((divided)) + mod.toString()
}

console.log(decToBin(192))
console.log(decToBin(4))
console.log(decToBin(3))