import axios from "axios";

let baseURL = 'http://172.31.33.14:2500';
export default axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json"
    }
});
