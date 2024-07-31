import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiKey } from '../../utils/constant';

export const fetchData = createAsyncThunk('data/fetchData', async (apiName) => {
    const key = apiKey;
    const response = await fetch(`${key}/${apiName}`);
    return response.json();
});

export const postData = createAsyncThunk('data/postData', async ({ apiName, data }) => {
    const key = apiKey;
    const response = await fetch(`${key}/${apiName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
});

const thunkApiSlice = createSlice({
    name: "thunkApi",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(postData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.postDataResponse = action.payload;
            })
            .addCase(postData.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default thunkApiSlice.reducer;
