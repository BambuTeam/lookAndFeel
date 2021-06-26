import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import bgShape1 from "@images/banner/banner-shape-1-1.png";
import bgShape2 from "@images/banner/banner-shape-1-2.png";
/* import bannerBG from "@images/banner/banner-bg-1.png"; */
import bannerShape1 from "@images/shapes/bamboo.svg";
import bamboo from "@images/banner/banner-shape-1-4.png";

import image from "@images/banner/phone.png";

import dev from "@images/icovector/devtext.png";

const Banner = () => {
  return (
    <section className="banner-one" id="home">
      <img src={bgShape1} alt="Banner-Shape-1" className="banner-shape-1" />
      <img src={bgShape2} alt="Banner-Shape-2" className="banner-shape-2" />
      {/* <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${bannerBG})` }}
      ></div> */}
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="banner-one__content">
              <h3>
                CRECIMIENTO
              </h3>
              <h1>
                MUTUO
              </h1>
              
              <p>
              <p>Más alla de la suerte.</p>
              <p>Un factor común entre muchos negocios es: Tener bambú de la suerte en los espacios de trabajo.</p>
              <p>Bajo esta premisa, que todos conocemos. Adoptamos el concepto de los 8 tallos del bambú en la cultura oriental, que representa: Crecimiento, prosperidad, éxito.</p>
              </p>
              <a href="#" className="thm-btn">
                <span>Discover More</span>
              </a>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="banner-img wow fadeInUp" data-wow-duration="1500ms">
              <img src={bannerShape1} className="banner-image__curvs" alt="" />
              <div
                className="banner-bg"
                style={{ backgroundImage: `url(${bamboo})` }}
              ></div>
              <img src={image} alt="Banner-img" />
              <div className="banner-icon-1">
                <i><img src={dev} alt="Banner-img" /></i>
              </div>
              <div className="banner-icon-2">
                <i className="piloz-linked"></i>
              </div>
              <div className="banner-icon-3">
                <i className="piloz-human-resources"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
