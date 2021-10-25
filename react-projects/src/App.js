import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Project from './components/Project'
import VirtualBackgroundProject from './components/VirtualBackgroundProject'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/project" component={Project}></Route>
      <Route
        exact
        path="/project/vb"
        component={VirtualBackgroundProject}
      ></Route>
    </Router>
  )
}

export default App
