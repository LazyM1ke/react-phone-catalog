import React from "react";
import styled from "styled-components";
import Catalog from "../../components/Catalog/Catalog";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <StyledTitle>Телефонная книга компании "Россети Янтарь"</StyledTitle>
      <StyledBlock>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Форма авторизации в админку
        </Button>
        <Button variant="contained" onClick={() => navigate("/admin")}>
          Добавить пользователя
        </Button>
      </StyledBlock>
      <Catalog />
    </div>
  );
}

export default HomePage;

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledBlock = styled.div`
  display: flex;
  gap: 20px;
  width: 500px;
`;
