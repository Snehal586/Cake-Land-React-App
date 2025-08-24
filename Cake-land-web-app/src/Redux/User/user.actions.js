import { userActionTypes } from "./user.types";


//To Set Current User Value
export const setCurrentUser = user => ({
    type:userActionTypes.SET_CURRENT_USER,
    payload:user
})