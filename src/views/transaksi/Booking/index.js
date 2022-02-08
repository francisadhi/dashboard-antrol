import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import { bookingActions } from '../../../_actions'
import { connect } from 'react-redux'
import axios from 'axios'
//test di dev

class ListBooking extends Component {
  // constructor(props) {
  //   super(props)

  //   this.props.getAll()
  // }

  constructor() {
    super()
    this.state = {
      bookings: [],
    }
  }

  componentDidMount() {
    setInterval(
      axios
        .get(`http://36.92.135.163:3001/api/bookings`)
        // API.get(`users/`)
        .then((res) => {
          const bookings = res.data
          this.setState({ bookings })
          console.log(bookings)
        }),
      1000,
    )
    // window.location.reload(true)
  }

  render() {
    //const { booking } = this.props
    //console.log(bookings)
    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>LIST BOOKING PASIEN</strong> <small></small>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">KODE BOOKING</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NO RM</CTableHeaderCell>
                    <CTableHeaderCell scope="col">TANGGAL</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NAMA</CTableHeaderCell>
                    <CTableHeaderCell scope="col">ALAMAT</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {this.state.bookings.map((booking) => (
                    <CTableRow key={booking.FS_KD_TRS}>
                      <CTableDataCell>{booking.FS_KD_TRS}</CTableDataCell>
                      <CTableDataCell>{booking.FS_MR}</CTableDataCell>
                      <CTableDataCell>{booking.FD_TGL_TRS}</CTableDataCell>
                      <CTableDataCell>{booking.FS_NM_PASIEN_BOOK}</CTableDataCell>
                      <CTableDataCell>{booking.FS_ALM_PASIEN_BOOK}</CTableDataCell>
                      <CTableDataCell>
                        <CButton color="info" shape="rounded-pill">
                          Proses
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }
}

// function mapState(state) {
//   const { booking } = state
//   console.log(booking)
//   return { booking }
// }

// const actionCreators = {
//   getAll: bookingActions.getAll,
// }

//export default ListBooking = connect(mapState, actionCreators)(ListBooking)
export default ListBooking
