const router = require('express').Router();
const { auth } = require('../middleware/auth');
const customerController = require('../controllers/customer.controller');

router.get('/', auth, customerController.getAllCustomers);
router.get('/:id', auth, customerController.getCustomerById);
router.post('/', auth, customerController.createCustomer);
router.put('/:id', auth, customerController.updateCustomer);
router.delete('/:id', auth, customerController.deleteCustomer);

module.exports = router;
