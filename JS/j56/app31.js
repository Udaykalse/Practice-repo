let str="I love javascript programming";

let words=str.split(" ");

let longest="";

for(let word of words){
    if(word.length>longest.length){
        longest=word;
    }
}

console.log(longest);