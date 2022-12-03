import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/luis.jpg";
import AvatarPersona2 from "../../../assets/img/jpg/justin.jpg";
import AvatarPersona3 from "../../../assets/img/jpg/zahi.jpg";
import "./Reviews.scss";

export default function Reviews() {
  return (
    <Row className="Reviews">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="Reviews__title">
          <h2>Be part of the +25 students who are learning with my courses</h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Luis Ortiz"
                subtitle="Wordpress Course"
                avatar={AvatarPersona}
                review="An excellent course, the teacher explains in detail how wordpress works and also how to do it component by component, I have searched many wordpress courses but none have taught me as much as this one, now I am developing my own cms without any problem thanks to the course."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Justin Cabrera"
                subtitle="SEO Course"
                avatar={AvatarPersona2}
                review="If you like courses that delve into the subject, I recommend it. The teacher fully explains all the concepts necessary to work with a grid. a great course."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Zhai Reyes"
                subtitle="Ecommerce Course"
                avatar={AvatarPersona3}
                review="The content of the course is very complete and if you need any additional information, the teacher is super attentive to answer it. I have already created my E-commerce with WordPress and much of the necessary information was obtained from the course."
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="Reviews__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
