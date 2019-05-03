import { createStore, compose, applyMiddleware, Store } from "redux";
import { createLogger } from 'redux-logger';
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import * as process from "process";

import reducers from "Project/reducers";
import { IAuthorsState } from "Project/reducers/authors";
import { AuthorsActions } from "Project/actions/authors";

// type ReduxStore = {
//     authors: IAuthorsState;
// }

// type AllActions =
//   AuthorsActions


// const composeEnhancers = composeWithDevTools({
//   // Specify here name, actionsBlacklist, actionsCreators and other options
// });

// const middlewares = applyMiddleware(
//   thunk as ThunkMiddleware<{}, AllActions>,
//   createLogger()
// );

// const store = createStore(
//   reducers,
//   composeEnhancers(
//     middlewares,
//     // other store enhancers if any
//   )
// );

// export interface IStore {
//   authors: IAuthorsState
// }

// const configureStore = (initialState?: IStore) => {
//   return createStore(
//       reducers,
//       {},
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// };

const store = createStore(reducers, applyMiddleware(thunk));


export default store;