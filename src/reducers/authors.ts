import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import authorConstants from "../constants/authors";
import { AuthorsActions } from "../actions/authors";
// import { IStore } from "../actions/authors";

export type IAuthor = {
    ID: number;
    FirstName: string;
    IDBook: number;
    LastName: string;
}

export interface IAuthorsState {
    authors: Array<IAuthor>;
    loading: boolean;
}

// export const getAuthors = (state = {}) => {
//     // const { authors: {authors} } = state;
//     const { authors } = state;

//     return authors ? authors.authors : [];
// }

const initialState = {
    /** Массив списков авторов */
    authors: [],
    loading: false,
};

export default (state: IAuthorsState = initialState, action: AuthorsActions) => {
    const { type } = action;

    switch (type) {
        case authorConstants.FETCHING_AUTHORS:
            return {
                ...state,
                loading: true,
            };
        case authorConstants.FETCH_AUTHORS:
            return {
                ...state,
                authors: action.payload,
            };
        case authorConstants.FETCH_AUTHORS_SUCCESS:
        case authorConstants.FETCH_AUTHORS_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}