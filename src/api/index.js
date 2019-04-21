import axios from "axios";
import { AUTHOR_URL } from "../config";

export const autors = {
    getAuthors: () => {
        return axios.get(AUTHOR_URL).then(res => res.data);
    }
}
