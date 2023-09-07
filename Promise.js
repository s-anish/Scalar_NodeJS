let myPromise = new Promise(function(resolve, reject){
    const a = 1 
    const b = 1

    setTimeout(()=>{
        if(a===b){
            resolve('they are equal')
        }
        else{
            reject('they rnt equal')
        }
    }, 2000);
})

myPromise.then(function(result){
    console.log(result)
})
myPromise.catch(function(failedResult){
    console.log(failedResult)
})