import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class Hello extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    );
  }
}
