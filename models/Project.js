const { Schema, model, Types } = require('mongoose');

// Schema to create Project model
const pjSchema = new Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true,
            trim: true, 
        },
        image: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        imgalt: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        technology: {
            type: String,
            unique: false,
            required: true,
        },
        description: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        applink: {
            type: String,
            unique: true,
            required: false,
            trim: true,
        },
        repo: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        }
    },
    {
        // toJSON: {
        //     virtuals: true,
        // },
        id: false,
    },
);

const Project = model('project', pjSchema);

module.exports = Project;