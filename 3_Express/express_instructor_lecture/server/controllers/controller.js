module.exports = {
    generic: (req, res) => {
        res.json({ message: "success", data: [1,2,3] });
    },
    newData: (req, res) => {
        console.log(req.body);
        res.json({ message: "success", data: req.body });
    }
}