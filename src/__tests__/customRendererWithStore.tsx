import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import store from "../store"
import { render } from "@testing-library/react"

interface StoreProviderProps {
  children: ReactNode
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

const customRendererWithStore = (ui: React.ReactElement, options = {}) => render(ui, { wrapper: StoreProvider, ...options })

export default customRendererWithStore;

