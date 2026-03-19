const router = require('express').Router();
const { auth } = require('../middleware/auth');
const leadController = require('../controllers/lead.controller');

router.get('/', auth, leadController.getAllLeads);
router.get('/:id', auth, leadController.getLeadById);
router.post('/', auth, leadController.createLead);
router.put('/:id', auth, leadController.updateLead);
router.delete('/:id', auth, leadController.deleteLead);

module.exports = router;
