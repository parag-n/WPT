let promise1=new Promise(function(resolve,reject){
     setTimeout(()=>reject(4),1000);
}).then((resolve)=>{console.log(resolve)},()=>{console.log("this was rejected")})