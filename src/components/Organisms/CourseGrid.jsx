import React, { Component } from 'react'
import CourseCard from '../Molecules/CourseCard'
import Axios from "axios"

class CourseGrid extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        Axios.get('https://my-json-server.typicode.com/paturlannefm/react-desde-cero/courses/')
        .then(resp => {
            this.setState({
                courses: resp.data
            })
        })
    }

    render() {
        const { courses } = this.state
        return (
            <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                { courses.map(c => (
                <CourseCard 
                key={c.id}
                id={c.id}
                title={c.title}
                price={c.price}
                image={c.image}
                professor={c.professor} />
                )) }
            </div>
        )
    }

}


export default CourseGrid;