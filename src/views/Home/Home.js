import "./Home.css";
import Config from "./../../utills/Config.json";

console.log(Config);
import React from 'react'

export default function Home() {

  return (
    <>
       <div>
           <h1 className="shop-heading"  style={{color:Config.theme.orangeColor}}>{Config.shopname}</h1>
           <img src="https://mirchi.com/os/cdn/content/images/Sweets_mobile_273039.jpg" className="header-img"/>

           <div className="description-container">
                  <h3 className="scrolling-content">{Config.description}</h3>  
           </div>

           
       </div>
    </>
  )
}
