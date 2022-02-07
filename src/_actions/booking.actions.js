import { bookingConstants } from '../_constants'
import { bookingService } from '../_services'
//import { alertActions } from '../_actions'
//import { history } from '../_helpers'
//import axios from 'axios'
// import React from 'react'

export const bookingActions = {
  // fetchLogin,
  getAll,
}

function getAll() {
  return (dispatch) => {
    bookingService.getAll().then((bookings) => dispatch(success(bookings)))
  }

  function success(bookings) {
    return { type: bookingConstants.BOOKING_GETALL, bookings }
  }
}
