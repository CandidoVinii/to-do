const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@todolist.4xfja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log("MongoDB atlas conectado!"))
    .catch((err) => console.log(err))
};

module.exports = connectToDb;