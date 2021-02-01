import React from 'react'


// Different context for alert

export const alerts = {

  searchFailure: {
    variant: 'light',
    text: "Sorry, we couldn't find your Pokemon. Let's look for something else?"
  },

  serverFailure: {
    variant: 'danger',
    text: 'Something wrong, try again'
  },
}

export const AlertContext = React.createContext();
