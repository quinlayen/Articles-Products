const express = require('express');
const router = express.Router();


router.use(require('./products'));
router.use(require('./articles'));

router.get('/', (req,res)=>{
    console.log('get home')
})

module.exports = router;