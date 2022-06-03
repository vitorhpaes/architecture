import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IndicatorsProps {
    example: string
}

export interface IndicatorsState {
    indicators?: IndicatorsProps
}

const initialState: IndicatorsState = {
    indicators: {
        example: '',
    },
}

export const indicatorsState = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setIndicatorsExample(state, action: PayloadAction<string | undefined>) {
            state.indicators.example = action.payload
        },
    },
})

export const { setIndicatorsExample } = indicatorsState.actions

export default indicatorsState.reducer
