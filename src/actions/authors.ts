import {
    FETCHING_AUTHORS,
    FETCH_AUTHORS,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_ERROR,
} from "Project/constants/authors";
import { authors } from "Project/api";
import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch, Action } from 'redux';

type IAuthor = {
    ID: number;
    FirstName: string;
    IDBook: number;
    LastName: string;
}

export interface IFetchingAuthors extends Action<FETCHING_AUTHORS> {}
export interface IFetchAuthors extends Action<FETCH_AUTHORS> {
    payload: IAuthor[];
}
export interface IFetchAuthorsSuccess extends Action<FETCH_AUTHORS_SUCCESS> {}
export interface IFetchAuthorsError extends Action<FETCH_AUTHORS_ERROR> {}

export type IGetAuthorsResult = IFetchAuthors | IFetchAuthorsError

export type AuthorsActions =
    | IFetchingAuthors
    | IFetchAuthors
    | IFetchAuthorsSuccess
    | IFetchAuthorsError;

const fetchingAuthors = (): IFetchingAuthors => ({
    type: FETCHING_AUTHORS,
});

const fetchAuthors = (authors: IAuthor[] = []): IFetchAuthors => ({
    type: FETCH_AUTHORS,
    payload: authors,
});

const fetchAuthorsSuccess = (): IFetchAuthorsSuccess => ({
    type: FETCH_AUTHORS_SUCCESS,
});

const fetchAuthorsError = (): IFetchAuthorsError => ({
    type: FETCH_AUTHORS_ERROR,
});

export const getAuthors: ActionCreator<
    ThunkAction<Promise<IGetAuthorsResult>, IAuthor[], null, IGetAuthorsResult>
> = () => (dispatch: Dispatch) => {
    dispatch(fetchingAuthors());

    return authors.getAuthors()
        .then(res => {
            dispatch(fetchAuthorsSuccess());

            return dispatch(fetchAuthors(res));
        })
        .catch((err) => {
            return dispatch(fetchAuthorsError());
        });
}
