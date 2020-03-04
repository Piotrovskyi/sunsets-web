const createReducer = (reducers, initialState) => (state = initialState, action) => {
    if (action.type in reducers) {
        return reducers[action.type](state, action)
    }
    return state
};

export default createReducer;
