import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { reveal as Menu } from 'react-burger-menu';
import HomePage from './HomePage';
import img from './Pics/menu.png';
import About from './About';
import BeforetheWar from './BeforetheWar';
import Kristallnacht from './Kristallnacht';
import Peter from './Peter';
import Bea from './Bea';
import VTimeline from './VTimeline';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () =><div></div>,
    main: () =><Route name="home" exact path="/" component={HomePage} />
  },
  {
    path: "/about",
    sidebar: () =><div class="head">About</div>,
    main: () =><Route exact path="/about" component={About} />
  },
  {
    path: "/beforethewar",
    sidebar: () =><div class="head">Before the War</div>,
    main: () =><Route exact path="/beforethewar" component={BeforetheWar} />
  },
  {
    path: "/kristallnacht",
    sidebar: () =><div class="head">Kristallnacht</div>,
    main: () =><Route exact path="/kristallnacht" component={Kristallnacht} />
  },
  {
    path: "/stories",
    sidebar: () =><div class="head">Stories</div>,
    main: () =><Route exact path="/stories" component={Stories} />
  },
  {
    path: "/peter",
    sidebar: () =><div class="head">Peter Lederman</div>,
    main: () =><Route exact path="/peter" component={Peter} />
  },
  {
    path: "/bea",
    sidebar: () =><div class="head">Bea Muhlfelder</div>,
    main: () =><Route exact path="/bea" component={Bea} />
  },
  {
    path: "/timeline",
    sidebar: () => <div class="head">Timeline</div>,
    main: () =><Route exact path="/timeline" component={VTimeline} />
  }
];
class App extends Component {
  showSettings (event) {
  event.preventDefault();
  }

  render() {
    return (
    <Router>
      <div class="Page">
        <div class="header">
          < NavBar/>
        </div>
        <div class="topnav" >
          <div style={{ width: "auto"}}>
          <Menu customBurgerIcon={ <img src={img} />} >
            <a id="Home" className="menu-item" ><Link to="/">Home</Link></a>
            <a id="About" className="menu-item" ><Link to="/about">About</Link></a>
            <a id="" className="menu-item"><Link to="/beforethewar">Before the War</Link></a>
            <a id="" className="menu-item"><Link to="/kristallnacht">Kristallnacht</Link></a>
            <a id="" className="menu-item"><Link to="/peter">Stories</Link></a>
                  <ul>
                        <li><a id="" className="menu-item--small"><Link to="/peter">Peter Lederman</Link></a></li>
                        <li><a id="" className="menu-item--small"><Link to="/bea">Bea Muhlfelder</Link></a></li>
                  </ul>
            <a id="" className="menu-item"><Link to="/timeline"> Timeline</Link></a>
          </Menu>
          </div>
          <div style={{ position:"relative",right:"400px"}}>
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
          ))}
          </div>
        </div>
        <div class="column">
          {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
              />
            ))}
        </div>
        {this.props.children}

        <div style={{ width: "100%"}}>
            <Footer/>
        </div>
      </div>



    </Router>
    )
  }
}
export default App;
