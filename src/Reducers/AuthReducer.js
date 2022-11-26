const initialState = {
    token:null,
    error:''
}


const authReducer = (state=initialState,action) => {
    switch(action.type){
        case "SIGN_IN":
            return {token:action.payload,error:''}
        case "SIGN_OUT":
            return {token:null,error:""}
        case "ADD_ERROR":
            return {...state,error:action.payload}
        case "SIGN_UP":
            return {...state,error:""}
        case "CLEAR_ERROR":
            return {...state,error:""}

        default:
            return state;

    }
}

export default authReducer