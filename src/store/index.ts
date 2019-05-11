import { createStore, compose, applyMiddleware, Store } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducers, { ReducersType } from "Project/reducers";
import { AuthorsActions } from "Project/actions/authors";

export type AllActions = AuthorsActions;

/**
 * Глобальный объект redux store
 */
    function createReduxStore() {
        const composeEnhancers = process.env.NODE_ENV === "development" &&
        (window && (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE) || compose;
    
        const store = createStore(
            reducers,
            {},
            composeEnhancers(
                applyMiddleware(
                  thunk,
                  createLogger()
                ),
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
    }
    
    export default createReduxStore();
