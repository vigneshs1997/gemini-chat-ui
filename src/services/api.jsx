import axios from "axios";
const API_URL = "http://localhost:8080/api/qna/ask"
export const fetchChatResponse = async (question) => { /*api file under services folder */
    try {
        /*axios is a 3rd party HTTP protocol*/
        const response = await axios.post(API_URL, { question });
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}