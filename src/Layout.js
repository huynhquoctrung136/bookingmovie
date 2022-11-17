import './App.scss'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import HomeTemplates from './templates/HomeTemplates/HomeTemplates'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import News from './pages/News/News'
import Detail from './pages/Detail/Detail'
import UserTemplates from './templates/UserTemplates/UserTemplates'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import { ToastContainer, toast } from 'react-toastify'
export const history = createBrowserHistory()
function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <HomeTemplates path="/home" exact Component={Home} />
          <HomeTemplates path="/contact" exact Component={Contact} />
          <HomeTemplates path="/news" exact Component={News} />
          <HomeTemplates path="/detail/:id" exact Component={Detail} />
          <HomeTemplates path="/profile" exact Component={Profile} />
          <UserTemplates path="/login" exact Component={Login} />
          <UserTemplates path="/register" exact Component={Register} />
          <HomeTemplates path="/" exact Component={Home} />
        </Switch>
      </Router>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
