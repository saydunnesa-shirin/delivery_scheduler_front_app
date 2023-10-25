import axios from "axios";
import { GET_DELEVERY_SCHEDULE, GET_DELEVERY_SCHEDULE_API_URL, GET_DELEVERY_SCHEDULE_FAILED, GET_DELEVERY_SCHEDULE_SUCCESS } from "../constants/schedularConstants";


export const getAllDeliverySchedule = () => async(dispatch) => {
    dispatch({type: GET_DELEVERY_SCHEDULE});
    try {
        // axios.defaults.withCredentials = true;
        // const response = await axios.get(GET_DELEVERY_SCHEDULE_API_URL);



        const response = await axios.get(GET_DELEVERY_SCHEDULE_API_URL, {mode:'cors'});

        dispatch({type: GET_DELEVERY_SCHEDULE_SUCCESS, payload: response.data});

    } catch (error) {
        dispatch({type: GET_DELEVERY_SCHEDULE_FAILED, payload: error.message});
    }
} 

