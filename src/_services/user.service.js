import config from '../config'
import { authHeader } from '../_helpers'

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
}

async function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password: password }),
  }

  // const response = await fetch(`http://36.92.135.163:3001/api/login2`, requestOptions)
  const response = await fetch(`http://localhost:8080/api/auth/signin`, requestOptions)
  const user = await handleResponse(response)
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  localStorage.setItem('user', JSON.stringify(user.user))
  localStorage.setItem('token', user.token)
  return user
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse)
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse)
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse)
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  }

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        // location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
