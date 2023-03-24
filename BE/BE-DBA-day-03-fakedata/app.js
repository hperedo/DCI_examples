import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {log} from 'console'
import userModel from './models/userModel.js'
import germanCities from './data/de.json' assert { type: 'json' };
// log(germanCities.length)
dotenv.config()

// avoid strictQuery warning
mongoose.set('strictQuery', false);

// connetcing useing promise:
// mongoose.connect(MONGO_URI).then(()=>{CONNECTION_DONE}).catch(error)
// using callback:
// mongoose.connect(MONGO_URI, error=>{ERROR ON CONNECTION})
// connecting to MongoDb
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ro2kvsc.mongodb.net/${process.env.DB_NAME}`, error=>{
    if(error){
        log(error)
    }else{
        log(`Connected To MongoDb`)
    }
})

// create one static user
// userModel.create({
//     name: "Mostafa Othman",
//     email: "abc@abc.com",
//     age: 20,
//     // password: "1234qwer",
//     phone: "+49555555",
//     address: {
//         state: "Hamburg",
//         city: "City name"
//     }, 
//     skills: ['Guitar', "Javascript"]
// }).then(u=>{
//     log(`Inserting done`)
//     log("u=>", u)
//     // kill process
//     process.exit()
// }).catch(error=>{
//     log(error)
// })

// insert 100 users from https://api.namefake.com/:
let i = 0;
let skills = ["C#", "Java", "Javascript", "React", "HTML", "CSS", "Python"]

const insertUsers = ()=>{
    // getting the data from api
    fetch('https://api.namefake.com/').then(response=>{
        response.json().then(userFromAPI=>{
            //log(userFromAPI)
            let randomIndexForAddress = Math.floor(Math.random()* (germanCities.length - 1))
            // insert To MongoDb
            userModel.create({
                name: userFromAPI.name,
                email: userFromAPI.email_u,
                age: Math.floor(Math.random() * (30 - 18) + 18),
                password: userFromAPI.password,
                phone: userFromAPI.phone_w,
                address: {
                    state: germanCities[randomIndexForAddress].admin_name,
                    city: germanCities[randomIndexForAddress].city
                },
                skills: new Array(3).fill().map(()=>{
                    return skills[Math.floor(Math.random() * (skills.length - 1))]
                })
            }, error=>{
                if(error){
                    log(error)
                    log(`Error, Retrying...`)
                    setTimeout(()=>{
                        insertUsers()
                    }, 1000)
                }else{
                    // inserting done
                    i ++
                    // check if i less than 100
                    if(i < 100){
                        // do same process again, call your selfe
                        log(`${i}- insert don for user: ${i}`)
                        // wait 500ms
                        setTimeout(()=>{
                            insertUsers()
                        }, 1000)
                        
                    }else{
                        // done
                        log("insert 100 users is done")
                        // stop process
                        process.exit(0)
                    }
                }
            })
        })
    }).catch(error=>{
        log(`Error, Retrying...`)
        setTimeout(()=>{
            insertUsers()
        }, 1000)
    })
}

insertUsers()