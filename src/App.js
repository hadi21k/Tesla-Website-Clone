import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import styled from "styled-components";
const App = () => {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
};

export default App;

const Container = styled.div`
  overflow-x: hidden;
`;
