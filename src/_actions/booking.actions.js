import { bookingConstants } from '../_constants'
import { bookingService } from '../_services'
//import { alertActions } from '../_actions'
//import { history } from '../_helpers'
import axios from 'axios'
// import React from 'react'

// export const bookingActions = {
//   //getAll,
//   getBook,
// }

// function getAll() {
//   return (dispatch) => {
//     bookingService.getAll().then((booking) => dispatch(success(booking)))
//   }

//   function success(booking) {
//     return { type: bookingConstants.BOOKING_GETALL, booking }
//   }
// }

export const getBook = () => {
  return (dispatch) => {
    axios.get('http://36.92.135.163:3001/api/bookings').then((response) => {
      //console.log(response.data)
      dispatch({
        type: 'BOOKING_GETALL',
        payload: {
          booking: response.data,
        },
      })
    })
  }
}
