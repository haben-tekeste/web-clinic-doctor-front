import api from "../Api/api"

export const fetchReviews = () => async(dispatch) => {
    try {
        const {data} = await api.get('/doctor/reviews');
        dispatch({
            type:'FETCH_REVIEWS',
            payload:data
        })
    } catch (error) {
        
    }
}