import React from "react";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import "./app.scss";

import AuthorsListContainer from "Project/Components/Containers/AuthorsListContainers";
import AuthorContainer from "Project/Components/Containers/AuthorContainer";

/**
 * Рутовый компнент
 */
class App extends React.Component<{},{}> {
    render() {
        return (
            <Router basename="/">
                <Route  path="/" exact component={() => <AuthorsListContainer />}/>
                <Route  path="/:id" component={AuthorContainer}/>
            </Router>
        );
    }
}

export default App;
