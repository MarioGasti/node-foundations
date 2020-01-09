exports.helloWorld = (req, res) => {
    res.send({
        message: 'Hello World!'
    });
};

exports.helloWorldPost = (req, res) => {
    let id = req.body.id;
    res.send({
        id,
        message: 'Hello World!'
    });
};