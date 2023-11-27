import React from 'react';
import styled from "styled-components";

interface User {
    name: string
    surname: string
    officeNumber: number
    position: string
    email: string
    department: string
    phone: string
}

const mockData: User[] = [
    {
        department: 'Руководство',
        email: 'petrov@company.ru',
        name: 'Алексей',
        surname: 'Петров',
        officeNumber: 100,
        phone: '+7 (922) 123 123 11',
        position: 'Директор',
    },
    {
        department: 'Важные дела',
        email: 'ivanov@company.ru',
        name: 'Сергей',
        surname: 'Иванов',
        officeNumber: 123,
        phone: '+7999666333',
        position: 'Заместитель директора',
    },
    {
        department: 'Важные дела',
        email: 'nikita@company.ru',
        name: 'Никита',
        surname: 'Крылов',
        officeNumber: 115,
        phone: '+7999666333',
        position: 'Начальник отдела',
    },
    {
        department: 'Важные дела',
        email: 'mail@company.ru',
        name: 'Татьяна',
        surname: 'Юдина',
        officeNumber: 105,
        phone: '+7999666333',
        position: 'Секретарь',
    },
]

const salesDepartment: User[] = [
    {
        department: 'Важные дела',
        email: 'nik@company.ru',
        name: 'Николай',
        surname: 'Павлов',
        officeNumber: 300,
        phone: '+7999666333',
        position: 'Начальник отдела',
    },
    {
        department: 'Важные дела',
        email: 'anatole@company.ru',
        name: 'Анатолий',
        surname: 'Авдеев',
        officeNumber: 205,
        phone: '+7999666333',
        position: 'Менеджер по продажам',
    },
]
const Catalog = () =>{
    return (
        <div>
            <div>
                <StyledTableTitle>
                    <h4>Руководство</h4>
                    <span>☎ +7 (495) 300-00-01</span>
                    <span>✉ office@company.ru</span>
                </StyledTableTitle>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ФИО</th>
                        <th scope="col">№ Кабинета</th>
                        <th scope="col">Должность</th>
                        <th scope="col">E-mail</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockData.map((user, index )=> <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name} {user.surname}</td>
                        <td>{user.officeNumber}</td>
                        <td>{user.position}</td>
                        <td>✉︎ {user.email}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>

            <div>
                <StyledTableTitle>
                    <h4>Отдел продаж</h4>
                    <span>☎ +7 (495) 600-00-00</span>
                    <span>✉ sales@company.ru</span>
                </StyledTableTitle>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ФИО</th>
                        <th scope="col">№ Кабинета</th>
                        <th scope="col">Должность</th>
                        <th scope="col">E-mail</th>
                    </tr>
                    </thead>
                    <tbody>
                    {salesDepartment.map((user, index )=> <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name} {user.surname}</td>
                        <td>{user.officeNumber}</td>
                        <td>{user.position}</td>
                        <td>✉︎ {user.email}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const StyledTableTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export default Catalog;