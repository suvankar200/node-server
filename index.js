const app = require('express')();

const PORT = process.env.PORT || 5500;

app.get('/', (req,res)=>{
    res.json({
        success : true,
        message : "Server is Running Fine"
    })
})

app.listen(PORT, ()=>{
    console.log("Server is running on PORT : "+PORT);
})