
const codePct = 123456

function login(code, callback){
    console.log('Validating code...')
    setTimeout(() => {
      callback({codePct,code})
    }, 100)
}


