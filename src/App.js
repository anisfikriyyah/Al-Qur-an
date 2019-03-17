import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Pages/Home'
import Header from './Component/Header'
import Surah from './Pages/Surah'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/surah/:nomor" exact component={Surah} />
        </div>
      </Router>
    );
  }
}

export default App;