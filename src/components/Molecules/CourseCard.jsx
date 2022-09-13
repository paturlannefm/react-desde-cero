import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CourseCard = ({id, title, image, price, professor, onClickFunction}) => (
    
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/cursos/${id}`}>
            <img src={image} alt={title}/>
        </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        
        <h3 className="center">{title}</h3> 
        <div className="s-main-center"> 
            {`Profesor: ${professor}`}
        </div>
        <div className="s-main-center"> 
            <a className="button--ghost-alert button--tiny" onClick={onClickFunction} href="#">{`$ ${price}` }</a>
        </div>      
        
    </div>
    </article>

)

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    professor: PropTypes.string
}

CourseCard.defaultProps = {
    title: "No se encontro titulo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_hbUApsP7Dsm3dj3X6fvzol4_f9Q6ITmaDA&usqp=CAU",
    price: "--",
    professor: ""
}

export default CourseCard;