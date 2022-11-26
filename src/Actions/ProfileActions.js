import api from "../Api/api"

export const fetchProfile = () => async(dispatch) => {
    try {
        const {data} = await api.get('/doctor/profile')
       
        dispatch({
            type:"FETCH_PROFILE",
            payload:{
                name:data.name,
                email:data.email,
                img:data.imageUrl
            }
        })
    } catch (error) {
        console.log(error)
    }
}