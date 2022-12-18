import { loadWeb3 } from '../../connectivity/connectivity';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const connectWallet = createAsyncThunk(
    'pinksale/connectWallet',
    async () => {
        let acc = await loadWeb3();

        // const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
        //     (data) => data.json()
        // )
        return acc
    })

const initialState = {
    walletaddress: '',
}

export const pinksaleSlice = createSlice({
    name: 'pinksaleSlice',
    initialState,
    reducers: {
        // connectWallet: (state, action) => {
        //     // let acc = await loadWeb3();
        //     console.log(action.payload)
        //     state.walletaddress = action.payload

        // },
    },
    extraReducers: {
        [connectWallet.pending]: (state) => {
            // state.loading = true
        },
        [connectWallet.fulfilled]: (state, { payload }) => {

            state.walletaddress = payload

        },
        [connectWallet.rejected]: (state) => {
            // state.loading = false
        },
    }


})

// Action creators are generated for each case reducer function
// export const { connectWallet } = pinksaleSlice.actions



// export const connect = () => async dispatch => {

//             let acc = await loadWeb3();

//                 dispatch(connectWallet(acc))}

export default pinksaleSlice.reducer