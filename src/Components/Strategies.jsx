import React from "react";
import { Container, Row, Col } from "react-bootstrap";
 // import futureimg1 from "../assets/images/futureimg1.png"
import futureimg2 from "../assets/images/futureimg2.png";
import futureimg3 from "../assets/images/futureimg3.png";
import futureimg4 from "../assets/images/futureimg4.png";
 import futureimg5 from "../assets/images/futureimg5.png"
 import futureimg6 from "../assets/images/futureimg6.png";
  import futureimg7 from "../assets/images/futureimg7.png"
  import futureimg8 from "../assets/images/futureimg8.png"
  import futureimg9 from "../assets/images/futureimg9.png"
import small_img from "../assets/images/small_img.png";
import hov_imgone from "../assets/images/hov_imgone.png";
import hov_imgtwo from "../assets/images/hov_imgtwo.png";
import hov_imgthree from "../assets/images/hov_imgthree.png";
import hov_imgfour from "../assets/images/hov_imgfour.png";
import fimg3 from "../assets/images/fimg3.png"
import fimg2 from "../assets/images/fimg2.png"
import fimg5 from "../assets/images/fimg5.png"
import fimg6 from "../assets/images/fimg6.png"
import fimg7 from "../assets/images/fimg7.png"
import fimg8 from "../assets/images/fimg8.png"
import fimg9 from "../assets/images/fimg9.png"
import fimg4 from "../assets/images/fimg4.webp"

