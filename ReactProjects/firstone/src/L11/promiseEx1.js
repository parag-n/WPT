let promise1=new Promise(function(resolve,reject){
     setTimeout(()=>{resolve(4)},1000)
}).then(console.log(resolve));