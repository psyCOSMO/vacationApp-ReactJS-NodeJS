const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case 'SET_DATA': {
            return {
                ...state,

                vacation: { ...action.payload },
                error: false
            };
        }
        case 'SET_ERROR': {
            return {
                ...state,
                isLoading: false,
                error: true
            };
        }
        case 'SET_FIELD': {
            return {
                ...state,
                vacation: {
                    ...state.vacation,
                    [action.fieldName]: action.payload,
                }
            };
        }
        case 'SET_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                error: false,
            };
        }
        default:
            return state;
    }
}

export default Reducer;