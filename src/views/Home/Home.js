import "./Home.css";
import React from "react";
import Config from "./../../utills/Config.json";

console.log(Config);

export default function Home() {
  return (
    <>
      <h1 className="shop-heading text-center">{Config.shopname}</h1>
      <img src={Config.img} className="header-img" />
      {/* <h3 className="description-container scrolling-content">{Config.description}</h3> */}
      <div>
        <h1 className="shop-heading text-center">Selections:</h1>

        <div className="display-flex">
          {Config.Selection.map((selectiondata, index) => {
            const { description, price, quality, name } = selectiondata;

            return (
              <>
                <div className="flex-container">
                  <div
                    className="selection-card"
                    style={{ backgroundColor: Config.theme.secondaryColor }}
                  >
                    <h3 className="text-center">{name}</h3>
                    <h4 style={{ color: Config.theme.orangeColor }}>
                      {description}
                    </h4>
                    <h2>Price: {price}</h2>
                    <h1>quality:{quality}</h1>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <h1 className="shop-heading text-center">Services :</h1>

        {/* {Config.services.map((servicesData , index) => {
                 {Object.values(servicesData)[0]} 
            })}  */}

<div className="display-flex">
        {Config.services.map((servicesData, index) => {
          const { img, product_name, description, price, button } =
            servicesData;
          return (
            <>
              <div
                className="services-card"
                style={{ backgroundColor: Config.theme.secondaryColor }}
              >
                <img src={img} className="food-img" />
                <h3>{price}</h3>
                <p>{product_name}</p>
                <p>{description}</p>
                <button> {button}</button>
              </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}
