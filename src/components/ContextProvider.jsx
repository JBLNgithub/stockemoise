import { useState } from "react"
import {IsLoggedInContext} from '../contexts/controlPanelContexts'


const ContextProvider = ({children}) => {
  const isLoggedIn = useState(false)

  return (
    <IsLoggedInContext.Provider value={isLoggedIn}>
        {children}
    </IsLoggedInContext.Provider>
  )
}

export default ContextProvider