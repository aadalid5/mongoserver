const User = require('../models/model');

module.exports.test =  (req, res) => {
    res.send('Greetings from the Test controller!');
};

module.exports.create = (req,res) =>{    
    try{
        var user = new User({
            name : req.body.name,
            email : req.body.email,        
        });
        
        user.save(err=>{
            if (err)  return res.send(err);
            res.json(user);
        });
    } 
    catch (err) {res.send(err)}    
}; 

module.exports.estimate = (req, res)=>{    
    /* 
    User.findOne({name:req.body.name},(err, user)=>{
        if (err) return res.send(err);

        user.vote = req.body.vote;
        user.session++;
        user.save(err=>{
            if (err) return res.send(err);
            res.json(user);
        })
    });  
    */   
    User.findById(req.params.id, (err,user)=>{
        if (err) return res.send(err);

        user.vote = req.body.vote;
        //console.log(req.body);
        user.session++;
        //console.log(user)
        user.save(err=>{
            if (err) return res.send(err);
            res.json(user);
        })
    });
};


module.exports.read = (req, res) =>{
    User.find({}, (err, users) => {
        if (err) return res.send(err);

        res.send(users)
    });
};



module.exports.view = (req,res) =>{
    try{
        User.findById(req.params.id, (err, product)=> {
            if (err) return res.send(err);
            res.send(product);
        });
    }
    catch (err){
        res.send(err)
    }
    
};