import thunk from "redux-thunk";
const { legacy_createStore, applyMiddleware, compose } = require("redux");
const { reducer } = require("./reducer");

// allows to use devtools to debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export {store};