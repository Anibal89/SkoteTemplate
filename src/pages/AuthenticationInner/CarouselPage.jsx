import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Col } from "reactstrap";

const CarouselPage = () => {
  return (
    <React.Fragment>
      <Col xl={9}>
        <div className="auth-full-bg pt-lg-5 p-4">
          <div className="w-100">
            <div className="bg-overlay backgroundfondo3"></div>
            <div className="d-flex h-100 flex-column">
              <div className="p-4 mt-auto">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="text-center">
                      <h4 style={{color: '#fff'}} className="mb-3">
                        <i className="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i>
                        <span className="">UNI</span> S.A.
                      </h4>
                      <div dir="ltr">
                        <Carousel showThumbs={false} className="slider_css">
                          <div>
                            <div style={{color: '#fff'}} className="item">
                              <div className="py-3">
                                <p className="font-size-16 mb-4">
                                  &quot;Somos una empresa, dedicada a la fabricación de bolsas plásticas para diversos usos, estamos en el mercado Guatemalteco desde Marzo del 2003, acomodándonos al mercado y a nuestros clientes.&ldquo;
                                </p>

                                <div>
                                  <h4 style={{color: '#fff'}} className="font-size-16">
                                    2022
                                  </h4>
                                  <p className="font-size-14 mb-0">
                                    - 
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div style={{color: '#fff'}} className="item">
                              <div className="py-3">
                                <p className="font-size-16 mb-4">
                                  &quot;Nuestra misión satisfacer las necesidades de nuestros clientes en servicio y productos de bolsas plásticos; mediante el trabajo en equipo.&ldquo;
                                </p>

                                <div>
                                  <h4 style={{color: '#fff'}} className="font-size-16">
                                    2022
                                  </h4>
                                  <p className="font-size-14 mb-0">
                                    -
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  )
}
export default CarouselPage
