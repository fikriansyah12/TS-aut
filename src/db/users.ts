import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : { type : String, required: true },
    email: { type : String, required: true},
    authentication : {
        password: { type: String, select: true},
        salt : { type: String, select: false},
        sessionToken:{ type: String, select: false},
    },
})

export const userModel = mongoose.model('User, UserSchema');

export const getUsers = () => userModel.find();
export const getUserByEmail = (email: string) => userModel.findOne({ email });
export const getUserBySesionToken = ( sessiontoken: string) => userModel.findOne    ({'authentication.sessionToken': sessiontoken,
    });

    export const getUserById = (id : string )=> userModel.findById({id});
    export const createUser = (values:Record<string, any>) => new userModel(values)
    .save().then(( user: { toObject: () => any; } ) => user.toObject());
    export const deleteUserById = ( id:String ) => userModel.findOneAndDelete({ _id: id});
    export const updateUserbyId = ( id:String, values: Record<string, any>) => userModel.findByIdAndUpdate(id, values);