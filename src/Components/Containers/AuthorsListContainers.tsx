import React from "react";
import { connect } from "react-redux";

import { getAuthors, IAuthorsState } from "../../reducers/authors";
import { getAuthors as getAuthorsAction } from "../../actions/authors";
import AuthorsList from "../Blocks/AuthorsList";

interface IProps {
    authors: IAuthorsState;
    getAuthorsAction: ():
}

class AuthorsListContainer extends React.Component<IProps, {}> {
    componentDidMount() {
        const { getAuthorsAction } = this.props;

        getAuthorsAction();
    }

    render() {
        const { authors } = this.props;

        return (
            <AuthorsList items={authors}/>
        );
    }
}

const mapState = (state = {}) => {
    const authors = getAuthors(state);

    return {
        authors,
    }
}

export default connect(mapState, { getAuthorsAction })(AuthorsListContainer);
