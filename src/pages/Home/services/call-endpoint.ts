import axios from "axios"

export const callEndpoint = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users/4").then(response => response.data);
}