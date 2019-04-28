import * as React from "react";
// import { Store } from "redux";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore, { IStore } from "./store";
import App from "./Components/App";

const Main: React.SFC<{}> = () => (
    <Provider store={configureStore}>
        <App/>
    </Provider>
);

ReactDOM.render(<Main/>, document.getElementById("root"));
// ReactDOM.render(<div>{123}</div>, document.getElementById("root"));
