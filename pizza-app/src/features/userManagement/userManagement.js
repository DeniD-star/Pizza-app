import { createSlice } from '@reduxjs/toolkit'

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState: {user : null},
  reducers: {
   login(state, action) {
      state.user=action.payload.email;
       //actiona 6te sudurja na6iq user
       console.log(action);
     
    },
    logout(state) {
      state.user = null;
    }
  }
})

export const { login, logout } = userManagementSlice.actions
export default userManagementSlice.reducer