import React from "react";
import { Component } from "react";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

class HomeContainer extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default HomeContainer;