const Strategies = () => {
  return (
    <>
      <div className="bg_future min-vh-100">
        <Container>
          <div className="mycontainer pt-120 pb-110">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="future fs-46 fw-700 ff-nue text-center">
                Future Use Cases (Strategies)
              </h2>
              <p className="fs-16 fw-400 ff-ralway text-black elastic text-center pt-2">
                Elastic Protocol will continue to pioneer an expanding ecosystem
                of yield strategies that will cater to DeFi users across a range
                of blockchains, communities, and interests. Each will help in
                generating sustainable yield and expanding the utility of the
                native utility token $EEFI. Here is some of what we are planning
                and looking into:
              </p>
            </div>
            <Row className="pt-70 justify-content-center">
              <Col lg={4} sm={6} >
                <div className="position-relative future-card">
                  <img className="w-100 ww" src={futureimg8} alt="#" />
                  <div className="overlay-card position-absolute z-1 top-0 left-0 rght-0 w-100 h-100 opacity-0">
                    <div className="img-card overflow-hidden">
                      <img
                        src={small_img}
                        alt="card-img"
                        className="w-100 overlay-small-img"
                      />
                    </div>
                    <h2 className="real ff-nue fw-700  text-white text-capitalize pt-1 mt-2 mt-md-3">
                      REAL YIELD
                    </h2>
                    <p className="text-white ff-raleway thesepara fw-400  op8">
                      These are strategies that will explore other Real Yield
                      ecosystems outside of Olympus DAO. For example GMX - the
                      leading leverage platform that{" "}
                    </p>
                    <p className="text-white ff-ralway thesepara fw-400  op8 mb-2 mb-md-4">
                      distributes 100% of fees. We are also looking at Vela
                      Exchange, Jones DAO and many others on Arbitrum.
                    </p>

                    <h3 className="text-white platform ff-ralway fw-500 ">
                      Platforms:{" "}
                    </h3>
                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                      <div className="col-3 ">
                        <img
                          src={hov_imgone}
                          alt="card-one-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgtwo}
                          alt="card-two-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgthree}
                          alt="card-three-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgfour}
                          alt="card-four-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={6} className="mt-5 mt-sm-0" >
                <div className="position-relative future-card">
                  <img className="w-100 " src={futureimg2} alt="#" />
                  <div className="overlay-card position-absolute z-1 top-0 left-0 rght-0 w-100 h-100 opacity-0">
                    <div className="img-card overflow-hidden">
                      <img
                        src={fimg2}
                        alt="card-img"
                        className="w-100 overlay-small-img"
                      />
                    </div>
                    <h2 className=" real ff-nue fw-700  text-white text-capitalize pt-1 mt-2 mt-md-3">
                      REAL YIELD
                    </h2>
                    <p className="text-white ff-raleway thesepara fw-400  op8">
                      These are strategies that will explore other Real Yield
                      ecosystems outside of Olympus DAO. For example GMX - the
                      leading leverage platform that{" "}
                    </p>
                    <p className="text-white ff-ralway thesepara fw-400  op8 mb-2 mb-md-4">
                      distributes 100% of fees. We are also looking at Vela
                      Exchange, Jones DAO and many others on Arbitrum.
                    </p>

                    <h3 className="text-white platform ff-ralway fw-500 ">
                      Platforms:{" "}
                    </h3>
                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                      <div className="col-3 ">
                        <img
                          src={hov_imgone}
                          alt="card-one-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgtwo}
                          alt="card-two-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgthree}
                          alt="card-three-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgfour}
                          alt="card-four-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={6} className="mt-5 mt-lg-0" >
                <div className="position-relative future-card">
                  <img className="w-100 " src={futureimg3} alt="#" />
                  <div className="overlay-card position-absolute z-1 top-0 left-0 rght-0 w-100 h-100 opacity-0">
                    <div className="img-card overflow-hidden">
                      <img
                        src={fimg3}
                        alt="card-img"
                        className="w-100 overlay-small-img"
                      />
                    </div>
                    <h2 className="real ff-nue fw-700 text-white text-capitalize pt-1 mt-2 mt-md-3">
                      REAL YIELD
                    </h2>
                    <p className="text-white ff-raleway thesepara fw-400  op8">
                      These are strategies that will explore other Real Yield
                      ecosystems outside of Olympus DAO. For example GMX - the
                      leading leverage platform that{" "}
                    </p>
                    <p className="text-white ff-ralway thesepara fw-400  op8 mb-2 mb-md-4">
                      distributes 100% of fees. We are also looking at Vela
                      Exchange, Jones DAO and many others on Arbitrum.
                    </p>

                    <h3 className="text-white platform ff-ralway fw-500 ">
                      Platforms:{" "}
                    </h3>
                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                      <div className="col-3 ">
                        <img
                          src={hov_imgone}
                          alt="card-one-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgtwo}
                          alt="card-two-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgthree}
                          alt="card-three-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgfour}
                          alt="card-four-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={6}  className="mt-5" >
                <div className="position-relative future-card">
                  <img className="w-100 " src={futureimg4} alt="#" />
                  <div className="overlay-card position-absolute z-1 top-0 left-0 rght-0 w-100 h-100 opacity-0">
                    <div className="img-card overflow-hidden">
                      <img
                        src={fimg4}
                        alt="card-img"
                        className="w-100 overlay-small-img"
                      />
                    </div>
                    <h2 className="real ff-nue fw-700  text-white text-capitalize pt-1 mt-2 mt-md-3">
                      REAL YIELD
                    </h2>
                    <p className="text-white ff-raleway thesepara fw-400  op8">
                      These are strategies that will explore other Real Yield
                      ecosystems outside of Olympus DAO. For example GMX - the
                      leading leverage platform that{" "}
                    </p>
                    <p className="text-white ff-ralway thesepara fw-400  op8 mb-2 mb-md-4">
                      distributes 100% of fees. We are also looking at Vela
                      Exchange, Jones DAO and many others on Arbitrum.
                    </p>

                    <h3 className="text-white platform ff-ralway fw-500 ">
                      Platforms:{" "}
                    </h3>
                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                      <div className="col-3 ">
                        <img
                          src={hov_imgone}
                          alt="card-one-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgtwo}
                          alt="card-two-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgthree}
                          alt="card-three-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgfour}
                          alt="card-four-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={6} className="mt-5" >
                <div className="position-relative future-card">
                  <img className="w-100 " src={futureimg5} alt="#" />
                  <div className="overlay-card position-absolute z-1 top-0 left-0 rght-0 w-100 h-100 opacity-0">
                    <div className="img-card overflow-hidden">
                      <img
                        src={fimg5}
                        alt="card-img"
                        className="w-100 overlay-small-img"
                      />
                    </div>
                    <h2 className="real ff-nue fw-700  text-white text-capitalize pt-1 mt-2 mt-md-3">
                      REAL YIELD
                    </h2>
                    <p className="text-white ff-raleway thesepara fw-400  op8">
                      These are strategies that will explore other Real Yield
                      ecosystems outside of Olympus DAO. For example GMX - the
                      leading leverage platform that{" "}
                    </p>
                    <p className="text-white ff-ralway thesepara fw-400  op8 mb-2 mb-md-4">
                      distributes 100% of fees. We are also looking at Vela
                      Exchange, Jones DAO and many others on Arbitrum.
                    </p>

                    <h3 className="text-white platform ff-ralway fw-500 line-160">
                      Platforms:{" "}
                    </h3>
                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                      <div className="col-3 ">
                        <img
                          src={hov_imgone}
                          alt="card-one-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgtwo}
                          alt="card-two-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgthree}
                          alt="card-three-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgfour}
                          alt="card-four-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={6} className="mt-5" >
                <div className="position-relative future-card">
                  <img className="w-100 " src={futureimg6} alt="#" />
                  <div className="overlay-card position-absolute z-1 top-0 left-0 rght-0 w-100 h-100 opacity-0">
                    <div className="img-card overflow-hidden">
                      <img
                        src={fimg6}
                        alt="card-img"
                        className="w-100 overlay-small-img"
                      />
                    </div>
                    <h2 className="real ff-nue fw-700  text-white text-capitalize pt-1 mt-2 mt-md-3">
                      REAL YIELD
                    </h2>
                    <p className="text-white ff-raleway thesepara fw-400  op8">
                      These are strategies that will explore other Real Yield
                      ecosystems outside of Olympus DAO. For example GMX - the
                      leading leverage platform that{" "}
                    </p>
                    <p className="text-white ff-ralway thesepara fw-400  op8 mb-2 mb-md-4">
                      distributes 100% of fees. We are also looking at Vela
                      Exchange, Jones DAO and many others on Arbitrum.
                    </p>

                    <h3 className="text-white platform ff-ralway fw-500 line-160">
                      Platforms:{" "}
                    </h3>
                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                      <div className="col-3 ">
                        <img
                          src={hov_imgone}
                          alt="card-one-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgtwo}
                          alt="card-two-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgthree}
                          alt="card-three-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgfour}
                          alt="card-four-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={6} className="mt-5">
                <div className="position-relative future-card">
                  <img className="w-100 " src={futureimg7} alt="#" />
                  <div className="overlay-card position-absolute z-1 top-0 left-0 rght-0 w-100 h-100 opacity-0">
                    <div className="img-card overflow-hidden">
                      <img
                        src={fimg7}
                        alt="card-img"
                        className="w-100 overlay-small-img"
                      />
                    </div>
                    <h2 className="real ff-nue fw-700  text-white text-capitalize pt-1 mt-2 mt-md-3">
                      REAL YIELD
                    </h2>
                    <p className="text-white ff-raleway thesepara fw-400  op8">
                      These are strategies that will explore other Real Yield
                      ecosystems outside of Olympus DAO. For example GMX - the
                      leading leverage platform that{" "}
                    </p>
                    <p className="text-white ff-ralway thesepara fw-400  op8 mb-2 mb-md-4">
                      distributes 100% of fees. We are also looking at Vela
                      Exchange, Jones DAO and many others on Arbitrum.
                    </p>

                    <h3 className="text-white platform ff-ralway fw-500 ">
                      Platforms:{" "}
                    </h3>
                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                      <div className="col-3 ">
                        <img
                          src={hov_imgone}
                          alt="card-one-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgtwo}
                          alt="card-two-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgthree}
                          alt="card-three-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgfour}
                          alt="card-four-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={6} className="mt-5">
                <div className="position-relative future-card">
                  <img className="w-100 " src={futureimg8} alt="#" />
                  <div className="overlay-card position-absolute z-1 top-0 left-0 rght-0 w-100 h-100 opacity-0">
                    <div className="img-card overflow-hidden">
                      <img
                        src={fimg8}
                        alt="card-img"
                        className="w-100 overlay-small-img"
                      />
                    </div>
                    <h2 className="real ff-nue fw-700  text-white text-capitalize pt-1 mt-2 mt-md-3">
                      REAL YIELD
                    </h2>
                    <p className="text-white ff-raleway thesepara fw-400  op8">
                      These are strategies that will explore other Real Yield
                      ecosystems outside of Olympus DAO. For example GMX - the
                      leading leverage platform that{" "}
                    </p>
                    <p className="text-white ff-ralway thesepara fw-400  op8 mb-2 mb-md-4">
                      distributes 100% of fees. We are also looking at Vela
                      Exchange, Jones DAO and many others on Arbitrum.
                    </p>

                    <h3 className="text-white platform ff-ralway fw-500 ">
                      Platforms:{" "}
                    </h3>
                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                      <div className="col-3 ">
                        <img
                          src={hov_imgone}
                          alt="card-one-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgtwo}
                          alt="card-two-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgthree}
                          alt="card-three-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgfour}
                          alt="card-four-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} sm={6} className="mt-5 " >
                <div className="position-relative future-card">
                  <img className="w-100 " src={futureimg9} alt="#" />
                  <div className="overlay-card position-absolute z-1 top-0 left-0 rght-0 w-100 h-100 opacity-0">
                    <div className="img-card overflow-hidden">
                      <img
                        src={fimg9}
                        alt="card-img"
                        className="w-100 overlay-small-img"
                      />
                    </div>
                    <h2 className="real ff-nue fw-700  text-white text-capitalize pt-1 mt-2 mt-md-3">
                      REAL YIELD
                    </h2>
                    <p className="text-white ff-raleway thesepara fw-400  op8">
                      These are strategies that will explore other Real Yield
                      ecosystems outside of Olympus DAO. For example GMX - the
                      leading leverage platform that{" "}
                    </p>
                    <p className="text-white ff-ralway thesepara fw-400  op8 mb-2 mb-md-4">
                      distributes 100% of fees. We are also looking at Vela
                      Exchange, Jones DAO and many others on Arbitrum.
                    </p>

                    <h3 className="text-white  platform ff-ralway fw-500">
                      Platforms:{" "}
                    </h3>
                    <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                      <div className="col-3 ">
                        <img
                          src={hov_imgone}
                          alt="card-one-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgtwo}
                          alt="card-two-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgthree}
                          alt="card-three-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={hov_imgfour}
                          alt="card-four-img"
                          className="overlay-card-partner img_hover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Strategies;
