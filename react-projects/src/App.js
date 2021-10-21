import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Project from './components/project'
import Navbar from './components/navbar'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/project" component={Project}></Route>
    </Router>
  )
}

export default App
