const mongoose = require("mongoose");

async function main(params) {
    
    try {
        //mongoose.set("stricyQuery", true)

        await mongoose.connect("mongodb+srv://pedrolucasdev032:ZOuqxzZBjSGpFjye@cluster0.tyxbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    
        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(error);
    };

}

module.exports = main