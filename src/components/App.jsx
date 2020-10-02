import React from 'react';
import "../styles/styles.scss"
//import Curso from './Curso'
import Home from './Pages/Home'
import Form from './Pages/Form'
import CourseGrid from './Organisms/CourseGrid';
import Course from './Pages/Course';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Organisms/Header';
import History from './Pages/History'
import Users from './Pages/Users'



const App = () => (
  <Router>
    <Header/>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/cursos/:id"  component={ Course } />
      <Route path="/cursos"component={ CourseGrid } />
      <Route path="/historial/:valor"component={ History } />
      <Route path="/historial"component={ History } />
      <Route path="/usuarios"component={ Users } />
      <Route path="/formulario"  component={ () => <Form name="Pagina de contacto"/> } />
      <Route component={ () => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      ) }/>
    </Switch>
  </Router>
)


export default App;
