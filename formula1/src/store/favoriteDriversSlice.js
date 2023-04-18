import { createSlice, nanoid } from "@reduxjs/toolkit";

const favoriteDriversSlice = createSlice({
    name: 'favoriteDrivers',
    initialState: {
        searchTerm: '',
        data: [],
    },
    reducers: {
        addDriver: (state, action) => {
            state.data.push({
                name: action.payload.name,
                description: action.payload.description,
                id: nanoid(),
            })
        },

        removeDriver: (state, action) => { 
            state.data = state.data.filter((driver) => driver.id !== action.payload.id);
        },

        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export const { addDriver, removeDriver, changeSearchTerm } = favoriteDriversSlice.actions;

export const favoriteDriversReducer =  favoriteDriversSlice.reducer;
