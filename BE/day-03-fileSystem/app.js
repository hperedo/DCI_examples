console.log("App js Is Running... :)")
// Learn 'fs' library in nodejs

// import/require fs library
const fs = require('fs');

// read File System (read content)

// fs.readFile('./text.txt', (error, data)=>{
//     if(error){
//         // throw error // Will Stop/kill process
//         console.log(error)
//     }else{
//         // data is Buffer
//         console.log(data.toString())
//     }
// })

// let string = fs.readFileSync("./text.txt").toString()

// console.log(string)

// ====================================
// create/write file
// fs.writeFile("./newFile.txt", "This text created with nodejs", error=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("File Saved!")
//     }
// })

// fs.writeFileSync('./s/newFile.txt', "Hola guys")
// console.log(res)

// =======================================================
// read all files/folders in path

// fs.readdir("./", (error, files)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(files)
//     }
// })

// let files = fs.readdirSync('./')
// console.log(files)

// // check if data folder exist in this project
// let exist = files.includes("newFile.txt")
// console.log(exist)


// // check if directory or not
// try{
// let isDirectory = fs.readdirSync("./data")
// // is directory
// console.log("Yes it is")
// }catch{
// // not
// console.log("Nein")
// }

// console.log(isDirectory)

// =====================================================
// create directory

// fs.mkdir("./newFolder/bla11/hola", error=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Directory created !")
//     }
// })
// fs.mkdirSync("./syncFolder/k/l/j")

//==========================================================
// DELETE
fs.rm("./newFolder",{recursive: true}, error=>{
    if(error){
        console.log(error)
    }else{
        console.log("Delete Complete")
    }
})

// rename
// fs.renameSync()
// copy
// fs.copyFileSync