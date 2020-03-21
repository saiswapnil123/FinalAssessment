const connect = require('../Database/Database');
const Select = ()=>{
    return new Promise((resolve,reject)=>{
        connect.query(`select * from Customer;`,(err,res)=>{
        if(res)
        resolve(res);
        else
        reject(err);
        });
    })
}
const Insert = (FirstName, LastName, Address, City, State, Email)=>{
    console.log(FirstName);
    return new Promise((resolve,reject)=>{
        console.log("In service");
        connect.query(`insert into Customer values('${FirstName}','${LastName}','${Address}','${City}','${State}','${Email}');`,(err,res)=>{
        if(err){
            console.log("error");
            reject(err);
        }
        else{
            console.log("inserted");
            resolve(res);
        }
        });
        
    })
}
const Update = (FirstName,LastName,Address,City,State,Email)=>{
    console.log(FirstName,LastName,Address,City,State,Email);
    return new Promise((resolve,reject)=>{
        console.log(FirstName);
              connect.query(`update Customer set LastName = '${LastName}' where FirstName = '${FirstName}'`),(err,res)=>{
        if(res){    
            console.log("updated"); 
            resolve(res);
            
        }
        else{
            console.log("error");
        reject(err);
        }
        }
    });
}

const Delete = (FirstName)=>{
    console.log(FirstName);
    return new Promise((resolve,reject)=>{
        connect.query(`delete from Customer where FirstName = '${FirstName}';`,(err,res)=>{
        if(res){
        console.log("deleted");
        resolve(res);
        }
        else
        reject(err);
        });
        
    })
}
module.exports = {Select, Insert, Update, Delete};