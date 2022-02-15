import React from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CHeader,
  CWidgetStatsF,
  CLink,
  CCardGroup,
  CHeaderDivider,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilChartPie, cilArrowRight } from '@coreui/icons'
import { DocsCallout, DocsExample } from 'src/components'

const Pemanggil = () => {
  return (
    <div>
      <CCardGroup>
        <CCard className="text-white bg-dark py-5" style={{ width: '44%' }}>
          <CCardBody className="text-center">
            <CCol>ANTRIAN SAAT INI</CCol>
            <CCol>
              <h1 style={{ fontSize: 75 }}>67</h1>
            </CCol>
          </CCardBody>
        </CCard>
        <CCard className="p-4">
          <CCardBody>
            <CCol>
              <CButton
                color="info"
                shape="rounded-pill"
                className="d-grid gap-2 col-6 mx-auto"
                size="lg"
              >
                Panggil Lagi
              </CButton>
            </CCol>
            <CHeaderDivider />
            <CCol>
              <CButton
                color="success"
                shape="rounded-pill"
                className="d-grid gap-2 col-6 mx-auto"
                size="lg"
              >
                Panggil Berikutnya
              </CButton>
            </CCol>
            <CHeaderDivider />
            <CCol>
              <CButton
                color="warning"
                shape="rounded-pill"
                className="d-grid gap-2 col-6 mx-auto"
                size="lg"
              >
                Lewati Panggilan
              </CButton>
            </CCol>
          </CCardBody>
        </CCard>
      </CCardGroup>

      <br></br>
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol xs={6}>
              <div className="d-flex justify-content-center">
                <CAccordion activeItemKey={2}>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>Antrian yang terpanggil</CAccordionHeader>
                    <CAccordionBody>
                      <CTable>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                          <CTableRow color="primary">
                            <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                          <CTableRow color="secondary">
                            <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                          <CTableRow color="success">
                            <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                          <CTableRow color="danger">
                            <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                          <CTableRow color="warning">
                            <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              </div>
            </CCol>
            <CCol xs={6}>
              <div className="d-flex justify-content-center">
                <CAccordion activeItemKey={2}>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>Antrian yang dilewati</CAccordionHeader>
                    <CAccordionBody>
                      <CTable>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                          <CTableRow color="primary">
                            <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                          <CTableRow color="secondary">
                            <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                          <CTableRow color="success">
                            <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                          <CTableRow color="danger">
                            <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              </div>
            </CCol>
          </CRow>
        </CCardHeader>
      </CCard>
    </div>
  )
}

export default Pemanggil
