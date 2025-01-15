import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: []
}

const myDataSlice = createSlice({
  name: "my_data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload)
    }
  }
})

const addNewData = myDataSlice.actions.addData

export { addNewData }

export default myDataSlice.reducer
