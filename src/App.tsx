import React from "react";
import "./Style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Footer from "./Components/Footer";
import Detail from "./Pages/Detail";
function App() {
  return (
    <Router>
      <div className="App">

        <div>
          <Switch>
           
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
