import React from "react";
import styled from "styled-components";
import { DataGrid, GridColDef, ruRU } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks/hooks";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    renderHeader: (params) => (
      <Typography fontWeight={"bold"}>{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: "name",
    headerName: "Имя",
    flex: 1,
    renderHeader: (params) => (
      <Typography fontWeight={"bold"}>{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: "surname",
    headerName: "Фамилия",
    flex: 1,
    renderHeader: (params) => (
      <Typography fontWeight={"bold"}>{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: "phone",
    headerName: "Телефон",
    flex: 1,
    renderHeader: (params) => (
      <Typography fontWeight={"bold"}>{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: "department",
    headerName: "Департамент",
    flex: 1,
    renderHeader: (params) => (
      <Typography fontWeight={"bold"}>{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: "position",
    headerName: "Должность",
    flex: 1,
    renderHeader: (params) => (
      <Typography fontWeight={"bold"}>{params.colDef.headerName}</Typography>
    ),
  },
];

const Catalog = () => {
  const users = useAppSelector((state) => state.UsersSlice.users);

  return (
    <div>
      <div>
        <StyledTableTitle>
          <h4>Руководство</h4>
          <span>☎ +7 (495) 300-00-01</span>
          <span>✉ office@company.ru</span>
        </StyledTableTitle>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
            rows={users}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
};

const StyledTableTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export default Catalog;
