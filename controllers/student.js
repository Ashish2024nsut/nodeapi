
exports.handlepost = (req,res)=>{
    res.json({"message":"click below to get your data"});
}

exports.printUserDetails = (req,res)=>{
   res.json({id: 1,
            "name":"Ashish",
            "age":20});
}