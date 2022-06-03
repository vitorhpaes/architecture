import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NonConformitiesProps {
    example: string
}

export interface NonConformitiesState {
    nonConformities?: NonConformitiesProps
}

const initialState: NonConformitiesState = {
    nonConformities: {
        example: '',
    },
}

export const nonConformitiesState = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setNonConformitiesExample(
            state,
            action: PayloadAction<string | undefined>
        ) {
            state.nonConformities.example = action.payload
        },
    },
})

export const { setNonConformitiesExample } = nonConformitiesState.actions

export default nonConformitiesState.reducer
