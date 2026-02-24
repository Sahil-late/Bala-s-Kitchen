'use Client'
import React,{useState} from 'react'
import { secContext } from './contexApi'

const ContextProvider = ({children}) => {
  const [scroll, setScroll] = useState('')

  return (
    <secContext.Provider value={{scroll,setScroll}}>
      {children}
    </secContext.Provider>
  )
}

export default ContextProvider