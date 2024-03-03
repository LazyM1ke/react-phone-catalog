import React from "react";
import styled from "styled-components";
import Catalog from "../../components/Catalog/Catalog";

function HomePage() {
  return (
    <div>
      <StyledTitle>Телефонная книга компании "Россети Янтарь"</StyledTitle>
      <Catalog />
    </div>
  );
}

export default HomePage;

const StyledTitle = styled.h1`
  text-align: center;
`;
