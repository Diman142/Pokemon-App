import { AlertContext, alerts } from './AlertContext'

export const AlertState = ({ children }) => {

  return (
    <AlertContext.Provider value={alerts}>
      {children}
    </AlertContext.Provider>
  )
}
