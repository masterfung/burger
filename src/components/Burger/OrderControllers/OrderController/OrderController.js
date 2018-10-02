import React from "react";
import { Button } from "react-bootstrap";

import classes from "./OrderController.css";

const orderController = props => (
  <div className={classes.OrderController}>
    <div className={classes.Label}>{props.label}</div>
    <Button bsStyle="danger">&#8722;</Button>
    <Button bsStyle="primary">&#43;</Button>
  </div>
);

export default orderController;
