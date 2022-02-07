import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './scss/style.scss'
import { connect } from 'react-redux'
import { history } from './_helpers/history'
import { alertActions } from './_actions'
import { PrivateRoute } from './Utils/PrivateRoute'
import { PublicRoute } from './Utils/PublicRoute'
import Page404 from './views/pages/page404/Page404'
import LoadingPage from './components/LoadingPage'
import Dashboard from './views/dashboard/Dashboard'

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pagesss
const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends React.Component {
  constructor(props) {
    super(props)
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts()
    })
  }
  render() {
    // const { alert } = this.props

    return (
      // <HashRouter>
      //   <React.Suspense fallback={loading}>
      //     <Switch>
      //       <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
      //       <Route
      //         exact
      //         path="/register"
      //         name="Register Page"
      //         render={(props) => <Register {...props} />}
      //       />
      //       <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
      //       <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
      //       <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
      //     </Switch>
      //   </React.Suspense>
      // </HashRouter>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={DefaultLayout} />
          <Suspense fallback={<LoadingPage />}>
            <Switch>
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/*" component={Page404} />
            </Switch>
          </Suspense>

          {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}

          {/* <Route path="/register" component={RegisterPage} /> */}
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    )
  }
}

function mapState(state) {
  const { alert } = state
  return { alert }
}

const actionCreators = {
  clearAlerts: alertActions.clear,
}

export default App = connect(mapState, actionCreators)(App)
// export { connectedApp as App }
// export default App
