const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send("Welcome");
})
app.get('/conatact',(req, res) => {
    res.send("welcome to conatct page");
}); 

app.get('/number',(req, res) => {
    res.send("welcome to page");
}); 

const port = 5000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`); 
});