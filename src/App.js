import React, { Component } from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import NavBar from './nav/NavBar'
import Facts from './content/Facts'
import Home from './content/Home'
import NotFound from './content/not-found/NotFound'
import About from './content/about'

import './App.scss'

// put links here
const links = [
  {
    label: 'Facts',
    path: '/facts',
    component: Facts
  },
  {
    label: 'About',
    path: '/about',
    component: About
  }
]

// Generates Route components for React router
const routes = links.map(({ label, path, component }) => (
  <Route key={label} path={path} component={component} />
));

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header>
            <NavBar home={true} links={links}/>
          </header>
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              {routes}
              <Route path='*' component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
