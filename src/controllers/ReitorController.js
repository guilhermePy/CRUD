const mongoose = require('mongoose');

const Reitor = mongoose.model('Reitor');

module.exports = {
    async index(req, res) {
        const reitor = await Reitor.find();
        return res.json(reitor);
    },

    async show(req, res) {
        const reitor = await Reitor.findById(req.params.id);

        return res.json(reitor);
    },

    async store(req, res) {
        const reitor = await Reitor.create(req.body);

        return res.json(reitor);
    },

    async update(req, res) {
        const reitor = await Reitor.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(reitor);
    },

    async destroy(req, res) {
        await Reitor.findByIdAndRemove(req.params.id);

        return res.send();
    }
};