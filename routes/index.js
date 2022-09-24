const router = require('express').Router();

// Project Routes
const projectRoutes = require('./projectRoutes');
router.use('/api/projects', projectRoutes);

module.exports = router;