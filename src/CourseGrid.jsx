import React from 'react'
import Curso from './Curso'

const cursos = [
    {
        "id":1,
        "titulo":"React Desde Cero",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/a027fe1a-fcf4-4a1c-8717-c3d52d5f9879.jpg",
        "price":40,
        "profesor":"Paturlanne Miguel"
    },
    {
        "id":2,
        "titulo":"Simpsons desde cero",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/8cb7bce7-eb7c-4925-af03-8e22f9c0e9a9.jpg",
        "price":50,
        "profesor":"Alan Bruno"
    },
    {
        "id":3,
        "titulo":"Padel curso men sisi",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/f0b3c8c9-c922-4839-ae4e-4152b8b43c44.png",
        "price":20,
        "profesor":"Pipi Tomi"
    },
    {
        "id":4,
        "titulo":"Como vender humo",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/8cb7bce7-eb7c-4925-af03-8e22f9c0e9a9.jpg",
        "price":90,
        "profesor":"Ariel Orrino"
    },
    {
        "id":5,
        "titulo":"Como recibirte sin hacer un pomo",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/fbda9747-85b7-482e-8ffc-547b98031ca4.png",
        "price":100,
        "profesor":"Carlitos Veron"
    }
]


const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { cursos.map(c => (
        <Curso 
        key={c.id}
        id={c.id}
        title={c.titulo}
        price={c.price}
        image={c.image}
        profesor={c.profesor} />
        )) }
    </div>
)


export default CourseGrid;