import axios from "axios"
import { UserModel } from "../../../models/user-model";
import { createAdapterUser } from "../../../adapters/userAdapter";

export const fetchEndpoint = async (url: string) : Promise<UserModel | any> => {
    try {
        const response = await axios.get(url).then(response => response.data);
        const user = createAdapterUser(response)
        return user;

    } catch (error) {
        return error        
    }
}