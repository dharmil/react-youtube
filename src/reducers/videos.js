const videos = (state = [], action) => {
    switch(action.type) {
        case 'APPEND_VIDEOS':
            return [...state, ...action.payload];

        default: 
            return state;
    }
};

export default videos;