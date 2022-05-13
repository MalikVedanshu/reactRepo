import mongoose from "mongoose";

async function dbConnect(){
    try {

        await mongoose.connect('mongodb+srv://docexp:UXJ6Q1f9JXsFlHIO@cluster0.oqm2c.mongodb.net/test')
        console.log('mongodb is connected');
    }
    catch(error){
        console.error(error);
    }
}
// dbConnect();
export default dbConnect;