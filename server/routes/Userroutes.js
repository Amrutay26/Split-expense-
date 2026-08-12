const router=require("express").Router();
const usercontroller=require('../controllers/usercontroller');

router.get('/search',usercontroller);

module.exports=router;