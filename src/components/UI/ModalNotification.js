import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'reactstrap'
import CustomButton from './CustomButton'

function ModalNotification(props) {
  const {
    isOpen = false,
    toggle = (f) => f,
    confirm = (f) => f,
    confirmText = 'Confirm',
    confirmLoading = false,
    className = '',
    headerText = 'Confirmation',
  } = props
  return (
    <Modal
      className={`modal-primary ${className}`}
      show={isOpen}
      onHide={toggle}
    >
      <Modal.Header>{headerText}</Modal.Header>
      <Modal.Body className="text-center">{props.children}</Modal.Body>
      <div className="d-flex flex-direction-row justify-content-end p-2 align-items-center">
        <Button className="mr-2" color="danger" onClick={toggle}>
          Cancel
        </Button>
        <CustomButton className="btn" onClick={confirm} loading={confirmLoading}>
          {confirmText}
        </CustomButton>
      </div>
    </Modal>
  )
}

export default ModalNotification
