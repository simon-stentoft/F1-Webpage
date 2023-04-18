import { createSlice } from '@reduxjs/toolkit';
import { addDriver } from './favoriteDriversSlice';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        description: ''
    },

    reducers:{
        changeName(state, action){
            state.name = action.payload;
        },
        changeDescription(state, action){
            state.cost = action.payload;
        }
    },

    extraReducers(builder){
        builder.addCase(addDriver, (state, action) => {
            state.name = '';
            state.description = '';
        });
    }
})

export const {changeName, changeDescription} = formSlice.actions; 
export const formReducer = formSlice.reducer;  
