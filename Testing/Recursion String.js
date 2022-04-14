const recursionString = (string) =>{
    if (string.length === 0){
        return ""
    }
    console.log(string)
    return recursionString(string.slice(1)) + string[0]
}

console.log(recursionString("123456789"))