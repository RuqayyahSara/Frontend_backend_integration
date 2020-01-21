var express = require('express');
var router = express.Router();
const Count = require("../models/Count");
/* GET users listing. */

router.get("/count/:id", (req, res)=>{
    Count.findById(req.params.id,(err,data)=>{
      if(err)
      throw err;
      res.json(data);
    })
});

router.get("/count", (req, res)=>{
  Count.find({},(err,data)=>{
    if(err)
    throw err;
    res.json(data);
  })
});

router.post("/count", async (req, res)=>{
  try{
    let count = new Count(req.body);
    const savedb = await count.save();
    res.send(savedb);
  }catch(e){
    console.log(e);
  }
})

router.put("/:id", async (req, res)=>{
  try{
    let data = await Count.findByIdAndUpdate(req.params.id, 
      {$set:{count: req.body.count}},
     {new:true})
    res.send(data);
  }catch(err){
    console.log(err);
  }
})

// router.put("/:id",async (req,res)=>{
// try{
//   const update = {count: req.body.count};
//  const data = await Count.findOneAndUpdate({id:req.params.id},
//       { $set: update},
//       {$upsert: true});
//       res.json(data);
//  } catch(err){
//    res.send("Error in updating into database");
//  }
//  });

module.exports = router;