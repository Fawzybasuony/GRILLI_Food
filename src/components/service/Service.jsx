import React from "react";

export default function Service() {
  return (
    <main>
      <article>
        <section
          className="section service bg-black-10 text-center"
          aria-label="service"
        >
          <div className="container">
            <p className="section-subtitle label-2">Flavors For Royalty</p>
            <h2 className="headline-1 section-title">We Offer Top Notch</h2>
            <p className="section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>

            <ul className="grid-list">
              {[
                {
                  title: "Breakfast",
                  imgSrc: "https://img.freepik.com/free-photo/various-breakfast-food-with-crackers_140725-6473.jpg?t=st=1729464870~exp=1729468470~hmac=f638793e40952ca211deffd90bd6f70c551ee044b8c0f4d5fff19697d4d72dee&w=740",
                  altText: "Breakfast",
                },
                {
                  title: "Appetizers",
                  imgSrc: "https://img.freepik.com/free-photo/view-tasty-shawarma-dish_23-2151805446.jpg?t=st=1729464817~exp=1729468417~hmac=edf824fb201181b5db39e33b6324a23f720508689c97ab8a2965181d601da452&w=826",
                  altText: "Appetizers",
                },
                {
                  title: "Drinks",
                  imgSrc: "https://img.freepik.com/free-photo/cocktail_23-2148014940.jpg?t=st=1729464715~exp=1729468315~hmac=5ead4de8f215944cbabfe9cb8a81b6c54cb9b686d2ad86bc9197e7d61d8887c3&w=740",
                  altText: "Drinks",
                },
              ].map((service, index) => (
                <li key={index}>
                  <div className="service-card">
                    <a href="#" className="has-before hover:shine">
                      <figure
                        className="card-banner img-holder"
                        style={{ "--width": 285, "--height": 336 }}
                      >
                        <img
                          src={service.imgSrc}
                          width={285}
                          height={336}
                          loading="lazy"
                          alt={service.altText}
                          className="img-cover"
                        />
                      </figure>
                    </a>
                    <div className="card-content">
                      <h3 className="title-4 card-title">
                        <a href="#">{service.title}</a>
                      </h3>
                      <a href="#" className="btn-text hover-underline label-2">
                        View Menu
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <img
              src="./assets/images/shape-1.png"
              width={246}
              height={412}
              loading="lazy"
              alt="shape"
              className="shape shape-1 move-anim"
            />
            <img
              src="./assets/images/shape-2.png"
              width={343}
              height={345}
              loading="lazy"
              alt="shape"
              className="shape shape-2 move-anim"
            />
          </div>
        </section> 
      </article> 
    </main>
  );
}
