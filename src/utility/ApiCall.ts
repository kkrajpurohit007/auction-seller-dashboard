import axios from "axios";

let baseURL = 'http://localhost:2500';
export default axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json"
    }
});