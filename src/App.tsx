import React from 'react';
import './App.css';
import styled from "styled-components";
import Catalog from "./components/Catalog";


function App() {

  return (
    <div className="App">
      <StyledTitle>Телефонная книга компании "Россети Янтарь"</StyledTitle>
        <Catalog/>
    </div>
  );
}

const StyledTitle = styled.h1`
  text-align: center;
`

export default App;
