import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { setUserSession } from '../../../Utils/Common'
import { userActions } from '../../../_actions'
import { connect } from 'react-redux'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

class Login extends React.Component {
  constructor(props) {
    super(props)

    // reset login status
    this.props.logout()

    this.state = {
      username: '',
      password: '',
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { username, password } = this.state
    if (username && password) {
      this.props.login(username, password)
    }
  }
  // const [loading, setLoading] = useState(false)
  // const username = useFormInput('')
  // const password = useFormInput('')
  // const [error, setError] = useState(null)

  // const handleSubmit = () => {
  //   setError(null)
  //   setLoading(true)
  //   axios
  //     .post('http://localhost:3001/api/login2', {
  //       username: username.value,
  //       password: password.value,
  //     })
  //     .then((response) => {
  //       setLoading(false)
  //       setUserSession(response.data.token, response.data.user)
  //       props.history.push('/dashboard')
  //     })
  //     .catch((error) => {
  //       setLoading(false)
  //       if (error.response.status === 401) setError(error.response.data.message)
  //       else setError('Something went wrong. Please try again later.')
  //     })
  // }
  render() {
    // const { loggingIn } = this.props
    const { username, password, submitted } = this.state
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          name="username"
                          value={username}
                          onChange={this.handleChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          name="password"
                          value={password}
                          onChange={this.handleChange}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton type="submit" color="primary" className="px-4">
                            Login
                          </CButton>
                          {/* {loggingIn && (
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                          )} */}
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

// const useFormInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue)

//   const handleChange = (e) => {
//     setValue(e.target.value)
//   }
//   return {
//     value,
//     onChange: handleChange,
//   }
// }
// const mapDispatchToProps = (dispatch) => ({
//   fetchLogin: (username, password) => dispatch(userActions.fetchLogin(username, password)),
//   // magicButton: (bibleId) => dispatch(fetchbiblebooks(bibleId),fetchbible(bibleId)),
// })

function mapState(state) {
  const { loggingIn } = state
  return { loggingIn }
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
}

export default Login = connect(mapState, actionCreators)(Login)
// export { connectedLoginPage as LoginPage };
// export default Login
