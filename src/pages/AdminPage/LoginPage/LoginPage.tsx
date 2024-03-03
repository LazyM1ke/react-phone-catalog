import React, { useState } from "react";
import styled from "styled-components";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [snackOpened, setSnackOpened] = useState<boolean>(false);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName === "admin" && password === "admin") {
      navigate("/admin");
    } else {
      setSnackOpened(true);
    }
  };

  const handleSnackClose = () => {
    setSnackOpened(false);
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={(event) => onFormSubmit(event)}>
        <Typography fontWeight="bold" fontSize="20px">
          Вход в админку
        </Typography>
        <TextField
          label="Имя пользователя"
          size="small"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="Пароль"
          size="small"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" size="medium">
          Войти
        </Button>
      </StyledForm>
      <Snackbar
        open={snackOpened}
        autoHideDuration={2000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Некорректные данные !!!
        </Alert>
      </Snackbar>
    </FormWrapper>
  );
};

export default LoginPage;

const FormWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #215d8c;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  padding: 25px;
  border: 1px solid black;
  width: 300px;
  border-radius: 10px;
  background-color: #fff;
`;
