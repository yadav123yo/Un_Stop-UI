import * as types from "./actionTypes";
import axios from "axios";

const URL="http://localhost:8080/";

const Get_Request=()=>{
    return{
        type:types.MATRIX_GET_REQUEST
    }
}
const Get_Success=(payload)=>{
    return{
        type:types.MATRIX_GET_SUCCESS,
        payload
    }
}

const Get_Failure=()=>{
    return{
        type:types.MATRIX_GET_FAILURE
    }
}

// Get_Matrix is used to perform GET API call, and sets matrix data in the redux-store(global state)
const Get_Matrix=(dispatch)=>{
    dispatch(Get_Request());
    return axios.get(`${URL}seats`)
    .then((r)=>{
        dispatch(Get_Success(r.data.message[0]))
    })
    .catch((err)=>{
        dispatch(Get_Failure())
    })
    
}

// returns action object
const Update_Request=()=>{
    return{
        type:types.UPDATE_PATCH_REQUEST
    }
}
const Update_Success=()=>{
    return{
        type:types.UPDATE_PATCH_SUCCESS
    }
}
const Update_Failure=()=>{
    return{
        type:types.UPDATE_PATCH_FAILURE
    }
}

// Update_Matrix is used to Perform PATCH request to Sends the no_of_seats value to backend to resever seats;
const Update_Matrix=(quearyParams)=>(dispatch)=>{
        dispatch(Update_Request());
        return axios.patch(`${URL}update/seats`,quearyParams)
        .then((r)=>{
            alert(r.data.message);
            dispatch(Update_Success());
        }).catch((err)=>{
            dispatch(Update_Failure());
        })
}

export {Get_Matrix,Update_Matrix}
