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
import { getBook } from '../../../_actions'
import { connect } from 'react-redux'
//import PropTypes from 'prop-types'
//import axios from 'axios'
import Pagination from '../../../components/Pagination'
//import { bookings } from 'src/_reducers/booking.reducer'
//import { DocsCallout, DocsExample } from 'src/components'

//test di dev

class ListBooking extends Component {
  constructor() {
    super()
    this.state = {
      //bookings: [],
      activeKey: 1,
      currentPage: 1,
      totalRecords: '',
      totalPages: '',
      pageLimit: '',
      currentPage: '',
      startIndex: '',
      endIndex: '',
    }
  }

  componentDidMount() {
    this.props.getBook()
  }
  //======================================================================================
  /*componentDidMount() {
    //setInterval(
    //let newBooking = []
    axios
      .get(`http://36.92.135.163:3001/api/bookings`)
      // API.get(`users/`)
      .then((res) => {
        const bookings = res.data
        //newBooking = res.data
        this.setState({ bookings })
        //this.setState({ bookings: [newBooking, ...this.state.bookings] })
        //console.log(this.state.bookings)
      })
    //====================
    
    //================
    //1000,
    //)
    //this.interval = setInterval(() => this.setState(this.state.bookings), 1000)
    // window.location.reload(true)
  }
  */
  // componentDidMount() {
  //   this.interval = setInterval(() => this.setState({ bookings: this.bookingLst() }), 1000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  // bookingList() {
  //   let booking = []

  //   axios
  //     .get(`http://36.92.135.163:3001/api/bookings`)
  //     API.get(`users/`)
  //     .then((res) => {
  //       const bookings = res.data
  //       booking = res.data
  //       this.setState({ bookings })
  //       this.setState({bookings: [newBooking, ...bookings})
  //       console.log(bookings)
  //     })

  //   return booking
  // }
  //============================================================================
  showBooking = (bookings) => {
    var result = null
    //console.log(bookings)
    if (bookings.length > 0) {
      return bookings.map((booking) => (
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
      ))
    }
    return result
  }

  onChangePage = (data) => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex,
    })
  }

  render() {
    var { bookings } = this.props
    var { totalPages, currentPage, pageLimit, startIndex, endIndex } = this.state
    var rowsPerPage = []
    rowsPerPage = bookings.slice(startIndex, endIndex + 1)

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
                    Booking on Process
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
                    <br></br>

                    <CCardBody>
                      <CTable striped>
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
                        <CTableBody>{this.showBooking(rowsPerPage)}</CTableBody>
                      </CTable>
                      <small>
                        Showing {currentPage} to {totalPages} of {bookings.length} entries
                      </small>
                      <br></br>
                      <br></br>
                      {
                        <Pagination
                          totalRecords={bookings.length}
                          pageLimit={pageLimit || 5}
                          initialPage={1}
                          pagesToShow={5}
                          onChangePage={this.onChangePage}
                        />
                      }
                    </CCardBody>
                  </CCard>
                </CTabPane>
                <CTabPane visible={this.state.activeKey === 2}>
                  <CCardBody></CCardBody>
                  <CCardBody>
                    <CCard>Booking on Process ada disini......</CCard>
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
//==========================
// function mapState(state) {
//   const { booking } = state
//   console.log(booking)
//   return { booking }
// }

// const actionCreators = {
//   getAll: bookingActions.getAll,
// }

// export default ListBooking = connect(mapState, actionCreators)(ListBooking)
//export default ListBooking
//=========================

const mapStateToProps = (state) => {
  return {
    bookings: state.bookings.booking,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBook: () => dispatch(getBook()),
  //magicButton: (bibleId) => dispatch(fetchbiblebooks(bibleId),fetchbible(bibleId)),
})

// ListBooking.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

ListBooking = connect(mapStateToProps, mapDispatchToProps)(ListBooking)

export default ListBooking
