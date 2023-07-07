import axios from "axios";

let baseURL = 'https://my-json-server.typicode.com/kkrajpurohit007/mockup';
export default axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json"
    }
});
