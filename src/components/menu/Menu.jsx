import React from "react";
import { useState } from "react";
import Model from "./Model";
import   DB from "./BD.json";
export default function Menu() {
  const [SelectedItem, setSelectedItem] = useState(null);


  return (
    <div>
      <main>
        <article>
          <section className="section menu" aria-label="menu-label" id="menu">
            <div className="container">
              <h2 className="headline-1 section-title text-center">
                Delicious Menu
              </h2>

              <ul className="grid-list">
                {DB.map((item) => (
                  <li key={item.id}>
                    <div className="menu-card hover:card">
                      <figure
                        className="card-banner img-holder"
                        style={{ "--width": 100, "--height": 100 }}
                      >
                        <img
                          onClick={() => setSelectedItem(item)} // تحديد العنصر المختار
                          src={item.image}
                          width={100}
                          height={100}
                          loading="lazy"
                          alt={item.alt}
                          className="img-cover"
                        />
                      </figure>
                      <div>
                        <h3 className="title-3">{item.title}</h3>
                        {item.badge && (
                          <span className="badge label-1">{item.badge}</span>
                        )}
                        <span className="span title-2">{item.price}</span>
                        <p className="card-text label-1">{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <Model
                SelectedItem={SelectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
