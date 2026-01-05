const maskStr = (str) => "*".repeat(str.length);

const showSecure = (m) => console.log(`Hidden : ${m}`)

function protechData(data){
    const masked = maskStr(data)
    showSecure(masked)
}

protechData('Uday@2212')