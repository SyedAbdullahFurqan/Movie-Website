
  import { createSlice } from "@reduxjs/toolkit";



const initialState = {

  task:[],
imga:"",
popstar:[],
nows:[],
upcoming:[]

}
export const counterSlices = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   

Todolist: (state, action) => {

  state.task= action.payload;
    },
mega: (state, action) => {

  state.imga= action.payload;
    },

 pops: (state, action) => {

state.popstar = action.payload;
  
    },
player: (state, action) => {
state.nows = action.payload;

    },
Seal: (state, action) => {
state.nows = action.payload;

    },

Ups: (state, action) => {
state.upcoming = action.payload;

    },



  },
})










export const {Todolist,mega,pops,player,Seal,Ups} = counterSlices.actions

export default counterSlices.reducer

