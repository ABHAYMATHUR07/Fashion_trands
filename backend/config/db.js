const mongoose = require('mongoose');
const connect_db =  async(req,res)=>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
       console.log(process.env.port);
    //    res.sucess(200).send({
    //     message:`database connected `
    //    }) 
       console.log(`Database is connected`.bgGreen.white);
    } 
    catch (error) {
    
        // res.sucess(504).send({
        //     message:`intrenal server error`,
        //     sucess:false,
        //     description:`database is not connected ${error}`
        // })
        console.log(`error ${error} ` );
    }
}
module.exports = connect_db;