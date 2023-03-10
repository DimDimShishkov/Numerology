import React from "react";
import "./Psychometric.css";

export function Psychometric({ props }) {
  return (
    <section className="psychometric">
      <div className="psychometric__containers">
        <div className="psychometric__container">
          <div className="psychometric__results">
            {props[0]?.basic?.map((item) => (
              <div className="psychometric__result" key={item.name}>
                <p className="psychometric__heading">
                  {item.number.split("-")[1] === "нет" ? "-" : item.number}
                </p>
                <p className="psychometric__subheading">
                  {item.name?.split(" ")[0]}
                </p>
              </div>
            ))}
          </div>

          <div className="psychometric__verticals">
            {props[1]?.addition?.slice(0, 3).map((item) => (
              <div className="psychometric__item" key={item.name}>
                <p className="psychometric__heading">
                  {item.number.split("-")[1] === "нет" ? "-" : item.number}
                </p>
                <p className="psychometric__subheading">
                  {item.name?.split(" ")[0]}
                </p>
              </div>
            ))}
          </div>

          <div className="psychometric__horizontals">
            {props[1]?.addition?.slice(3, 6).map((item) => (
              <div className="psychometric__item" key={item.name}>
                <p className="psychometric__heading">
                  {item.number.split("-")[1] === "нет" ? "-" : item.number}
                </p>
                <p className="psychometric__subheading">
                  {item.name?.split(" ")[0]}
                </p>
              </div>
            ))}
          </div>

          <div className="psychometric__item">
            <p className="psychometric__heading">
              {props[1]?.addition[6]?.number}/{props[1]?.addition[7]?.number}
            </p>
            <p className="psychometric__subheading">
              {props[1]?.addition[6]?.name}/{props[1]?.addition[7]?.name}
            </p>
          </div>
        </div>

        <div className="psychometric__ads"></div>
      </div>
    </section>
  );
}
