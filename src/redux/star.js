import { configureStore } from '@reduxjs/toolkit'
import counterSlices from './Counter/Slect'


 export const stores = configureStore({
  reducer: {  counter: counterSlices,
},
}) 

