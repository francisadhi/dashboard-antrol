import React, { Component } from 'react'
import {
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
    axios
      .get(`http://192.168.0.154:3001/api/bookings`)
      // API.get(`users/`)
      .then((res) => {
        const bookings = res.data
        this.setState({ bookings })
        console.log(bookings)
      })
  }

  render() {
    //const { booking } = this.props
    //console.log(bookings)
    return (
      <CRow>
        <CCol xs={12}>
          <DocsCallout name="Table" href="components/table" />
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>React Table</strong> <small>Basic example</small>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NAMA</CTableHeaderCell>
                    <CTableHeaderCell scope="col">ALAMAT</CTableHeaderCell>
                    <CTableHeaderCell scope="col">HEADING</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {this.state.bookings.map((booking) => (
                    <CTableRow key={booking.FS_KD_TRS}>
                      <CTableHeaderCell scope="row">{booking.FS_KD_TRS}</CTableHeaderCell>
                      <CTableDataCell>{booking.FS_NM_PASIEN_BOOK}</CTableDataCell>
                      <CTableDataCell>{booking.FS_ALM_PASIEN_BOOK}</CTableDataCell>
                      <CTableDataCell>{booking.FS_KD_TRS}</CTableDataCell>
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
