import userModel from '../model/user.js'

export const getAllUsers = (req, res)=>{
    // res.send("All Users")
    // from DB, using usersModel
    userModel.find({}, (error, data)=>{
        if(error){
            res.json(error)
        }else{
            res.json(data)
        }
    })
}

// create a function to insert a new user
export const createUser = (req, res)=>{
    // create a new user (IN DB)
    console.log("Data From Postman:", req.body)
    userModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age
    }).then(()=>{
        res.json({success: true})
    }).catch(error=>{
        res.json(error)
    })
}

/**
 * ## This Function Responses With One Matching user
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const findUserByName = (req, res)=>{
    let userNameParam= req.params.userName;
    // get One user, have same userName
    userModel.findOne({firstName: userNameParam}).then(user=>{
        // check if user exist
        if(user)
        res.json(user)
        else{
            res.json({error: "User Not Found!"})
        }
    }).catch(error=>{// Error on asking (MongoDb)
        res.json(error)
    })
}