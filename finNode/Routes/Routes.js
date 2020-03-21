var service = require('../Servers/server');
var express = require('express');
var Router = express.Router();

Router.get('/select', async(req,res)=>{
    console.log("In select");
    try{
    const result = await service.Select();
    res.send(result);
    }
    catch(error)
    {
        res.send(error);
    }
    
})
Router.post('/insert', async(req,res)=>{
    console.log("Before Try");
    firstName = req.body.FirstName;
    LastName = req.body.LastName;
    Address= req.body.Address;
    City = req.body.City;
    State = req.body.State;
    Email = req.body.Email;
    console.log(firstName);
    try
        {            
            const result = await service.Insert(firstName,LastName,Address,City,State,Email);
            if(result)
                res.send(result);
        }
        catch(error)
        {
            res.send(error);
        }
    
});
Router.delete('/delete/:FirstName', async(req,res)=>{
    console.log(req.params.FirstName);
    try{
        id = req.params.FirstName;
    const result = service.Delete(id);
    if(result)
        res.send({"msg" : "deleted"});
    }
    catch(error)
    {
        console.log("error");
        res.send(error);
    }
})

Router.put('/update/:FirstName', async(req,res)=>{
    try{
        console.log("In try");
        FirstName= req.params.FirstName;
        LastName = req.body.LastName;
        Address = req.body.Address;
        City = req.body.City;
        State = req.body.State;
        Email = req.body.Email;
    const result = service.Update(FirstName,LastName,Address,City,State,Email);
    if(result)
    res.send({"msg" : "Updated"});
    }
    catch(error)
    {
        res.send(error);
    }
    
})

module.exports = Router;