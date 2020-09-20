import React from 'react';
import PropTypes from 'prop-types';


const Curso = ({title, image, price, profesor}) => (
    
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title}/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        
        <h3 className="center">{title}</h3> 
        <div className="s-main-center"> 
            {`Profesor: ${profesor}`}
        </div>
        <div className="s-main-center"> 
            <a className="button--ghost-alert button--tiny" href="google.com">{`$ ${price}` }</a>
        </div>      
        
    </div>
    </article>

)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontro titulo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_hbUApsP7Dsm3dj3X6fvzol4_f9Q6ITmaDA&usqp=CAU",
    price: "--",
    profesor: ""
}

export default Curso;