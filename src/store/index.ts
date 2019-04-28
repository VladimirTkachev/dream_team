import { Store, createStore, compose, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import * as process from "process";

import reducers from "../reducers";
import { IAuthorsState } from "../reducers/authors";

export interface IStore {
  authors: IAuthorsState;
}

/**
 * Глобальный объект redux store
 */
function createReduxStore(): Store<IStore> {
    // let composeEnhancers = compose;

    const composeEnhancers = process.env.NODE_ENV === "development" &&
      (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const store = createStore(
        reducers,
        undefined,
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
}


export default createReduxStore();

// export default function configureStore(): Store<types.AppState> {
//   const store = createStore(
//       rootReducer,
//       initialState,
//       compose(
//           applyMiddleware(
//               thunk,
//               createLogger()
//           ))
//       );
//   return store;
// }