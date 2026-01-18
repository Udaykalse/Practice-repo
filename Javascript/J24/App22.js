console.log('Start')

setTimeout(function(){
    console.log('Timeout')
},0)

Promise.resolve().then(function(){
    console.log('Promise')
})

// Start
// Promise
// Timeout