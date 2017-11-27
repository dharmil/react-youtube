const initialState = {
    requests: 0
};

const ui = (state = initialState, action) => {
    switch(action.type) {
        case 'API_START':
            return {...state, requests: state.requests + 1};

        case 'API_DONE':
            return {...state, requests: state.requests - 1};

        default:
            return state;
    }
};

export default ui;