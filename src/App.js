import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const cursos = [
  {
    "title":"React desde cero",
    "image":"https://www.sigdeletras.com/images/blog/202004_react_leaflet/react.png",
    "price":"30",
    "profesor": "Paturlanne Miguel"
  }, 
  {
    "title":"HTML desde cero",
    "image":"https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/que-es-html-opengraph.png",
    "price":"20",
    "profesor": "Alan Bruno"
  }, 
  {
    "title":"Tenis desde cero",
    "image":"https://images.ole.com.ar/2020/09/19/7NL4kvGum_320x210__1.jpg",
    "price":"10",
    "profesor": "Paturlanne Miguel"
  }, 
  {
    "title":"Pipitomi",
    "image":"https://www.sigdeletras.com/images/blog/202004_react_leaflet/react.png",
    "price":"35",
    "profesor": "Paturlanne Miguel"
  }
]


const App = () => (
    <>
    
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

  <div className="ed-grid m-grid-3">
      {
        cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/>)
      } 
  </div>
  </>
)


export default App;
