// Promise
function a(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("a")
        resolve()
    }, 1000) 
    })
       
}

// function a(cb){
//     setTimeout(()=>{
//                 console.log("a")
//                 cb()
//             }, 1000) 
// }

function b(){
    console.log("b")
}

// a().then(()=>{
//     b()
// })
await a()
b()

// a(()=>{
//     b()
// })

// function c(){
//     return new Promise((resolve, reject) =>{
//         ..
//     })
// }