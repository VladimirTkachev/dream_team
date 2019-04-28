import { combineReducers } from "redux";
import authors from "./authors";
import { IStore } from "../store";

export default combineReducers<IStore>({
    authors
});
