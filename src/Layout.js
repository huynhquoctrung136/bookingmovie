import './App.scss'
import { createBrowserHistory } from 'history'
import { BrowserRouter, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import HomeTemplates from './templates/HomeTemplates/HomeTemplates'
import UserTemplates from './templates/UserTemplates/UserTemplates'
import { ToastContainer } from 'react-toastify'
import CheckoutTemplates from './templates/CheckoutTemplates/CheckoutTemplates'
import Loading from './components/Loading/Loading'
import AdminTemplates from './templates/AdminTemplates/AdminTemplates'
import { routeAdmin, routeCheckout, routeHome, routeUser } from './route'
export const history = createBrowserHistory()
function App() {
  const showLayoutHome = (route) => {
    if (route && route.length)
      return route.map((items, index) => {
        return (
          <HomeTemplates
            key={index}
            exact={items.exact}
            path={items.path}
            Component={items.component}
          />
        )
      })
  }
  const showLayoutUser = (route) => {
    if (route && route.length)
      return route.map((items, index) => {
        return (
          <UserTemplates
            key={index}
            exact={items.exact}
            path={items.path}
            Component={items.component}
          />
        )
      })
  }
  const showLayoutCheckout = (route) => {
    if (route && route.length)
      return route.map((items, index) => {
        return (
          <CheckoutTemplates
            key={index}
            exact={items.exact}
            path={items.path}
            Component={items.component}
          />
        )
      })
  }
  const showLayoutAdmin = (route) => {
    if (route && route.length)
      return route.map((items, index) => {
        return (
          <AdminTemplates
            key={index}
            exact={items.exact}
            path={items.path}
            Component={items.component}
          />
        )
      })
  }

  return (
    <>
      <Loading />
      <BrowserRouter history={history}>
        <Switch>
          {showLayoutHome(routeHome)}
          {showLayoutUser(routeUser)}
          {showLayoutCheckout(routeCheckout)}
          {showLayoutAdmin(routeAdmin)}
        </Switch>
      </BrowserRouter>
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
