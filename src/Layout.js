import './App.scss'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import HomeTemplates from './templates/HomeTemplates/HomeTemplates'
import Home from './pages/Home'
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplates path="/" exact Component={Home} />
      </Switch>
    </Router>
  )
}

export default App
