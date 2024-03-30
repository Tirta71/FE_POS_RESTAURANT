import React from "react";

export default function OurService() {
  return (
    <section className="section-primary our-service pb-120">
      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="section-header">
          <h2 className="text-white">Our Best Service</h2>
          <span>~ Experiences on food ~</span>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="our-service-col">
              <h3>- Serve -</h3>
              <img src="images/serve-white-icon.png" alt="" />
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="our-service-col">
              <h3>- Fresh food -</h3>
              <img src="images/fresh-food-white-icon.png" alt="" />
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="our-service-col mb-md-0">
              <h3>- Hot food -</h3>
              <img src="images/hot-food-white-icon.png" alt="" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="our-service-col mb-0">
              <h3>- Coffee -</h3>
              <img src="images/coffee-white-icon.png" alt="" />
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
