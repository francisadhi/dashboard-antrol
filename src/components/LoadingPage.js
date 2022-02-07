/* eslint-disable prettier/prettier */
import React from 'react'
import { CSpinner, CContainer, CCol, CRow } from '@coreui/react'

const LoadingPage = () => {
  return (
    <div className="bg-dark min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <div>
              <CSpinner color="info" variant="grow" />
              <CSpinner color="dark" variant="grow" />
              <CSpinner color="info" variant="grow" />
              <CSpinner color="dark" variant="grow" />
              <CSpinner color="info" variant="grow" />
              <CSpinner color="dark" variant="grow" />
              <CSpinner color="info" variant="grow" />
              <CSpinner color="dark" variant="grow" />
              <CSpinner color="info" variant="grow" />
              <h1 className="float-start display-3">Loading</h1>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default LoadingPage
