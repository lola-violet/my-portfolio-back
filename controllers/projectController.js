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

    // Update existing project by ID
    updateProject(req, res) {
        Project.findOneAndUpdate(
            { _id: req.params.projectId },
            { $set: req.body },
        )
        .then((updPj) => {
            !updPj  
                ? res.status(404).json({ msg: "No project with that ID" })
                : res.json(updPj)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // Delete existing project by ID
    deleteProject(req, res) {
        Project.findOneAndDelete({ _id: req.params.projectId })
        .then((delPj) => {
            !delPj
                ? res.status(404).json({ msg: "No project with that ID" })
                : res.json(delPj)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
};