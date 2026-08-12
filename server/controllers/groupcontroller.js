const groupmodel=require('../models/Group');
const usermodel=require('../models/User');
const invitationmodel=require('../models/Invitation')
const creategroup=async(req,res)=>{
    try{
const {description,createdby} =req.body;

const group=await groupmodel.create({description,createdby});
res.status(201).json(group);
}
catch(err){
        res.status(500).json(err);
}
}

const sendreq=async(req,res)=>{
 try{
const {invitedby,invitedmembers} =req.body;

const invitation=await invitationmodel.create({invitedby,invitedmembers});
   res.status(201).json(invitation);
 }
 catch(err){
    res.status(500).json({message : err});
   
 }
    
}

const acceptreq=async(req,res)=>{
    try{
 const {invitationId}=req.body;

 const invitation= await invitationmodel.findById(invitationId);
 if (!invitation) {
      return res.status(404).json({ message: "Invitation not found" });
    }
 invitation.status='accepted';
 await invitation.save();

 const member=await groupmodel.create(inivitationid);
    res.status(200).json(invitation);
    }
catch(err){
res.status(500).json(err);
}
}
const cancelreq=async(req,res)=>{
    try {
const {invitationId}= req.body;
const invitation= await invitationmodel.findByIdAndDelete(invitationId);

 if (!invitation){
      return res.status(404).json({message :"Invitation not foudn"});
    }

    res.status(200).json({message: "User rejected"});
  }
   catch (err) {
   
    res.status(500).json({ error: "Something went wrong" });
  }

}