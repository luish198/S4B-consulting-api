import mongoose from 'mongoose';

//object relational mapping
const ClientSchema = new mongoose.Schema(
    {
        
        COMPANY_NAME : {required: true, type: String, unique: true},
        ADDRESS1 : {index: true, required:true, type:String},
        ADDRESS2 :  {index: true, type:String},
        TOWN : {index: true, required:true, type:String},
        COUNTY : {index: true, required:true, type:String},
        POST_CODE : {index: true, required:true, type:String},
        MAIN_CONTACT : {index: true, required:true, type:String},
        TEL : {index: true, required:true, type:Number},
        EMAIL : {index: true, required:true, type:String},
        EMAIL_2 : {index: true, type:String},
        TEL2 : {index: true, type:Number},
        MOBILE : {index: true, type:Number},
        WEBSITE : {index: true, type:String},
        TYPECO : {index: true, required:true, type:Number},
        GENERICMARKET_ID :{index: true, required:true, type:Number},
        COMARKET_ID :{index: true, required:true, type:Number},
        M_USER : {index: true, required:true, type:Number},
        TIME :{index: true, required:true, type: Date, default: Date.now},

    },
    { timestamps: true }
)

const Client = mongoose.model("Client", ClientSchema);
export default Client;








