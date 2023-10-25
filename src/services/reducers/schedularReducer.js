import { GET_DELEVERY_SCHEDULE, GET_DELEVERY_SCHEDULE_FAILED, GET_DELEVERY_SCHEDULE_SUCCESS } from "../constants/schedularConstants";

const initailState = {
    isLoading: false,
    schedulers: [],
    error: null
}

const schedularReducer = (state = initailState, action) => {
    switch (action.type) {
        case GET_DELEVERY_SCHEDULE:
            return {
                ...state,
                isLoading: true
            } 
        case GET_DELEVERY_SCHEDULE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                schedulers: action.payload
            }  
        case GET_DELEVERY_SCHEDULE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                schedulers: []
            }  

        default:
            return state;
    }
}

export default schedularReducer;