import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

import { getAuthors } from "../reducers/authors";
import { getAuthors as getAuthorsAction } from "../actions/authors";
import "./app.scss";

/**
 * Рутовый компнент
 */
class App extends React.Component {
    componentDidMount() {
        const { getAuthorsAction } = this.props;

        getAuthorsAction();
    }

    render() {
        const { authors } = this.props;

        return (
            <div className="app">
                <h1 className="app__title">
                    {"Test"}
                    {authors ?
                        authors.map((item, index) => (
                            <div key={index}>
                                {item.FirstName}
                            </div>
                        ))
                        : null
                    }
                </h1>
            </div>
        );
    }
}

const mapStateToProps = (state = {}) => {
    const authors = getAuthors(state);

    return {
        authors,
    }
}

export default connect(mapStateToProps, { getAuthorsAction })(App);
