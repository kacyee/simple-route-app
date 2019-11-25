import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
      <About />
      </div>
    </div>
  );
}

export default App;
