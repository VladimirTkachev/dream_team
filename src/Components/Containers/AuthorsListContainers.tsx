import React from "react";
// import { connect } from "react-redux";
// import { getAuthors as getAuthorsAction } from "Project/actions/authors";
import AuthorsList from "Project/Components/Blocks/AuthorsList";
import data from "./data";

type Author = {
    ID: number;
    FirstName: string;
    IDBook: number;
    LastName: string;
}

type Props = {
    authors: {
        authors: Author[],
        loading: boolean
    }
}

class AuthorsListContainer extends React.Component<Props,{}> {
    // componentDidMount() {
    //     const { getAuthorsAction } = this.props;

    //     getAuthorsAction();
    // }

    render() {
        const { authors: { authors = data } } = this.props;

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

// const mapState = ({ authors }) => {
//     // const authors = getAuthors(state);

//     return {
//         authors,
//     }
// }

// const mapDispatch = (dispatch) => ({
//     getAuthorsAction: () => dispatch(getAuthorsAction())
//   });

// export default connect(mapState, mapDispatch)(AuthorsListContainer);
export default AuthorsListContainer;
