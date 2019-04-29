import authorConstants from "../constants/authors";

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

export default (state = initialState, action) => {
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