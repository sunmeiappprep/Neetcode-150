const sumOfNaturalNum = (num) =>{
    if (num === 0){
        return 0
    }

    return sumOfNaturalNum(num-1) + num
}


console.log(sumOfNaturalNum(10))
console.log(sumOfNaturalNum(4))
console.log(sumOfNaturalNum(3))