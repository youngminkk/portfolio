import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import About from "../components/About";
import Goals from "../components/Goals";
import Card from "../components/Card";
import Portf from "../components/Portf";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
  return (
      <>
        <Skip />
        <Header />
        <Main>
          <Intro />
          <About />
          <Goals />
          <Card />
          <Portf />
          {/* <Port /> */}
        </Main>
        <Footer />
      </>
  )
}

export default HomeView