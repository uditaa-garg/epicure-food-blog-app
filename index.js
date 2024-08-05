const express = require('express')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//123uditaagarg
//2O7LYjaTa10VqoA1

app.use(express.json());
app.use(cors());



async function main() {
    await mongoose.connect('mongodb+srv://123uditaagarg:2O7LYjaTa10VqoA1@epicure.ebwnbzk.mongodb.net/epicure?retryWrites=true&w=majority&appName=epicure');
    
   
    
}

main().then(()=> console.log("mongodb connected successfully!")).catch(err => console.log(err));


//routes

const ItemRoutes = require("./src/routes/ItemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute")
app.use('/api',ItemRoutes)
app.use('/api',CategoryRoutes)

app.get('/',(req,res)=>{
    res.send('Epicure Recipe app server')
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
