//import config from '../config'
import { authHeader } from '../_helpers'

export const bookingService = {
  getAll,
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  // return fetch(`http://36.92.135.163:3001/api/bookings`, requestOptions).then(handleResponse)
  return fetch(`http://192.168.0.154:3001/api/bookings`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      //   if (response.status === 200) {

      //   }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
