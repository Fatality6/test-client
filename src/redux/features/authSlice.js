import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

//создаём стартовый state
const initialState = {
    user: null,
    orders: [],
    token: Boolean(window.localStorage.token),
    isLoading: false,
    isNext: true,
    status: null,
    count: 5
}

//создаём Thunk для выполнения запроса на сервер для авторизации
//метод createAsyncThunk создаёт Thunk 
export const loginUser = createAsyncThunk(
    //адрес должен быть уникальным для каждого Thunk
    'auth/loginUser',
    //второй параметр это асинх функция, которая получает объект с данными пользователя при помощи useDispatch 
    //и деалет запрос на сервер
    async ({ email, password }) => {
        try {
            const { data } = await axios.post('auth/login', {
                email,
                password
            })

            //если в ответе есть токен, то записываем его в localStorage
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            //возвращаем data
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

//создаём Thunk для выполнения запроса на сервер для получения профиля
//метод createAsyncThunk создаёт Thunk 
export const getMe = createAsyncThunk(
    //адрес должен быть уникальным для каждого Thunk
    'auth/getMe',
    //второй параметр это асинх функция
    //и деалем запрос на сервер
    async (update) => {
        try {
            const { data } = await axios.post('auth/me', { data: update })
            //возвращаем data
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.orders = []
            state.isLoading = false
            state.status = null
        },
        showMore: (state) => {
            state.count += 5
        }
    },
    extraReducers: {
        //login user
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.rejected]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        },
        //get me
        [getMe.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [getMe.fulfilled]: (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
            state.token = action.payload.token
            state.orders = action.payload.orders
            state.isNext = action.payload.isNext
        },
        [getMe.rejected]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        }
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout, showMore } = authSlice.actions

export default authSlice.reducer