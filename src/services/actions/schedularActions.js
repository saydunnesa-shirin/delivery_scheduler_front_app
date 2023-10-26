import axios from "axios";
import { GET_DELEVERY_SCHEDULE, GET_DELEVERY_SCHEDULE_API_URL, GET_DELEVERY_SCHEDULE_FAILED, GET_DELEVERY_SCHEDULE_SUCCESS } from "../constants/schedularConstants";


export const getAllDeliverySchedule = (postalCode, productId) => async(dispatch) => {
    dispatch({type: GET_DELEVERY_SCHEDULE});
    try {
        
        const response = await axios.post(GET_DELEVERY_SCHEDULE_API_URL, {
            "postalCode": postalCode,
            "productIds": [productId]
        } , {mode:'cors'});


        // const response = await axios.get(GET_DELEVERY_SCHEDULE_API_URL, {mode:'cors'});

        dispatch({type: GET_DELEVERY_SCHEDULE_SUCCESS, payload: response.data});

    } catch (error) {
        dispatch({type: GET_DELEVERY_SCHEDULE_FAILED, payload: error.message});
    }
} 

