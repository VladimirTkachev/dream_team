import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import App from "./Components/App";

const Main = () => (
    <Provider store={configureStore}>
        <App/>
    </Provider>
);

ReactDOM.render(<Main/>, document.getElementById("root"));
