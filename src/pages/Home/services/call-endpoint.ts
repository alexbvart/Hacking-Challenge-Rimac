import axios from "axios"
import { UserModel } from "../../../models/user-model";

export const callEndpoint = async () : Promise<UserModel | any> => {
    try {
        return axios.get("https://jsonplaceholder.typicode.com/users/4").then(response => response.data);
    } catch (error) {
        return error        
    }
}