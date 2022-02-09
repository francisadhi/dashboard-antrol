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
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Pemanggil = () => {
  return (
    <div>
      <CRow>
        {/* <CCol xs={12}>
        <DocsCallout name="Table" href="components/table" />
      </CCol> */}
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <CContainer>
                <div className="d-flex justify-content-center">
                  <div className="mx-auto">
                    <h4>
                      <small>Antrian saat ini</small>
                    </h4>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="mx-auto">
                    <h1>
                      <strong>7</strong>
                    </h1>
                  </div>
                </div>
              </CContainer>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12}>
                  <div className="d-flex justify-content-center">
                    <CButton color="info" size="lg">
                      Panggil lagi
                    </CButton>
                  </div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol xs={7}>
              <div className="d-flex justify-content-end">
                <CButton color="success" size="lg">
                  Panggil Antrian Berikutnya
                </CButton>
              </div>
            </CCol>
            <CCol xs={5}>
              <div className="d-flex justify-content-start">
                <CButton color="warning" size="lg">
                  Lewati
                </CButton>
              </div>
            </CCol>
          </CRow>
        </CCardHeader>
      </CCard>
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
