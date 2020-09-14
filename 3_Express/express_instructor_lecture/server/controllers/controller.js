module.exports = {
    generic: (req, res) => {
        res.json({ message: "success", data: [1,2,3] });
    },
    newData: (req, res) => {
        console.log(req.body);
        res.json({ message: "success", data: req.body });
        // req.body will contain the form data from Postman or from React
    }
}

/*
Getting data from the URL:

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon

app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json( users[req.params.id] );
});
*/


/*
Updating data with PUT request:

app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
});
*/


/*
Deleting data:

app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});
*/