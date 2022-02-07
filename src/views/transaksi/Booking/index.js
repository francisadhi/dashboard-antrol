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

class ListBooking extends Component {
  constructor(props) {
    super(props)

    this.props.getAll()
  }
  render() {
    const { bookings } = this.props
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
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {this.props.bookings.map((booking) => (
                    <CTableRow key={booking.toString()}>
                      <CTableHeaderCell scope="row">{booking.FS_KD_TRS}</CTableHeaderCell>
                      <CTableDataCell>{booking.FS_KD_TRS}</CTableDataCell>
                      <CTableDataCell>{booking.FS_KD_TRS}</CTableDataCell>
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

function mapState(state) {
  const { bookings } = state
  return { bookings }
}

const actionCreators = {
  getAll: bookingActions.getAll,
}

export default ListBooking = connect(mapState, actionCreators)(ListBooking)
