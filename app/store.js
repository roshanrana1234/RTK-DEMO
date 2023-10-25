const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const userReducer = require("../features/users/userSlice");

// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cakE: cakeReducer,
    iceCreaM: iceCreamReducer,
    useR: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
