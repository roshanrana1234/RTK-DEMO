const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCakes: 10,
};

const { reducer, actions } = createSlice({
  name: "caKe",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

module.exports = reducer;
module.exports.cakeActions = actions;
