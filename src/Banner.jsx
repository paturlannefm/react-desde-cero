import React from "react"

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Patu Aprendiendo React</p>
          <p>Aprendiendo React</p>
          <a href="https://pamperorufino.com" className="button">Aprender</a>
        </div>
      </div>
    </div>
  </div>
)

export default Banner;