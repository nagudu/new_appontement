import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function CustomModal(props) {
  const { header, isOpen = false, toggle = (f) => f, footer ,size,footerButton} = props
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="border border-primary size-lg"
      size={size?size:'lg'}
    >
      {header && (
        <ModalHeader className="h6 py-1 " toggle={toggle}>
          {header}
        </ModalHeader>
      )}
      <ModalBody>{props.children}</ModalBody>
      <div className='text-right pr-3'>{footerButton}</div>
      {footer && <ModalFooter >{footer}</ModalFooter>}
    </Modal>
  )
}

export default CustomModal



// import React from "react";
// import { Button, Col, Modal } from "reactstrap";
// import Checkbox from "./CheckBox";

// function CustomModal(props) {
//     const {
//         toggle = (f) => f,
//         isOpen = false,
//         title = "",
//         color = "primary",
//         submitText = "",
//         handleSubmit = (f) => f,
//         save = "",
//         handleSave = (f) => f,
//         customNotify = true,
//         size = "md",
//         contentClassName = "bg-gradient-primary",
//     } = props;
//     return (
//         <Modal
//             size={size}
//             className="modal-dialog-centered modal-primary"
//             contentClassName={contentClassName}
//             isOpen={isOpen}
//             toggle={toggle}
//         >
//             <div className="modal-header">
//                 <h6 className="modal-title" id="modal-title-notification">
//                     Success
//                 </h6>
//                 <button
//                     aria-label="Close"
//                     className="close"
//                     data-dismiss="modal"
//                     type="button"
//                     onClick={toggle}
//                 >
//                     <span aria-hidden={true}>×</span>
//                 </button>
//             </div>
//             <div className="modal-body">
//                 <div className="py-3 text-center">
//                     {customNotify && (
//                         <i className="ni ni-check-bold ni-3x" color={color} />
//                     )}
//                     <h4 className="heading mt-4">{title}</h4>
//                 </div>
//                 {props.children}
//             </div>
//             {customNotify && (
//                 <div className="row">
//                     <Col className="ml-1">Notify Customer: </Col>
//                     {["Send SMS", "Send Email"].map((item, i) => (
//                         <Col>
//                             {" "}
//                             <Checkbox label={item} />
//                         </Col>
//                     ))}
//                 </div>
//             )}
//             <div className="modal-footer">
//                 <Button
//                     className="text-white"
//                     color="link"
//                     data-dismiss="modal"
//                     type="button"
//                     onClick={handleSave}
//                 >
//                     {save}
//                 </Button>
//                 <Button
//                     className="btn-white ml-auto"
//                     color="default"
//                     type="button"
//                     onClick={handleSubmit}
//                 >
//                     {submitText}
//                 </Button>
//             </div>
//         </Modal>
//     );
// }

// export default CustomModal;
