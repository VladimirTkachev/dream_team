import axios from "axios";
import { AUTHOR_URL } from "Project/config";

export const authors = {
    getAuthors: () => {
        return axios.get(AUTHOR_URL).then(res => res.data);
    }
}
