// import { bookingConstants } from '../_constants'

// export function bookings(state = {}, action) {
//   switch (action.type) {
//     case bookingConstants.BOOKING_GETALL:
//       return {
//         bookings: action.booking,
//       }
//     default:
//       return state
//   }
// }

const initialState = {
  booking: [],
}

export const bookings = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKING_GETALL':
      return {
        ...state,
        booking: action.payload.booking,
      }

    default:
      return state
  }
}

//export default bookingReducer
