import { useContext, useReducer, useState } from "react"
import { SampleContext } from "./App"

const initiaState = {
  count: 0
}

function reducerAction(state, action) {
  switch (action.type) {
    case "incriment":
      return {
        count: state.count + 1
      }
    case "decrement":
      return {
        count: state.count - 1
      }
    default:
      return null
  }
}

const Counter = () => {

  const value = useContext(SampleContext)
  console.log(value)

  let name = "hello"
  const [data, setData] = useState("initial data")
  const [count, setCount] = useState(0)

  const [satate, dispatch] = useReducer(reducerAction, initiaState)
  console.log(satate)

  function handleOnClick() {
    name = "changed"
    setData("i'm changed")
    setCount(count + 1)
    console.log(name)
    console.log(data)
  }

  return (
    <div>
      <p>Reducer value: {satate?.count}</p>
      <button
        onClick={() => {
          dispatch({
            type: "decrement"
          })
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "incriment"
          })
        }}
      >
        +
      </button>

      <p>{name}</p>
      <p>{data}</p>
      <p>{count}</p>
      <button onClick={handleOnClick}>change</button>
    </div>
  )
}

export default Counter
