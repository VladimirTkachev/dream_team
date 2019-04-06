import React from "react";
import PropTypes from "prop-types";
import "./app.scss";

/**
 * Рутовый компнент
 */
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1 className="app__title">
                    {"Test"}
                </h1>
            </div>
        );
    }
}

export default App;
