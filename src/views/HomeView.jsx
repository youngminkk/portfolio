import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import About from "../components/About";
import Skill from "../components/Skill";
import Card from "../components/Card";
import Portf from "../components/Portf";
// import Port from "../components/Port";
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
          <Skill />
          <Card />
          <Portf />
          {/* <Port /> */}
        </Main>
        <Footer />
      </>
  )
}

export default HomeView