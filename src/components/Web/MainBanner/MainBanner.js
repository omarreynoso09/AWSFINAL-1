import React from "react";
import { Row, Col } from "antd";

import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Welcome <br /> to my personal portfolio!
          </h2>
          <h3>
            Get a free copy of my newest ebook!
            <br />
            Thank You For your time
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
