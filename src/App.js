import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Lonin/Login";
import Register from "./component/Register/Register";
import Services from "./Services/Services";
import NotFound from "./component/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import ServiceDetailes from "./component/ServiceDetailes/ServiceDetailes";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/serviceDetailes/:serviceId">
              <ServiceDetailes></ServiceDetailes>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
