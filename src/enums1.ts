const express = require("express");
const app = express()

enum ResponseStatus{
    Success = 200,
    Error = 500,
    NotFound = 411
}


app.get("/",function(req,res){

    if(!req.query.userId){
        res.status(ResponseStatus.NotFound).json({})
    }

    res.status(ResponseStatus.Error).json({})
})

app.listen(3000)