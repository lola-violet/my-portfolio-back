const mongoose = require('mongoose');
const { Project } = require('../models');

module.exports = {

    // Get all projects
    getProjects(req, res) {
        Project.find({})
        .select('-__v')
        .then((projects) => res.json(projects))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // Create new project
    createProject(req, res) {
        Project.create(req.body)
        .then((project) => res.json(project))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
};