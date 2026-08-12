const group= require('../models/Group');

function calculatebalance(group){
const balance={};

   group.members.forEach(m => {
        balance[m.toString()] = 0;
    });
group.expenses.forEach(exp => {
    const payer=exp.paidby.toString;
    exp.splits.forEach(split=>{
        const paidfor=split.user.toString;
        if(payer!=paidfor) {
            balance[paidfor]=balnce[paidfor]-split.share();
balance[paidby]=balance[paidby]+split.share();
        }
    })
});
return balance
}

module.exports=calculatebalance