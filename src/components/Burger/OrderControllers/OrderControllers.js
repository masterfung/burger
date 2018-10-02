import React from "react";
import { Row, Col, Grid } from "react-bootstrap";

import classes from "./OrderControllers.css";
import OrderController from "./OrderController/OrderController";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" }
];

const orderControllers = props => (
  // <div className={classes.OrderControllers}>
  //   {controls.map(ctrl => (
  //     <OrderController key={ctrl.label} label={ctrl.label} />
  //   ))}
  // </div>

  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={6}>
        {controls.map(ctrl => (
          <OrderController key={ctrl.label} label={ctrl.label} />
        ))}
      </Col>
    </Row>
  </Grid>
);

export default orderControllers;
