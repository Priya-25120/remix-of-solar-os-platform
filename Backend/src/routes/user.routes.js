const router = require('express').Router();
const { auth, adminOnly } = require('../middleware/auth');
const userController = require('../controllers/user.controller');

router.get('/', auth, adminOnly, userController.getAllUsers);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, adminOnly, userController.deleteUser);

module.exports = router;
