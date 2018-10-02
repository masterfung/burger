import React from "react";
import { Button } from "react-bootstrap";

import classes from "./OrderController.css";

const orderController = props => (
  <div className={classes.OrderController}>
    <div className={classes.Label}>{props.label}</div>
    <Button onClick={props.removed} disabled={props.disabled} bsStyle="danger">
      &#8722;
    </Button>
    <Button onClick={props.added} bsStyle="primary">
      &#43;
    </Button>
  </div>
);

export default orderController;
