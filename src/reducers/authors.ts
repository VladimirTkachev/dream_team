import { ActionCreator, Dispatch, Action, AnyAction, Reducer } from 'redux';

import { ReducersType } from "Project/reducers";
import { AuthorsActions } from '../actions/authors';
import {
    FETCHING_AUTHORS,
    FETCH_AUTHORS,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_ERROR,
} from "Project/constants/authors";

export const getAuthors = (state: ReducersType) => {
    // const { authors: {authors} } = state;
    const { authors } = state;

    return authors ? authors.authors : [];
}

export type IAuthor = {
    ID: number;
    FirstName: string;
    IDBook: number;
    LastName: string;
  }

export type IAuthorsState = {
    authors: IAuthor[];
    loading: boolean;
}

const initialState = {
    /** Массив списков авторов */
    authors: [],
    loading: false,
};

const authorsReducer = (state: IAuthorsState = initialState, action: AuthorsActions): IAuthorsState => {
    switch (action.type) {
        case FETCHING_AUTHORS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_AUTHORS:
            return {
                ...state,
                authors: action.payload,
            };
        case FETCH_AUTHORS_SUCCESS:
        case FETCH_AUTHORS_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default authorsReducer;