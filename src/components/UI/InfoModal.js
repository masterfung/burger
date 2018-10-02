import React, { Component } from "react";
import { Modal, Button, OverlayTrigger } from "react-bootstrap";

import OrderSummary from "../Burger/OrderSummary/OrderSummary";

class InfoModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Your Order Details:</h4>
					<OrderSummary />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InfoModal;
