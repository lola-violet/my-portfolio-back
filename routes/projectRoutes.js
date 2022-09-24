const router = require('express').Router();

const {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
} = require('../controllers/projectController');


// Get all Projects: /api/projects
router.route('/').get(getProjects);

// Create new Project: /api/projects
router.route('/').post(createProject);

// Update existing Project by ID: /api/projects/:id
router.route('/:projectId').put(updateProject);

// Delete existing Project by ID: /api/projects/:id
router.route('/:projectId').delete(deleteProject);

module.exports = router;