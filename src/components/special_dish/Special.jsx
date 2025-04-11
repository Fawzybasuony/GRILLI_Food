import React from "react";

export default function Special() {
  return (
    <main>
      <article>
        <section
          className="special-dish text-center"
          aria-labelledby="dish-label"
        >
          <div className="special-dish-banner">
            <img
              src="https://img.freepik.com/free-photo/view-delicious-shawarma-dish_23-2151805521.jpg?t=st=1729465124~exp=1729468724~hmac=8a7b6ace9831a3c0b845a5c8d490887a194d933a72e75f23fd28e5d2a8b15a33&w=360"
              width={940}
              height={900}
              loading="lazy"
              alt="special dish"
              className="img-cover"
            />
          </div>

          <div className="special-dish-content bg-black-10">
            <div className="container">
              <img
                src="./assets/images/badge-1.png"
                width={28}
                height={41}
                loading="lazy"
                alt="badge"
                className="abs-img"
              />

              <p className="section-subtitle label-2">Special Dish</p>

              <h2 className="headline-1 section-title">Lobster Tortellini</h2>

              <p className="section-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since when an unknown printer took a galley of type.
              </p>

              <div className="wrapper">
                <del className="del body-3">$40.00</del>
                <span className="span body-1">$20.00</span>
              </div>

              <a href="#" className="btn btn-primary">
                <span className="text text-1">View All Menu</span>
                <span className="text text-2" aria-hidden="true">
                  View All Menu
                </span>
              </a>
            </div>
          </div>

          <img
            src="./assets/images/shape-4.png"
            width={179}
            height={359}
            loading="lazy"
            alt=""
            className="shape shape-1"
          />
          <img
            src="./assets/images/shape-9.png"
            width={351}
            height={462}
            loading="lazy"
            alt=""
            className="shape shape-2"
          />
        </section>
      </article>
    </main>
  );
}
