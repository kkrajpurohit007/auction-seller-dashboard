import axios from "axios";

let baseURL = 'http://3.6.67.210:2500';
export default axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json"
    }
});
