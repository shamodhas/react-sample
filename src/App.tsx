import { createContext } from "react"
import Counter from "./Counter"
import { Provider, useDispatch } from "react-redux"
import { store } from "./store/store"
import AddData from "./AddData"

// const SampleContext = createContext()

const App = () => {
  return (
    <Provider store={store}>
      <AddData />
      <div>{/* <Counter /> */}</div>
    </Provider>
  )
}

export default App

// import { createContext } from "react"
// import Counter from "./Counter"

// const SampleContext = createContext()

// const App = () => {
//   return (
//     <SampleContext.Provider value={"hello context"}>
//       <div>
//         <Counter />
//       </div>
//     </SampleContext.Provider>
//   )
// }

// export { App, SampleContext }
