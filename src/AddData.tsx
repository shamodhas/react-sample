import React, { useState } from "react"
import { addNewData } from "./store/myDataSlice"
import { useDispatch, useSelector } from "react-redux"

function AddData() {
  const dispatch = useDispatch()

  const reduxData = useSelector((state) => state.myData)
  console.log(reduxData)

  const [inputData, setInputData] = useState("")

  const handleSave = () => {
    dispatch(
      addNewData({
        name: inputData
      })
    )
  }

  return (
    <div>
      <input value={inputData} onChange={(e) => setInputData(e.target.value)} />
      <button onClick={handleSave}>save</button>
    </div>
  )
}

export default AddData
