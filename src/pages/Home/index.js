import React from "react";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Header />
      {/* <Navbar /> */}
      <Body />
      <Footer />
    </div>
  );
}
