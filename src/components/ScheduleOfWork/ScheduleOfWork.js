import React from 'react';
import data from '../../resources/dataScheduleOfWork.json';
import { TableStyled, TableWrapper } from './ScheduleOfWork.styled';

const ScheduleOfWork = () => {
    return (
        <TableWrapper>
            <h3>Godziny otwarcia</h3>
            <TableStyled>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td> {item.day}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </TableStyled>
        </TableWrapper>
    )
};

export default ScheduleOfWork;