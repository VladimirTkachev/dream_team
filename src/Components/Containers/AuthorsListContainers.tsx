import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk"

import { getAuthors as getAuthorsAction } from "Project/actions/authors";
import AuthorsList from "Project/Components/Blocks/AuthorsList";
import { ReducersType } from "Project/reducers";
import { getAuthors } from "Project/reducers/authors";

import data from "./data";

type Author = {
    ID: number;
    FirstName: string;
    IDBook: number;
    LastName: string;
}


type StateProps = {
    authors: Author[],
}

interface DispatchProps {
    getAuthorsAction: () => void;
}

type Props = StateProps & DispatchProps

class AuthorsListContainer extends React.Component<Props,{}> {
    // componentDidMount() {
    //     const { getAuthorsAction } = this.props;

    //     getAuthorsAction();
    // }

    render() {
        // const { authors: { authors = data } } = this.props;

        return (
            // <AuthorsList items={authors}/>
            <AuthorsList items={data}/>
        );
    }
}

const mapState = (state: ReducersType, {}): StateProps => {
    const authors = getAuthors(state);

    return {
        authors,
    }
}

// (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps

const mapDispatch = (dispatch: ThunkDispatch<ReducersType, {}, any>, ownProps: {}): DispatchProps => ({
    getAuthorsAction: () => dispatch(getAuthorsAction())
  });

export default connect<StateProps, DispatchProps, {}>(mapState, mapDispatch,)(AuthorsListContainer);
// export default AuthorsListContainer;
