const router = require('express').Router();
const { auth } = require('../middleware/auth');
const projectController = require('../controllers/project.controller');

router.get('/', auth, projectController.getAllProjects);
router.get('/:id', auth, projectController.getProjectById);
router.post('/', auth, projectController.createProject);
router.put('/:id', auth, projectController.updateProject);
router.delete('/:id', auth, projectController.deleteProject);

module.exports = router;
