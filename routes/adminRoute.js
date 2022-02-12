var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const passport = require('passport');

// https://git.heroku.com/cbt-testt.git

/** All post request *//////////////////////////////////////////////

// register staff or student route
router.post('/register', userController.register)

// login staff
router.post('/login', userController.login)

// add subject
router.post('/create-subject', userController.addSubject)

// /** All get request *///////////////////////////////////////////////////////////////

// get single user
router.get('/get-single-user', userController.singleUser)

// get single user
router.get('/get-all-user', userController.allUsers)

router.get('/get-subject', userController.getSubject)
// /** All put request *//////////////////////////////////////////////////////////

// edit single student
router.put('/edit-user', userController.editUser)

// // passport.authenticate("jwt.admin",{session:false}),

// set profile pic
router.put('/set-profile-pic',  userController.setProfilePic);

// add question
router.put('/add-question', userController.addQuestion)


// remove question
router.put('/remove-question', userController.removeQeustion)


// change password
router.post('/change-password', userController.changePassword)

// take test
router.post('/take-test', userController.takeTest)



// /** All delete request *////////////////////////////////////////////////////

// delete single student
router.delete('/delete-user', userController.removeUser)

// delete subject
router.delete('/delete-subject', userController.removeSubject)

module.exports = router;