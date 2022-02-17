import { React, useState } from 'react'
//import PropTypes from 'prop-types'
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

const Modal = ({ dt, name, ...props }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton
        color="info"
        shape="rounded-pill"
        variant="outline"
        onClick={() => setVisible(!visible)}
      >
        {name}
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>TINDAK LANJUTI?</CModalTitle>
        </CModalHeader>
        <CModalBody>
          NO.RM :{dt.FS_MR} <br></br>
          NAMA :{dt.FS_NM_PASIEN_BOOK} <br></br>
          ALAMAT :{dt.FS_ALM_PASIEN_BOOK}
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" variant="outline" onClick={() => setVisible(false)}>
            TUTUP
          </CButton>
          <CButton color="success" variant="outline" onClick>
            LANJUT
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Modal
