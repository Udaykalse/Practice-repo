const str1 = "listen";
const str2 = "silent";

if (str1.length !== str2.length) {
    console.log("Not Anagrams");
} else {
    const count = {};
    let isAnagram = true;
    
    for (let i = 0; i < str1.length; i++) {
        count[str1[i]] = (count[str1[i]] || 0) + 1;
    }
    
    for (let i = 0; i < str2.length; i++) {
        if (!count[str2[i]]) {
            isAnagram = false;
            break;
        }
        count[str2[i]]--;
    }
    
    console.log("Anagram:", isAnagram); // Output: true
}