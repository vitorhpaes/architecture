import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserProps {
    username: string
    email: string
    profilePic?: string
}

export interface UserState {
    isLogged: boolean
    token?: string
    user?: UserProps
}

const initialState: UserState = {
    isLogged: true,
    token: 'asudfhsugji1274y687whvuidscn',
}

export const userState = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string | undefined>) {
            state.token = action.payload && action.payload
        },
        setIsLogged(state, action: PayloadAction<boolean>) {
            state.isLogged = action.payload
        },
        setUser(state, action: PayloadAction<UserProps>) {
            state.user = action.payload
        },
    },
})

export const { setToken, setIsLogged } = userState.actions

export default userState.reducer
