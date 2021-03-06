const Test = require('../models/models');
// const { Test, Model2, Model3 } = require('../models/models')

module.exports = { 
    create: (req, res) => {
        // if using shell: db.demo_db.insert(...)
        // Test.create({ name: "Taylor", age: 101, email: "taylor@email.com" })
        Test.create(req.body)  // req.body is how we get info submitted thru a form
            .then(data => res.json(data))  // data is the newly created object in DB
            .catch(err => res.json(err));
            // .catch(err => console.log(err));
    },

    findAll: (req, res) => {
        Test.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    find: (req, res) => {
        Test.findOne({ _id: req.params.id })  
        // will return the first thing that matches the query
        // _id is automatically put on every document created in the DB
        // params.id comes from what we're passing thru in the URL in routes.js
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    update: (req, res) => {
        Test.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, useFindAndModify: false })
        // validations don't run on updates unless you include { runValidators: true }
        // just updateOne() doesn't return the object; findOneAndUpdate with useFindAndModify returns the object
        /* for future assignments:
        .then(data => {
            // execute other code here (i.e. making other queries/chaining methods)
            res.json(data)
        })
        */
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },

    delete: (req, res) => {
        Test.findOneAndDelete({ _id: req.params.id })
        // returns object deleted from DB but it still deleted it
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    }
}

/* MORE EXAMPLES:

module.exports.findAllUsers = (req, res) => {
    User.find()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ user: oneSingleUser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

*/