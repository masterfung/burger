import React, { Component } from "react";
import { Modal, Button, OverlayTrigger } from "react-bootstrap";

import OrderSummary from "../Burger/OrderSummary/OrderSummary";

class InfoModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          <Modal.Title>Your Order Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderSummary
            ingredients={this.props.ingredients}
            price={this.props.price}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal} bsStyle="danger">
            Cancel
          </Button>
          <Button onClick={this.props.closeModal} bsStyle="success">
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InfoModal;
