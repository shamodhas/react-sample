import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: []
}

const myDataSliceTwo = createSlice({
  name: "my_data_two",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload)
    }
  }
})

export default myDataSliceTwo.reducer