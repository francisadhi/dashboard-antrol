import { bookingConstants } from '../_constants'
import { bookingService } from '../_services'
//import { alertActions } from '../_actions'
//import { history } from '../_helpers'
//import axios from 'axios'
// import React from 'react'

export const bookingActions = {
  getAll,
}

function getAll() {
  return (dispatch) => {
    bookingService.getAll().then((booking) => dispatch(success(booking)))
  }

  function success(booking) {
    return { type: bookingConstants.BOOKING_GETALL, booking }
  }
}
