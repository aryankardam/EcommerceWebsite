const userCtrl = require('../controllers/userCtrl')
const router = require('express').Router()
const auth = require('../middleware/auth');


router.post('/register',userCtrl.register)
router.post('/login',userCtrl.login)
router.get('/logout',userCtrl.logout)
router.get('/refresh_token',userCtrl.refreshtoken)
router.get('/infor',auth,userCtrl.getUser)
router.patch('/addcart', auth, userCtrl.addCart);
 

module.exports = router