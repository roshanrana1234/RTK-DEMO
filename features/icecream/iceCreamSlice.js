const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfIceCreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecreaM",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ["caKe/ordered"]: (state, action) => {
  //       state.numberOfIceCreams--;
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numberOfIceCreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.iceCreamActions = icecreamSlice.actions;
