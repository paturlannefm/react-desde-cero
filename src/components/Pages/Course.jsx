import React from "react"

const courses = [
    {
        "id":1,
        "title":"React Desde Cero",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/a027fe1a-fcf4-4a1c-8717-c3d52d5f9879.jpg",
        "price":40,
        "professor":"Paturlanne Miguel"
    },
    {
        "id":2,
        "title":"Symfony Desde Cero",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/8cb7bce7-eb7c-4925-af03-8e22f9c0e9a9.jpg",
        "price":50,
        "professor":"Alan Bruno"
    },
    {
        "id":3,
        "title":"Introduccion a la Inteligencia Artificial",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/f0b3c8c9-c922-4839-ae4e-4152b8b43c44.png",
        "price":20,
        "professor":"Pipi Tomi"
    },
    {
        "id":4,
        "title":"Symfony Desde Cero 2",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/8cb7bce7-eb7c-4925-af03-8e22f9c0e9a9.jpg",
        "price":90,
        "professor":"Ariel Orrino"
    },
    {
        "id":5,
        "title":"Introduccion a Api Rest",
        "image":"https://edteam-media.s3.amazonaws.com/courses/medium/fbda9747-85b7-482e-8ffc-547b98031ca4.png",
        "price":100,
        "professor":"Carlitos Veron"
    }
]

const Course = ({ match }) => {

    const currentCourse = courses.filter(c => c.id === parseInt(match.params.id) )[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            currentCourse ? (
                <>
                    <h1 className="m-cols-3">Curso: {currentCourse.title}</h1>
                    <img className="m-cols-1" src={ currentCourse.image} alt={currentCourse.title}></img>
                    <p className="m-cols-2">professor {currentCourse.professor}</p>
                </>
            )
                
                :  <h1>El curso no existe</h1>
         }
        </div>
    )
   
}

export default Course