import React from "react";
import Typist from "react-typist";
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        title={
          <Typist>
            <b>Making better world through healthy eats organic</b>
            <Typist.Backspace count={7} delay={300} />
          </Typist>
        }
        text="Farming for a Better Future."
        buttonText="Logout"
        url="/"
        btnClass="show"
      />
      <Destination />
    </>
  );
}

export default Home;
