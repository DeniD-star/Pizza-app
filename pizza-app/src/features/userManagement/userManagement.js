import { createSlice } from '@reduxjs/toolkit';
// import { Navigate, useNavigate } from 'react-router';
// const navigate = useNavigate;


const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState: {user : null},
  reducers: {
   login(state, action) {
    console.log('action', action);
      state.user = {...state.user, tokenId:action.payload};
       //actiona 6te sudurja na6iq user
     
    },
    logout(state) {
      state.user = null;
   
    }
  }
})

export const { login, logout } = userManagementSlice.actions
export default userManagementSlice.reducer