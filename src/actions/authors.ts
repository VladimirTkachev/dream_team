// import { Dispatch } from 'redux'
import {  ThunkDispatch as Dispatch } from "redux-thunk";

import authorConstants from "../constants/authors";
import { autors } from "../api";
import { IAuthor } from "../reducers/authors";

export type IFetchingAuthors =  {
    type: string;
}

export type IFetchAuthors =  {
    type: string;
    payload: Array<IAuthor>;
}

export type IFetchAuthorsSuccess =  {
    type: string;
}

export type IFetchAuthorsError =  {
    type: string;
}


const fetchingAuthors = (): IFetchingAuthors => ({
    type: authorConstants.FETCHING_AUTHORS,
});

const fetchAuthors = (authors: Array<IAuthor> = []): IFetchAuthors => ({
    type: authorConstants.FETCH_AUTHORS,
    payload: authors,
});

const fetchAuthorsSuccess = (): IFetchAuthorsSuccess => ({
    type: authorConstants.FETCH_AUTHORS_SUCCESS,
});

const fetchAuthorsError = (): IFetchAuthorsError => ({
    type: authorConstants.FETCH_AUTHORS_ERROR,
});

export const getAuthors = () => (dispatch: Dispatch): Promise<IAuthor[]> => {
    dispatch(fetchingAuthors);

    return autors.getAuthors()
        .then(res => {
            dispatch(fetchAuthorsSuccess);

            return dispatch(fetchAuthors(res));
        })
        .catch(err: viod => {
            dispatch(fetchAuthorsError);
        });
}
