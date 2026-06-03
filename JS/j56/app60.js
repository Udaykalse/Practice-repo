let a=0,b=1;

for(let i=1;i<=10;i++){
    console.log(a);

    let temp=a+b;
    a=b;
    b=temp;
}