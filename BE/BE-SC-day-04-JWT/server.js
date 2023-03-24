import express from "express";
import dotenv from "dotenv";
import connect from "./lib/database.js";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
const server = express();

dotenv.config();

connect();

server.use(express.json());

// The secret value that is used to sign our JWTs, it should be kept secure!

const { SECRET } = process.env;

// REGISTERATION

server.post("/api/register", async (req, res) => {
  try {
    const user = await User.register(req.body);

    res.send(user);
  } catch (err) {
    res.send(err.message);
  }
});

//  login################

server.post("/api/login", async (req, res) => {
  const user = await User.login(req.body);

  if (!user) {
    return res.status(401).send({ err: "credential Invalid" });
  }

  //thi is the payload
  const payload = { _id: user._id };

  // This affects the JWT headers; how long will the JWT be valid for
  //this now is after 1 minute will be expired
  const options = { expiresIn: "1m" };

  const token = jwt.sign(payload, SECRET, options);

  res.send({ user, token });
});

const checkToken = (req, res, next) => {
  const tokenRaw = req.headers.authorization;
  if (!tokenRaw) {
    res.status(401).send(" access not allowed!!");
    return;
  }

  const token = tokenRaw.split(" ")[1];

  if (!token) {
    res.status(401).send(" access not allowed!!");
    return;
  }

  ///lets check theJWT if its valid /correct

  jwt.verify(token, SECRET, (err, payload) => {
    if (err) {
      res.status(401).send({message : err.message});
      return;
    }


req.userId = payload._id

next()
    
  });


  
};




const checkAdmin =async (req,res,next)=>{
const user =    await  User.findById ( req.userId)           

if(user.role==="admin"){

next()

return
}




res.status(401).send("u r not admin to access the list of users")
}



// ##########  get all the users

server.get("/api/users", checkToken, checkAdmin,async (req, res) => {
  const users = await User.find({});

  res.status(200).send(users);
});

// ##########  DELETE all the users

server.delete("/api/users", async (req, res) => {
  const users = await User.deleteMany({});

  res.status(200).send(users);
});

const PORT = process.env.PORT || 2999;

server.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`);
});
