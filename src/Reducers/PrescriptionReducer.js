const initialState = {
    isLoading:true,
    message:null
}

const prescriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRESCRIPTION":
            return {isLoading:false,message:action.payload}
        case "ADD_FAILURE_MESSAGE":
            return {isLoading:false,message:"Prescription already exists"}
        case "CLEAR_MESSAGE":
            return {...state, message:""}
        default:
            return state;
    }
}

export default prescriptionReducer;