let str = "Parvej S , Sidharth K, Aman C, Chetan M, ";

let c = str.toLocaleLowerCase().match(/[aeiou]/gi)?.length || 0;
console.log(c)