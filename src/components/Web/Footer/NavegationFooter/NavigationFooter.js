import React from "react";
import { Row, Col, Icon } from "antd";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>Navegation</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="https://skillcrush.com/blog/64-online-resources-to-learn-to-code-for-free/">
          <Icon type="book" /> Coding Courses
        </a>
      </li>
      <li>
        <a href="https://sidehustlestack.co/">
          <Icon type="code" /> Side Hustle
        </a>
      </li>
      <li>
        <a href="http://www.tutorialspoint.com/more.htm">
          <Icon type="database" /> Coding Resources
        </a>
      </li>
      <li>
        <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjX-_nrur_5AhU1pIkEHTSCAvUQPAgI">
          <Icon type="right" /> Privacy Policy
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="http://hanselreynoso.com/">
          <Icon type="hdd" /> Resume
        </a>
      </li>
      <li>
        <a href="https://highstandardsweb.com/portfolio/">
          <Icon type="appstore" /> Themes
        </a>
      </li>
      <li>
        <a href="https://highstandardsweb.com/portfolio/">
          <Icon type="user" /> Porfolio
        </a>
      </li>
      <li>
        <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjX-_nrur_5AhU1pIkEHTSCAvUQPAgI">
          <Icon type="right" /> Terms
        </a>
      </li>
    </ul>
  );
}
