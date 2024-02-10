const express=require('express');
const bodyParser=require('body-parser');
const cors = require("cors")
const { default: mongoose }=require('mongoose');
const route=require('./routes/route.js');

const app=express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://Avverma:Avverma95766@avverma.2g4orpk.mongodb.net/ipanGram", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',route);

app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});


