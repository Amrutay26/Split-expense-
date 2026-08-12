const mongoose=require('mongoose');

const invitationschema=mongoose.Schema({
 
invitedby : {
 type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

},
 
invitedmembers :[{
      user:{  type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
      },
        status:{
            type:String,
            enum: ['pending','accepted','rejected'],
            default:'pending'
        }
     }],

});

module.exports= mongoose.model('Invitation',invitationschema);