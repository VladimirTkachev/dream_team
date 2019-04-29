import * as React from "react";
// import { Store } from "redux";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import configureStore from "./store";
import App from "Project/Components/App";

{/* <Provider store={configureStore}> */}
{/* </Provider> */}
const Main = () => (
    <App/>
);

ReactDOM.render(<Main/>, document.getElementById("root"));
// ReactDOM.render(<div>{123}</div>, document.getElementById("root"));
