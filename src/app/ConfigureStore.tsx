"use client"
import { Provider } from "react-redux"
import { store } from "@/store/store"

const ConfigureStore:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ConfigureStore