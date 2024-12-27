import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDB from './Configure/connectDB.js'
import User  from './Model/user.js'
const app = express()
const port =3000
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
connectDB()
const corsOptions ={
    origin:"http://localhost:5173",
    
}
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username,password });
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }
   res.status(200)
}); 

app.use(cors(corsOptions))


app.listen(port,()=>{
    console.log("Server started");
    
})