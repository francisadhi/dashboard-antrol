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
  CNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
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
      activeKey: 1,
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
    //const [activeKey, setActiveKey] = useState(1)
    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>LIST BOOKING PASIEN</strong> <small></small>
            </CCardHeader>
            <CCardBody>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink
                    href="#"
                    active={this.state.activeKey === 1}
                    onClick={() => this.setState({ activeKey: 1 })}
                  >
                    Booking Masuk
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#"
                    active={this.state.activeKey === 2}
                    onClick={() => this.setState({ activeKey: 2 })}
                  >
                    Booking on Proccess
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#"
                    active={this.state.activeKey === 3}
                    onClick={() => this.setState({ activeKey: 3 })}
                  >
                    Booking Selesai
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane visible={this.state.activeKey === 1}>
                  <CCard>
                    <CCardBody></CCardBody>
                    <CCardBody>
                      <CTable>
                        <CTableHead color="dark">
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
                              <CTableDataCell scope="row">{booking.FS_KD_TRS}</CTableDataCell>
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
                </CTabPane>
                <CTabPane visible={this.state.activeKey === 2}>
                  <CCardBody></CCardBody>
                  <CCardBody>
                    <CCard>Booking on Proccess ada disini......</CCard>
                  </CCardBody>
                </CTabPane>
                <CTabPane visible={this.state.activeKey === 3}>
                  <CCardBody></CCardBody>
                  <CCardBody>
                    <CCard>Booking selesai ada disini......</CCard>
                  </CCardBody>
                </CTabPane>
              </CTabContent>
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
