import './App.scss'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router-dom'
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
