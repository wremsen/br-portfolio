import React from "react";
import { OurClientsDetails } from "../config/dataConfig";

const Clients = () => {
  return (
    <>
      <div className="bg-body-tertiary py-5">
        <div className="container">
          <div className="brands-grid separator-border">
            <div className="row align-items-center">
             {
              OurClientsDetails.posters.map(({id, img}) =>(
                <div key={id} className="col-6 col-sm-3 col-lg-2 text-center">
                <a href>
                  <img
                    className="img-fluid wow bounceIn"
                    src={img}
                    alt="error"
                  />
                </a>
              </div>
              ))
             }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
