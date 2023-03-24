// validator to check if name exist on request body
export function checkNameExist(req, res, next){
    if(!req.body.name){
        res.json({success: false, error: "name must be exist"})
    }else{
        next()
    }
}

// validator for name
export function checkNameLength(req, res, next){
    // next on OK, let him pass
    if(req.body.name.length >= 6){
        next()
    }else{
        // kik him out
        res.json({success: false, error: "name must be more than 6 characters !"})
    }
}

export function checkUsername(req, res, next){
    if(req.body.username.length >=5){
        next()
    }else{
        res.json({success: false, error: "usrname must be more than 5 characters !"})
    }
}

const validator = {
    checkNameLength,
    checkUsername,
    checkNameExist
}

export default validator