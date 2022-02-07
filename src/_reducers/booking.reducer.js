import { bookingConstants } from '../_constants'

export function bookings(state = {}, action) {
  switch (action.type) {
    case bookingConstants.BOOKING_GETALL:
      return {
        bookings: action.bookings,
      }
    default:
      return state
  }
}
