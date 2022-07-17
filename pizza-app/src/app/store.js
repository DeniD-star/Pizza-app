import { configureStore } from '@reduxjs/toolkit'
import userManagementReducer from '../features/userManagement/userManagement'


export const store = configureStore({
  reducer: {
    userManagement: userManagementReducer,
    
  }
})