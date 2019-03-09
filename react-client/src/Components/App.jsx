import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { elastic as Menu } from 'react-burger-menu';
import HomePage from './HomePage';
import About from './About';
import BeforetheWar from './BeforetheWar';
import Kristallnacht from './Kristallnacht';
import Peter from './Peter';
import Bea from './Bea';
import Timeline from './Timeline';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () =><div class="head"> 1.0 Home</div>,
    main: () =><Route name="home" exact path="/" component={HomePage} />
  },
  {
    path: "/about",
    sidebar: () =><div class="head">2.0 About</div>,
    main: () =><Route exact path="/about" component={About} />
  },
  {
    path: "/beforethewar",
    sidebar: () =><div class="head">3.0 Before the War</div>,
    main: () =><Route exact path="/beforethewar" component={BeforetheWar} />
  },
  {
    path: "/kristallnacht",
    sidebar: () =><div class="head">4.0 Kristallnacht</div>,
    main: () =><Route exact path="/kristallnacht" component={Kristallnacht} />
  },
  {
    path: "/stories",
    sidebar: () =><div class="head">5.0 Stories</div>,
    main: () =><Route exact path="/stories" component={Stories} />
  },
  {
    path: "/peter",
    sidebar: () =><div class="head">5.0.1 Peter Lederman</div>,
    main: () =><Route exact path="/peter" component={Peter} />
  },
  {
    path: "/bea",
    sidebar: () =><div class="head">5.0.2 Bea Muhlfelder</div>,
    main: () =><Route exact path="/bea" component={Bea} />
  },
  {
    path: "/timeline",
    sidebar: () => <div class="head">6.0 Timeline</div>,
    main: () =><Route exact path="/timeline" component={Timeline} />
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
          <div>
        < NavBar/></div>
          <div class="flex-container">

                <div class="slide" style={{  width: "15%", height: "20",background: "white"   }}>
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

                    <Menu customBurgerIcon={ <img src={require('./Pics/menu.jpg')} />} >

                          <a id="Home" className="menu-item" ><Link to="/">1.0 Home</Link></a>
                          <a id="About" className="menu-item" ><Link to="/about">2.0 About</Link></a>
                          <a id="" className="menu-item"><Link to="/beforethewar">3.0 Before the War</Link></a>
                          <a id="" className="menu-item"><Link to="/kristallnacht">4.0 Kristallnacht</Link></a>
                          <a id="" className="menu-item"><Link to="/peter">5.0 Stories</Link></a>
                                <ul>
                                      <li><a id="" className="menu-item"><Link to="/peter">5.0.1 Peter Lederman</Link></a></li>
                                      <li><a id="" className="menu-item"><Link to="/bea">5.0.2 Bea Muhlfelder</Link></a></li>
                                </ul>
                          <a id="" className="menu-item"><Link to="/timeline">6.0 Timeline</Link></a>
                          <a onClick={ this.showSettings } className="menu-item--small" >Menu</a>
                  </Menu>

              </div>
              <div class="main" style={{background: "white"   }}>
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
          </div>
          <div style={{ width: "100%"}}>  <Footer/> </div>
      </div>
    </Router>
    )
  }
}
export default App;
