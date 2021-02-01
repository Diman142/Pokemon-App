/* eslint-disable react/prop-types */
import React from 'react'
import { AlertContext, alerts } from './AlertContext'

const AlertState = ({ children }) => (
  <AlertContext.Provider value={alerts}>
    {children}
  </AlertContext.Provider>
)

export default AlertState
