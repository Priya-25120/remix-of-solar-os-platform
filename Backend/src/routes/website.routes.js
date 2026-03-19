const router = require('express').Router();
const { auth, adminOnly } = require('../middleware/auth');
const websiteController = require('../controllers/website.controller');

// Public route - anyone can view website content
router.get('/', websiteController.getContent);

// Protected route - only admin can update
router.put('/', auth, adminOnly, websiteController.updateContent);

module.exports = router;
