import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk(
	'user/fetchData',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users',
			).then((response) => response.json())
			return response
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	},
)

const userSlice = createSlice({
	name: 'user',
	initialState: {
		items: [],
		error: null,
		isLoading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.isLoading = false
				state.items = action.payload
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export default userSlice.reducer
