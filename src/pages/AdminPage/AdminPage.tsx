import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addUser } from "../../store/reducers/UsersSlice";

function AdminPage() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");

  const [position, setPosition] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [officeNumber, setOfficeNumber] = useState<number>();

  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const onAddUser = () => {
    dispatch(
      addUser({
        id: Math.floor(Math.random()).toString(),
        name: name,
        email: email,
        phone: phone,
        department: department,
        surname: surname,
        position: position,
        officeNumber: officeNumber,
      }),
    );
  };

  return (
    <StyledWrapper>
      <StyledForm>
        <Typography align={"center"} fontWeight="bold" fontSize={"25px"}>
          Добавление нового сотрудника
        </Typography>
        <Typography>Персональные данные</Typography>
        <FormBlock>
          <TextField
            type="text"
            label="Имя"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="text"
            label="Фамилия"
            size="small"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </FormBlock>

        <Typography>Рабочая информация</Typography>
        <FormBlock>
          <TextField
            type="text"
            label="Должность"
            size="small"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <TextField
            type="text"
            label="Департамент"
            size="small"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <TextField
            type="number"
            label="Номер кабинета"
            size="small"
            value={officeNumber}
            onChange={(e) => setOfficeNumber(+e.target.value)}
          />
        </FormBlock>

        <Typography>Контактная информация</Typography>
        <FormBlock>
          <TextField
            type="email"
            label="email"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="tel"
            label="Номер телефона"
            size="small"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormBlock>

        <Button variant="contained" onClick={onAddUser}>
          Добавить
        </Button>
      </StyledForm>
    </StyledWrapper>
  );
}

export default AdminPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #215d8c;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px;
  border: 1px solid black;
  width: 600px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 40px;
`;

const FormBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
