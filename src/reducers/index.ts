import { combineReducers } from "redux";

import authors, { IAuthorsState } from "Project/reducers/authors";

export type ReducersType = {
    authors: IAuthorsState;
};

export default combineReducers({
    authors
});