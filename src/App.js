import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Header></Header>
        </Route>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
