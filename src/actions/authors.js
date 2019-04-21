import authorConstants from "../constants/authors";
import { autors } from "../api";

const fetchingAuthors = () => ({
    type: authorConstants.FETCHING_AUTHORS,
});

const fetchAuthors = (authors = []) => ({
    type: authorConstants.FETCH_AUTHORS,
    payload: authors,
});

const fetchAuthorsSuccess = () => ({
    type: authorConstants.FETCH_AUTHORS_SUCCESS,
});

const fetchAuthorsError = () => ({
    type: authorConstants.FETCH_AUTHORS_ERROR,
});

export const getAuthors = () => dispatch => {
    dispatch(fetchingAuthors);

    return autors.getAuthors()
        .then(res => {
            dispatch(fetchAuthorsSuccess);

            return dispatch(fetchAuthors(res));
        })
        .catch(err => {
            dispatch(fetchAuthorsError);
        });

}