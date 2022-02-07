import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from './Common'

// handle the private routes
export const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const test = sessionStorage.getItem('token')
  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     localStorage.length > 0 ? (
    //       <Component {...props} />
    //     ) : (
    //       <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    //     )
    //   }
    // />
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.length <= 0) {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // logged in so return component
        return <Component {...props} />
      }}
    />
  )
}
