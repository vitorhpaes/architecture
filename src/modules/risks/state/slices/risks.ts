import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RisksProps {
    example: string
}

export interface RisksState {
    risks?: RisksProps
}

const initialState: RisksState = {
    risks: {
        example: '',
    },
}

export const risksState = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setRisksExample(state, action: PayloadAction<string | undefined>) {
            state.risks.example = action.payload
        },
    },
})

export const { setRisksExample } = risksState.actions

export default risksState.reducer
