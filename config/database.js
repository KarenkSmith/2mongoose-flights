var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/flights",
    {useNewUrlParser: true}
);

var db = mongoose.connection;

db.on("connected", function () {
    console.log(`connected at ${db.host}:${db.port}`);
})