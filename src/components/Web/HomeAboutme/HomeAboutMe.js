import React from "react";
import { Row, Col, Card, Icon } from "antd";

import "./HomeAboutMe.scss";

export default function HomeAboutme() {
  return (
    <Row className="home-about-me">
      <Col lg={24} className="home-about-me__title">
        <h2>This is how my course Works</h2>
        <h3>Here are some keypoints of how my courses can help you.</h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="clock-circle"
              title="Courses"
              description="here you will find all kinds of courses and classes."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="key"
              title="Acces 24/7"
              description="Access courses at any time from anywhere."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="message"
              title="Get the Help you need"
              description="I'm here to help you "
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="user"
              title="Get a portfolio"
              description="Get a potfolio to showcase your work."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="dollar"
              title="Affordable Price"
              description="I Have affordable courses to build you dream website."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="check-circle"
              title="Start your career with me "
              description="Build applications and webstie from the ground up one check at the time."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="home-about-me__card">
      <Icon type={icon} />
      <Meta title={title} description={description} />
    </Card>
  );
}
