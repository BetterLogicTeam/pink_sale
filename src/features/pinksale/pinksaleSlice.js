import { createSlice } from '@reduxjs/toolkit'
import { loadWeb3 } from '../../connectivity/connectivity';

const initialState = {
    walletaddress: '',
}

export const pinksaleSlice = createSlice({
    name: 'pinksaleSlice',
    initialState,
    reducers: {
        connectWallet: (state, action) => {

            state.walletaddress = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { connectWallet } = pinksaleSlice.actions

export default pinksaleSlice.reducer