function isPlaindrome(str){
    let rev = str.split("").reverse().join('')
    return str === rev
}

console.log(isPlaindrome('madam'))