const calculatebalance=require('./calculateexp');
const maxheap=require('./maxheap')
const minheap=require('./minheap')
const groupmodel=require('../models/Group')
const payment=(req,res)=>{
    const id=req.body();
    const group=groupmodel.find(id);

   const balances= calculatebalance(group);

   balances.forEach(balance => {
    if(balance>0) {
        maxheap.insert(balance);
        maxheap.heapify();
    }
    else{
minheap.insert(balance);
minheap.heapify();
    } 

   });

   const paidby={};
   while(maxheap.length!=0 && minheap.length!=0){
 let positive=   abs(maxheap.maxvalue)
 let neg=abs(minheap.minvalue)
    if(pos<neg) {
        paidby.push(pos);
        let remain=abs(neg-positve);
        if(remain!=0) minheap.push(0-remain);
        minheap.heapify();
    }
   }
}