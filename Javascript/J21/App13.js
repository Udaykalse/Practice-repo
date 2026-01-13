let emp = {
    parvej:10000,
    siddharth:20000,
    sanmati:7000
}

let total = 0

for(let key in emp){
    total+=emp[key]

}

console.log(total)