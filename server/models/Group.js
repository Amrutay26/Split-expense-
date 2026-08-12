const mongoose=require('mongoose');
const User = require('./User');

const groupSchema=mongoose.Schema({

  groupid:{
type:String,
required:true
  },
    description:{
        type:String
    },
     members :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
     }],
  expenses: [{
  description: String,
  paidBy: { 
   type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
   },
  totalAmount: {
    type: Number, required: true 
   },
  splits: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    share: { type: Number, required: true }
  }],
  date: { type: Date, default: Date.now }
}]
});

module.exports=mongoose.model('Group',groupSchema);