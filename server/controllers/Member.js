const Member = require('../models/Member');

exports.getAllMembers = (req, res, next) => {
    Member.find()
    .then(newMember => 
        res.status(200).json(newMember))
    .catch(error => 
        res.status(400).json({ error }));
}

exports.addMember = (req, res, next) => {
    const newMember = new Member({
        name: req.body.name
    })
    newMember.save()
    .then(() => res.status(201).json({ newMember, message: 'New member saved !' }))
    .catch(error => res.status(400).json({ error }));
}