import { createStore, compose, applyMiddleware } from "redux";
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";
import reducers from "../reducers";

/**
 * Глобальный объект redux store
 */

function createReduxStore() {
    let composeEnhancers = compose;

    if (process.env.NODE_ENV === "development") {
      if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        console.warn("[i] [Services/Redux] Redux Devtools Extention is supported");
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
      } else {
        console.warn("[i] [Services/Redux] Redux Devtools Extention is not supported");
      }

    }

    const store = createStore(
        reducers,
        {},
        composeEnhancers(
            applyMiddleware(thunk, createLogger()),
        ),
    );

    if (process.env.NODE_ENV === "development") {
        /* Webpack Redux Hot Module Replacement */
        if (module.hot) {
          console.warn("[i] [Services/Redux] Webpack Redux Hot Module Replacement is supported");

          module.hot.accept("../reducers", () => {
            store.replaceReducer(require("../reducers").default);
          });
        }
      }

    return store;
};


export default createReduxStore();