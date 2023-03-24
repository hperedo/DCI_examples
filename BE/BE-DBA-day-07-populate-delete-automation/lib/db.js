import mongoose from 'mongoose'

const connect =()=>{

    const {DB_USER ,DB_PASS,DB_NAME,DB_HOST}  = process.env

  const connectionString = `mongodb+srv://${DB_USER}:${DB_PASS}${DB_HOST}/${DB_NAME}`
  mongoose.set('strictQuery', true)

mongoose.connect(connectionString)
.then(() => console.log('[DB]  Connected'))
.catch(err => console.log("[DB Err]",err))






}
export default connect