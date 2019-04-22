import React from "react";
import { connect } from "react-redux";

import { getAuthors } from "../../reducers/authors";
import { getAuthors as getAuthorsAction } from "../../actions/authors";
import AuthorsList from "../Blocks/AuthorsList";

class AuthorsListContainer extends React.Component {
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
