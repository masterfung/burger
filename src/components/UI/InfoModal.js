import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import Burger from "../Burger/Burger";

class InfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          <Modal.Title>Your Order Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Burger ingredients={this.props.ingredients} />
          <OrderSummary
            ingredients={this.props.ingredients}
            price={this.props.price}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal} bsStyle="danger">
            Cancel
          </Button>
          <Button onClick={this.props.purchaseContinue} bsStyle="success">
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InfoModal;
