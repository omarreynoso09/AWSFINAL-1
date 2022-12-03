import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import cms from "../../../assets/img/jpg/cms.jpg";
import blockchain from "../../../assets/img/jpg/blockchain.jpg";
import Nft from "../../../assets/img/jpg/ntf.jpg";
import project from "../../../assets/img/jpg/project.jpg";
import CyberSecurity from "../../../assets/img/jpg/cyber.jpg";
import Seo from "../../../assets/img/jpg/Seo.jpg";
import digitalMarketing from "../../../assets/img/jpg/digitalMarketing.jpg";
import frontend from "../../../assets/img/jpg/frontend.jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Learn and Master your skills</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={cms}
              title="PHP for Beginners "
              subtitle=" PHP Master - CMS Project"
              link="https://www.udemy.com/course/php-for-complete-beginners-includes-msql-object-oriented/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={blockchain}
              title="Blockchain and Bitcoin"
              subtitle=" Fundamentals"
              link="https://www.udemy.com/course/blockchain-and-bitcoin-fundamentals/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={CyberSecurity}
              title="Cyber Security Course"
              subtitle="Hackers Exposed!"
              link="https://www.udemy.com/course/the-complete-internet-security-privacy-course-volume-1/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={digitalMarketing}
              title="Digital Marketing Guide "
              subtitle="22 Courses in 1!"
              link="https://www.udemy.com/course/digital-marketing-guide/ "
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={project}
              title="Project Management "
              subtitle="Professional Certification Program PMP"
              link="https://www.udemy.com/course/project-management-professional-certification-program-pmp/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={Nft}
              title="Cryptocurrency Investment Course 2022"
              subtitle="Fund your Retirement!"
              link="https://www.udemy.com/course/cryptocurrency/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={frontend}
              title="Complete Front-End "
              subtitle="Web Development Course 2022!"
              link="https://www.udemy.com/course/front-end-web-development-complete-guide-step-by-step/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={Seo}
              title="Digital Marketing Course"
              subtitle="2 Courses in 1"
              link="https://www.udemy.com/course/learn-digital-marketing-course/"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>See More</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>Enter</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
