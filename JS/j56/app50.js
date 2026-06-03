let str1 = "listen";
let str2 = "silent";

if(str1.length !== str2.length){
    console.log(false);
}
else{
    let count = {};

    for(let ch of str1){
        count[ch] = (count[ch] || 0) + 1;
    }

    let isAnagram = true;

    for(let ch of str2){
        if(!count[ch]){
            isAnagram = false;
            break;
        }
        count[ch]--;
    }

    console.log(isAnagram);
}