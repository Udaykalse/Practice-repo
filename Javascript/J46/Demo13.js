let arr = [1,'1','abc',null,2,0.5,-1,undefined,2];

function Nums(...items){
    return items.filter(Number.isFinite);
}

console.log(Nums(...arr))