import React from "react"
import Banner from "../Organisms/Banner"
import "./learngrid.css"

const Home = ( ) => (
   <div>
      <Banner/>
      <div className="grid-container">
         <div className="item1">Header</div>
         <div className="item2">Menu</div>
         <div className="item3">Main</div>
         <div className="item4">Aside</div>
         <div className="item5">Footer</div>
      </div>
   </div>
   
)


export default Home