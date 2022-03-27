import React from "react";
import "./App.css";
import ReactGA from "react-ga";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Product from "./components/product/product";
import Item from "./components/buy-now/Item";
import Login from "./components/login/login";
import { ShippingPage } from "./components/Shipping_progress/shippingPage/ShippingPage";
import { Navbar } from "./components/Shipping_progress/Navbar/Navbar";
import Home from "./components/home/home";
import Register from "./components/Register_page/Register";
import ContentPage from "./components/content-page/App";
import Header from "./components/content-page/component/header/header";
import LearnInSchool from "./components/learnInSchool/LearnInSchool";
import PrivateRoute from "./components/privateRoute/privateRoute";

function initizeAnalytics() {
  ReactGA.initialize("UA-211874757-1");
  ReactGA.pageview("/Homepage");
}

function App() {
  initizeAnalytics();
  return (
    <>
      <Router>
        <Switch>

          <PrivateRoute 
            path="/e-commerce"
            component={(props) => {
              return (
                <>
                  <Navbar />
                  <Product />
                </>
              );
            }}
          />

          <PrivateRoute
            path="/main-page"
            component={(props) => {
              return (
                <>
                  <Navbar />
                  <Item />
                </>
              );
            }}
          />

          <PrivateRoute
            path="/shipping_page"
            component={(props) => {
              return (
                <>
                  {" "}
                  <Navbar />
                  <ShippingPage />
                </>
              );
            }}
          />

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/sign-in" exact>
            <Login />
          </Route>         

          <Route path="/register" exact>
            <Header />
            <Register />
          </Route>

          <Route path="/content-page/:param" exact>
            <ContentPage />
          </Route>

          <Route path="/learninschool" exact>
            <>
              <Header />
              <LearnInSchool />
            </>
          </Route>

          <PrivateRoute
            path="/content-page/:param"
            component={(props) => {
              return <ContentPage />;
            }}
          />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
