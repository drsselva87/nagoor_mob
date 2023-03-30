import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    name: '',
    photo: '',
    role: '',
  },
  reducers: {
    addUser: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
      state.photo = action.payload.photo
      state.password = state.password
      state.role = state.role
    },
    clearUser: state => {
      state.email = []
      state.name = []
      state.photo = []
    },
    removeUser: (state, action) => {
      state.email.pop()
      state.name.pop()
      state.photo.pop()
    },
  },
})

export const { addUser, clearUser, removeUser } = userSlice.actions

export default userSlice.reducer
