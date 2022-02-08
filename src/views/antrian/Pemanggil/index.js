import React from 'react'
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

const Pemanggil = () => {
  return (
    <CRow>
      {/* <CCol xs={12}>
        <DocsCallout name="Table" href="components/table" />
      </CCol> */}
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h1>
              <strong>Coming</strong> <small>Soon</small>
            </h1>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Pemanggil
