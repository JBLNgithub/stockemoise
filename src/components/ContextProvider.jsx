import { useState } from "react"
import {IsLoggedInContext, OnAllConcerts, OnAllNews, OnConcert, OnNews} from '../contexts/controlPanelContexts'


const ContextProvider = ({children}) => {
  const isLoggedIn = useState(false)
  const onAllConcerts = useState(false)
  const onAllNews = useState(false)
  const onConcert = useState(false)
  const onNews = useState(false)

  return (
    <OnNews.Provider value={onNews}>
      <OnConcert.Provider value={onConcert}>
        <OnAllNews.Provider value={onAllNews}>
          <OnAllConcerts.Provider value={onAllConcerts}>
            <IsLoggedInContext.Provider value={isLoggedIn}>
                {children}
            </IsLoggedInContext.Provider>
          </OnAllConcerts.Provider>
        </OnAllNews.Provider>
      </OnConcert.Provider>
    </OnNews.Provider>
  )
}

export default ContextProvider