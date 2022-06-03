import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ExampleState {
    example?: string
}

const initialState: ExampleState = {
    example: '',
}

export const exampleSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setExample(state, action: PayloadAction<string | undefined>) {
            state.example = action.payload
        },
    },
})

export const { setExample } = exampleSlice.actions

export default exampleSlice.reducer
