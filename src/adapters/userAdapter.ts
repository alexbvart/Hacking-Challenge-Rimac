import { EndpointUserModel, UserModel } from "../models/user-model"

export const createAdapterUser = (user: EndpointUserModel)=>{
    const formattedUsaer: UserModel = {
        id: user.id,
        name: user.name,
        email: user.email,
    };
    return formattedUsaer;
}