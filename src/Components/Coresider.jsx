import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cloud from "../assets/images/cloudsimg.png";
import coreimg from "../assets/images/coreimg.png";

const Coresider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="position-relative">
      <img className="clouds w-100 d-lg-block d-none" src={cloud} alt="#id" />
      <div className="slider_bgimg  min-vh-100 ">
        <Container className="">
          <div className=" pt-120 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-46 fw-700 ff-nue text-white">Core Strategies</h2>
            <p className="fs-16 fw-400 ff-ralway text_color pt-3  text-center">
              Our initial strategies use powerful burgeoning trends like Real
              Yield, Rebase, and others to generate cutting-{" "}
              <span className="fs-16 fw-400 ff-ralway text_color   d-block">
                edged yield innovations. These yield strategies stretch beyond
                the drought in stable coins and set the value for{" "}
              </span>{" "}
              our native protocol token $EEFI. Check them out!'
            </p>
          </div>
          <Slider {...settings}>
            <Row className="pt-5 pb-110 d-flex  justify-content-between align-itmes-center">
              <Col lg={6} className="">
                <img className="w-100" src={coreimg} alt="#id" />
              </Col>
              <Col
                lg={5}
                className="d-flex flex-column justify-content-center pt-5 pt-lg-0 "
              >
               
                <div className="overflow_scroll max-hight">
                  <h2 className="fs-38 fw-700 ff-nue text-white">
                    Elastic Vault
                  </h2>
                  <h3 className="fs-22 fw-500 ff-ralway text-white pt-4">
                    Deposit Token
                  </h3>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    {" "}
                    $AMPL
                  </p>
                  <h3 className="fs-22 fw-500 ff-ralway text-white pt-2">
                    Flagship Hedging Strategy
                  </h3>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    This one-of-a-kind strategy combines the benefits of
                    Rebase’s force multiplier effect and Real Yield’s
                    sustainability.
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    Helps users to protect against downtrends and amplify yield
                    rewards during market up trends.
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    Those who choose to hedge with the Vault or participate in
                    its economic cycles are the ones greatly rewarded when
                    markets return to optimal conditions
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-1">
                    1. Initially utilizes both OG rebase tokens $AMPL and $OHM. 
                    <span className="f-16 fw-400 ff-ralway text_color pt-1 d-block ps-3">
                      . Deposit $AMPL and receive $EEFI and $OHM rewards; 
                    </span>
                    <span className="f-16 fw-400 ff-ralway text_color pt-1 d-block ps-3 ">
                      . Vault activities are determined by $AMPL’s rebase
                      status; when AMPL supply is expanding, $EEFI is
                      automatically purchased and burned daily; when AMPL supply
                      is stable or contracting, $EEFI is minted (learn more).
                    </span>
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">2. Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</p>
                </div>
              </Col>
            </Row>
            <Row className="pt-5 pb-110 d-flex  justify-content-between">
              <Col lg={6} className="">
                <img className="w-100" src={coreimg} alt="#id" />
              </Col>
              <Col
                lg={5}
                className="d-flex flex-column justify-content-center pt-5 pt-lg-0 "
              >
             
             <div className="overflow_scroll max-hight">
                  <h2 className="fs-38 fw-700 ff-nue text-white">
                    Elastic Vault
                  </h2>
                  <h3 className="fs-22 fw-500 ff-ralway text-white pt-4">
                    Deposit Token
                  </h3>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    {" "}
                    $AMPL
                  </p>
                  <h3 className="fs-22 fw-500 ff-ralway text-white pt-2">
                    Flagship Hedging Strategy
                  </h3>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    This one-of-a-kind strategy combines the benefits of
                    Rebase’s force multiplier effect and Real Yield’s
                    sustainability.
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    Helps users to protect against downtrends and amplify yield
                    rewards during market up trends.
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    Those who choose to hedge with the Vault or participate in
                    its economic cycles are the ones greatly rewarded when
                    markets return to optimal conditions
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-1">
                    1. Initially utilizes both OG rebase tokens $AMPL and $OHM. 
                    <span className="f-16 fw-400 ff-ralway text_color pt-1 d-block ps-3">
                      . Deposit $AMPL and receive $EEFI and $OHM rewards; 
                    </span>
                    <span className="f-16 fw-400 ff-ralway text_color pt-1 d-block ps-3 ">
                      . Vault activities are determined by $AMPL’s rebase
                      status; when AMPL supply is expanding, $EEFI is
                      automatically purchased and burned daily; when AMPL supply
                      is stable or contracting, $EEFI is minted (learn more).
                    </span>
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">2. Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</p>
                </div>
              </Col>
            </Row>
            <Row className="pt-5 pb-110 d-flex  justify-content-between">
              <Col lg={6} className="">
                <img className="w-100" src={coreimg} alt="#id" />
              </Col>
              <Col
                lg={5}
                className="d-flex flex-column justify-content-center pt-5 pt-lg-0"
              >
               
               <div className="overflow_scroll max-hight">
                  <h2 className="fs-38 fw-700 ff-nue text-white">
                    Elastic Vault
                  </h2>
                  <h3 className="fs-22 fw-500 ff-ralway text-white pt-4">
                    Deposit Token
                  </h3>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    {" "}
                    $AMPL
                  </p>
                  <h3 className="fs-22 fw-500 ff-ralway text-white pt-2">
                    Flagship Hedging Strategy
                  </h3>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    This one-of-a-kind strategy combines the benefits of
                    Rebase’s force multiplier effect and Real Yield’s
                    sustainability.
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    Helps users to protect against downtrends and amplify yield
                    rewards during market up trends.
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    Those who choose to hedge with the Vault or participate in
                    its economic cycles are the ones greatly rewarded when
                    markets return to optimal conditions
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-1">
                    1. Initially utilizes both OG rebase tokens $AMPL and $OHM. 
                    <span className="f-16 fw-400 ff-ralway text_color pt-1 d-block ps-3">
                      . Deposit $AMPL and receive $EEFI and $OHM rewards; 
                    </span>
                    <span className="f-16 fw-400 ff-ralway text_color pt-1 d-block ps-3 ">
                      . Vault activities are determined by $AMPL’s rebase
                      status; when AMPL supply is expanding, $EEFI is
                      automatically purchased and burned daily; when AMPL supply
                      is stable or contracting, $EEFI is minted (learn more).
                    </span>
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">2. Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</p>
                </div>
              </Col>
            </Row>
            <Row className="pt-5 pb-110 d-flex  justify-content-between">
              <Col lg={6} className="">
                <img className="w-100" src={coreimg} alt="#id" />
              </Col>
              <Col
                lg={5}
                className="d-flex flex-column justify-content-center pt-5 pt-lg-0"
              >
                
                <div className="overflow_scroll max-hight">
                  <h2 className="fs-38 fw-700 ff-nue text-white">
                    Elastic Vault
                  </h2>
                  <h3 className="fs-22 fw-500 ff-ralway text-white pt-4">
                    Deposit Token
                  </h3>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    {" "}
                    $AMPL
                  </p>
                  <h3 className="fs-22 fw-500 ff-ralway text-white pt-2">
                    Flagship Hedging Strategy
                  </h3>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    This one-of-a-kind strategy combines the benefits of
                    Rebase’s force multiplier effect and Real Yield’s
                    sustainability.
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    Helps users to protect against downtrends and amplify yield
                    rewards during market up trends.
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">
                    Those who choose to hedge with the Vault or participate in
                    its economic cycles are the ones greatly rewarded when
                    markets return to optimal conditions
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-1">
                    1. Initially utilizes both OG rebase tokens $AMPL and $OHM. 
                    <span className="f-16 fw-400 ff-ralway text_color pt-1 d-block ps-3">
                      . Deposit $AMPL and receive $EEFI and $OHM rewards; 
                    </span>
                    <span className="f-16 fw-400 ff-ralway text_color pt-1 d-block ps-3 ">
                      . Vault activities are determined by $AMPL’s rebase
                      status; when AMPL supply is expanding, $EEFI is
                      automatically purchased and burned daily; when AMPL supply
                      is stable or contracting, $EEFI is minted (learn more).
                    </span>
                  </p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">2. Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</p>
                  <p className="f-16 fw-400 ff-ralway text_color pt-2">3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</p>
                </div>
              </Col>
            </Row>
          </Slider>
        </Container>
      </div>
      </section>
    </>
  );
};

export default Coresider;
