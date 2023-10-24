import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from './Common'

// handle the public routes
export const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />
}

// export default PublicRoute
