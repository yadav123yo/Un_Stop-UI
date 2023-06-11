import * as types from "./actionTypes";

// Initial State of the application;
const state={
    isLoading:false,
    isError:false,
    matrix:[],
    booked:0
}

const reducer=(oldState=state,action)=>{
    const {type,payload}=action;
    switch(type){

        case types.MATRIX_GET_REQUEST:
            return {...oldState,isLoading:true};
        
        case types.MATRIX_GET_SUCCESS:
            return {...oldState,isLoading:false,matrix:payload.matrix,booked:payload.booked}

        case types.MATRIX_GET_FAILURE:
            return {...oldState,isLoading:false,isError:true}
        
        case types.UPDATE_PATCH_REQUEST:
            return {...oldState,isLoading:true};
        
        case types.UPDATE_PATCH_SUCCESS:
            return {...oldState,isLoading:false}
        
        case types.UPDATE_PATCH_FAILURE:
            return {...oldState,isLoading:false,isError:true}

        default:
            return oldState;
    }
}

export {reducer};