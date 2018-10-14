// Dependencies
import React, { Component } from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// Components & content
import NavBar from './nav/NavBar'
import Home from './content/Home'
import Facts from './content/Facts'
import About from './content/About'
import NotFound from './content/not-found/NotFound'

import './App.scss'

// put nav links here
const links = [
  {
    label: 'Facts',
    path: '/facts',
    component: Facts,
    title: 'Chuck Norris Facts!'
  },
  {
    label: 'About',
    path: '/about',
    component: About,
    title: 'About the app'
  }
]

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: window.innerWidth >= 576 ? true : false,  // handles responsiveness
    };
  }

  // Listens for window resizing
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  // Updates state during resize
  handleResize = () => {
    this.setState({
      isExpanded: window.innerWidth >= 576 ? true : false,
    })
  }

  render() {
    // Generates Route components for React Router from array above
    const routes = links.map(({ label, path, component: Component, title }) => (
      <Route
        path={path}
        render={(props) => (
          <Component {...props}
            key={label}
            title={title}
            isExpanded={this.state.isExpanded} 
          />
        )}
      />
    ));

    // Could also be text: Home
    const homeText = <i className='fas fa-home'></i>
    
    return (
      <Router history={history}>
        <div className="App">
          <header>
            <NavBar homeText={homeText} links={links} isExpanded={this.state.isExpanded}/>
          </header>
          <main>
            <Switch>
              <Route
                exact path='/'
                render={(props) => (
                  <Home {...props} isExpanded={this.state.isExpanded} title='Chuck Translation App'/>
                )}
              />
              {routes}
              <Route path='*' component={NotFound} />
            </Switch>
          </main>
          <footer>
            <div>
              Ben Wong 2018
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
