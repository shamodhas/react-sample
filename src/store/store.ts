import { configureStore } from "@reduxjs/toolkit"

import myDataSlice from "./myDataSlice"
import myDataSliceTwo from "./myDataSlice copy"

export const store = configureStore({
  reducer: {
    myData: myDataSlice,
    hello: myDataSliceTwo
  }
})
