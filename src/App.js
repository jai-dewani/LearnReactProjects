import React, { Component } from 'react';
import Todo from './Components/Todo/App';
import Mentronome from './Components/metronome/Metronome';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Meme from './Components/MemeGenerator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/metronome" component={Mentronome} />
          <Route path="/meme" component={Meme} />
          <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
