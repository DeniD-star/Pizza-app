import { createSlice } from '@reduxjs/toolkit'

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState: {user : null},
  reducers: {
   login(state, action) {
    console.log('action', action);
      state.user = {...state.user, email:action.payload};
       //actiona 6te sudurja na6iq user
       
     
    },
    logout(state) {
      state.user = null;
    }
  }
})

export const { login, logout } = userManagementSlice.actions
export default userManagementSlice.reducer