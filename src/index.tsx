import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "Project/Components/App";

const Main = () => (
    <Provider store={configureStore}>
        <App/>
    </Provider>
);

ReactDOM.render(<Main/>, document.getElementById("root"));
