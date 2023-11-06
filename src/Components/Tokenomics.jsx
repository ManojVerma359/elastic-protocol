import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import token1 from "../assets/images/token1.png";
import token2 from "../assets/images/token2.png";
import token3 from "../assets/images/token3.png";
import token4 from "../assets/images/token4.png";
import token5 from "../assets/images/token5.png";

const Tokenomics = () => {
  return (
    <>
      <section className="token d-none d-lg-block position-relative">
        <div className="container mycontainer py-lg-178">
          <Row className="justify-content-between align-items-center pt-5 pb-5">
            <Col lg={5} className="mb-4 py-5">
              <div>
                <h2 className="fs-46 text-black ff-nue font-700 mb-3 pb-1">
                  EEFI Tokenomics
                </h2>
                <p className="fs-16 ff-ralway line-160 text-black fw-400 mb-4 pb-2">
                  EEFI is the special rewards token of the protocol that is
                  minted and distributed in a decentralized fashion. It produces
                  amplified yield during uptrends and protects from downside
                  action during downtrends.
                </p>
                <button className="fs-16 fw-500 ff-ralway  view-btn mb-5">
                  View Contract Address
                </button>
                <h3 className="fs-24 fw-700 ff-nue text-black line-120 text-capitalize mb-4 pb-1">
                  IBO TOKENOMICS
                </h3>
                <h4 className="fs-18 fw-700 ff-ralway line-134 text-black pb-3 mb-0">
                  IBO Round 1 Price
                </h4>
                <p className="fs-16 fw-600 ff-ralway light-blue line-134 pb-3 mb-1">
                  1 EEFI = $12
                </p>
                <h4 className="fs-18 fw-700 ff-ralway line-134 text-black pb-3 mb-0">
                  IBO Round 2 Price
                </h4>
                <p className="fs-16 fw-600 ff-ralway light-blue line-134 pb-3 mb-1">
                  1 EEFI = $12
                </p>
                <h4 className="fs-18 fw-600 ff-ralway line-134 text-black pb-3 mb-0">
                  IBO Round 3 Price
                </h4>
                <p className="fs-16 fw-600 ff-ralway light-blue line-134 pb-3 mb-1">
                  1 EEFI = $12
                </p>
                <h4 className="fs-18 fw-700 ff-ralway line-134 text-black pb-3 mb-0">
                  total supply
                </h4>
                <p className="fs-16 fw-600 ff-ralway light-blue line-134 mb-0">
                  17,000
                </p>
              </div>
            </Col>
            <Col lg={5} className=" py-5">
              <div className="d-flex flex-column gap-31">
                <div className="d-flex align-items-center">
                  <img className="img_hover" src={token1} alt="#id" />
                  <div className="d-flex flex-column">
                    <h5 className="fs-24 ff-nue fw-700 text-white line-120 text-capitalize">
                      Decentralized Yield
                    </h5>
                    <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                      Protocol’s native utility | rewards token
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img className="img_hover" src={token2} alt="#id" />

                  <div className="d-flex flex-column">
                    <h5 className="fs-24 ff-nue fw-700 text-white line-120 text-capitalize">
                      Extra Value
                    </h5>
                    <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                      Can be highly deflationary during market uptrends
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img className="img_hover" src={token3} alt="#id" />
                  <div className="d-flex flex-column">
                    <h5 className="fs-24 ff-nue fw-700 text-white line-120 text-capitalize">
                      Smart Index
                    </h5>
                    <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                      Token can be viewed as an index of all strategy
                      performance on the protocol
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img className="img_hover" src={token4} alt="#id" />
                  <div className="d-flex flex-column">
                    <h5 className="fs-24 ff-nue fw-400 text-white line-120 text-capitalize">
                      Social Coordination (E,E)
                    </h5>
                    <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                      Promotes hyper social coordination around all strategies
                      on the protocol (E,E) (makes hedging fun and working
                      together produces more benefits to all vault users)
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img className="img_hover" src={token5} alt="#id" />
                  <div className="d-flex flex-column">
                    <h5 className="fs-24 ff-nue fw-700 text-white line-120 text-capitalize">
                      Expansive Utility Dimensions
                    </h5>
                    <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                      EEFI’s utility will expand as more strategies are added to
                      the protocol.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="white-token d-lg-none">
        <Container className="mycontainer py-5">
          <div>
            <h2 className="fs-46 text-black ff-nue fw-700 mb-3 pb-1">
              EEFI Tokenomics
            </h2>
            <p className="fs-16 ff-ralway line-160 text-black fw-400 mb-4 pb-2">
              EEFI is the special rewards token of the protocol that is minted
              and distributed in a decentralized fashion. It produces amplified
              yield during uptrends and protects from downside action during
              downtrends.
            </p>
            <button className="fs-16 fw-500 ff-ralway  view-btn mb-5">
              View Contract Address
            </button>
            <h3 className="fs-24 fw-700 ff-nue text-black line-120 text-capitalize mb-4 pb-1">
              IBO TOKENOMICS
            </h3>
            <h4 className="fs-18 fw-700 ff-ralway line-134 text-black pb-3 mb-0">
              IBO Round 1 Price
            </h4>
            <p className="fs-16 fw-600 ff-ralway light-blue line-134 pb-3 mb-1">
              1 EEFI = $12
            </p>
            <h4 className="fs-18 fw-700 ff-ralway line-134 text-black pb-3 mb-0">
              IBO Round 2 Price
            </h4>
            <p className="fs-16 fw-500 ff-ralway light-blue line-134 pb-3 mb-1">
              1 EEFI = $12
            </p>
            <h4 className="fs-18 fw-700 ff-ralway line-134 text-black pb-3 mb-0">
              IBO Round 3 Price
            </h4>
            <p className="fs-16 fw-500 ff-ralway light-blue line-134 pb-3 mb-1">
              1 EEFI = $12
            </p>
            <h4 className="fs-18 fw-700 ff-ralway line-134 text-black pb-3 mb-0">
              total supply
            </h4>
            <p className="fs-16 fw-500 ff-ralway light-blue line-134 mb-0">
              17,000
            </p>
          </div>
        </Container>
      </section>

      <section className="blue-token d-lg-none">
        <Container className="mycontainer py-5">
          <div className="d-flex flex-column gap-31">
            <div className="d-flex align-items-center">
              <img className="img_hover" src={token1} alt="#id" />
              <div className="d-flex flex-column">
                <h5 className="fs-24 ff-nue fw-700 text-white line-120 text-capitalize">
                  Decentralized Yield
                </h5>
                <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                  Protocol’s native utility | rewards token
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img className="img_hover" src={token2} alt="#id" />
              <div className="d-flex flex-column">
                <h5 className="fs-24 ff-nue fw-700 text-white line-120 text-capitalize">
                  Extra Value
                </h5>
                <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                  Can be highly deflationary during market uptrends
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img className="img_hover" src={token3} alt="#id" />
              <div className="d-flex flex-column">
                <h5 className="fs-24 ff-nue fw-700 text-white line-120 text-capitalize">
                  Smart Index
                </h5>
                <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                  Token can be viewed as an index of all strategy performance on
                  the protocol
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img className="img_hover" src={token4} alt="#id" />
              <div className="d-flex flex-column">
                <h5 className="fs-24 ff-nue fw-700 text-white line-120 text-capitalize">
                  Social Coordination (E,E)
                </h5>
                <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                  Promotes hyper social coordination around all strategies on
                  the protocol (E,E) (makes hedging fun and working together
                  produces more benefits to all vault users)
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img className="img_hover" src={token5} alt="#id"/>
              <div className="d-flex flex-column">
                <h5 className="fs-24 ff-nue fw-700 text-white line-120 text-capitalize">
                  Expansive Utility Dimensions
                </h5>
                <p className="fs-16 ff-ralway fw-400 line-183 op8 text-white mb-0">
                  EEFI’s utility will expand as more strategies are added to the
                  protocol.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Tokenomics;
