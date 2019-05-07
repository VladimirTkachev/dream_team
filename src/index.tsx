import * as React from "react";
// import { Store } from "redux";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "Project/Components/App";
import { IAuthorsState } from "./reducers/authors";
import { AuthorsActions } from "./actions/authors";

// type AllActions = AuthorsActions;

// export interface IStore extends Store<AllStore, AllActions>

// const reduxStore: IStore = configureStore;

const Main = () => (
    <Provider store={configureStore}>
        <App/>
    </Provider>
);

ReactDOM.render(<Main/>, document.getElementById("root"));
// ReactDOM.render(<div>{123}</div>, document.getElementById("root"));
