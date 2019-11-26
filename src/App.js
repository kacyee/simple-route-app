import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
