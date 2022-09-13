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
        Axios.get('https://my-json-server.typicode.com/paturlannefm/react-desde-cero/recipes')
        .then(resp => {
            this.setState({
                courses: resp.data
            })
        })
    }

    postCourse = () => {
       console.log("pepeppe")
       Axios.post('https://my-json-server.typicode.com/paturlannefm/react-desde-cero/recipes', {
        recipe_id:"5-743-34802s",
        recipe_state: 'Fred',
        comments: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      };

    render() {
        const { courses } = this.state
        return (
            <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                { courses.map(c => (
                <CourseCard 
                key={c.recipe_id}
                id={c.recipe_id}
                title={c.recipe_state}
                // price={c.recipe_state}
                onClickFunction = {this.postCourse}
                price={254}
                image={c.image}
                professor={c.comments} />
                )) }
            </div>
        )
    }

}


export default CourseGrid;