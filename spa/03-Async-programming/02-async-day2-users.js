

const getUsers = ()=>{


return new Promise((resolve,reject)=>{


if(Math.random() * 100 <= 50){


    reject("booooo, something wrong Failed")
}else{



resolve([

    {id:1,name:"wilii"},
    {id:4,name:"bilii"},
    {id:2,name:"silii"},
    {id:6,name:"eilii"},





])

}




})




}




export default getUsers;