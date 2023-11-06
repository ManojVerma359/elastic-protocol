import React from "react";
import { Container } from "react-bootstrap";

const Stretch = () => {
  return (
    <>
    
      <section className="bg-black bull_img min_100vh ">
        <h2 className="fs-52 fw-800 ff-plus text-white text-center ">
          Amplify and stretch gains
        </h2>
        <div className=" ">
          <Container>
            <div className="mycontainer">
              <div className="d-flex justify-content-center align-items-center min_100vh">
                <p className="fs-14 fw-400 ff-ralway text-white text-center pt-md-0 pt-3">
                  We take a different balanced approach to finding and creating
                  yield opportunities in{" "}
                  <span className="fs-14 fw-400 ff-ralway text-white d-sm-block">
                    the everchanging crypto market. Our yield strategies help
                    users stay protected and{" "}
                  </span>{" "}
                  hedged during bear markets and amplify yield during bull
                  markets without resorting{" "}
                  <span className="fs-14 fw-400 ff-ralway text-white d-sm-block">
                    {" "}
                    to leverage or other dangerous techniques.
                  </span>
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Stretch;
