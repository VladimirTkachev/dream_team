import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { IAuthorsState } from "../../reducers/authors";
import { getAuthors as getAuthorsAction } from "../../actions/authors";
import AuthorsList from "../Blocks/AuthorsList";
import { IAuthor } from "../../reducers/authors";
import { AuthorsActions } from "../../actions/authors";
import { IStore } from "../../store";
import { autors } from '../../api/index';

interface IProps {
    authors: IAuthorsState;
    getAuthorsAction: () => Promise<IAuthor[]>
}

class AuthorsListContainer extends React.Component<IProps, {}> {
    componentDidMount() {
        const { getAuthorsAction } = this.props;

        getAuthorsAction();
    }

    render() {
        const { authors: { authors } } = this.props;

        return (
            <AuthorsList items={authors}/>
        );
    }
}

// const mapState = (state = {}) => {
//     const authors = getAuthors(state);

//     return {
//         authors,
//     }
// }

const mapState = ({ authors }: IStore): { authors: IAuthorsState } => {
    // const authors = getAuthors(state);

    return {
        authors,
    }
}

const mapDispatch = (dispatch: ThunkDispatch<IStore, void, AuthorsActions>) => ({
    getAuthorsAction: () => dispatch(getAuthorsAction())
  });

export default connect(mapState, mapDispatch)(AuthorsListContainer);
