import React from "react";
import { Modal } from "react-bootstrap";
const NotificationModal = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.header}</h4>
        <p>
          {props.content}
          <br />
          <b>{props.note}</b>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationModal;
