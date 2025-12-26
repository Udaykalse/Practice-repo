var arr = [1, 2, 3, 4];

var doubleArray = [];


for (var i = 0; i < arr.length; i++) {
  if(arr[i]%2===0){
    doubleArray.push(arr[i]*2)
  }else{
    doubleArray.push(arr[i])
  }
}

console.log(doubleArray)