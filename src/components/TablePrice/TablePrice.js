import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import { Wrapper, TableWrapp, TableStyled, ButtonStyled } from './TablePrice.styled';
import { GiSandsOfTime } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { PiSealPercentThin } from "react-icons/pi";
import dataServices from '../../resources/dataServices.json'
import ModalWindow from '../ModalWindow/ModalWindow';
import Button from '../Button/Button';

const TablePrice = () => {

    const [isShowModal, setIsShowModal] = useState(false);

    const handleButton = () => setIsShowModal(!isShowModal);

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsShowModal(false);
        }
    };
    useEffect(() => {
        if (isShowModal) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isShowModal]);


    return (
        <Container>
            <Wrapper>
                {dataServices.map((category, categoryIndex) => (
                    <TableWrapp key={categoryIndex}>
                        <h2>{category.name}</h2>
                        <TableStyled>
                            <thead>
                                <tr>
                                    <th>Zabieg</th>
                                    <th><GiMoneyStack /> Cena</th>
                                    <th><GiSandsOfTime /> Czas trwania</th>
                                    <th><PiSealPercentThin /> Promocja</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.services.map((service, serviceIndex) => (
                                    <tr key={serviceIndex}>
                                        <td>{service.name}</td>
                                        <td>{service.price}</td>
                                        <td>{service.duration}</td>
                                        {service.discount ? (
                                            <td>{service.discount}</td>
                                        ) : (<td>-</td>)
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </TableStyled>
                    </TableWrapp>
                ))}
                <ButtonStyled>
                    <Button>UMÓW SIĘ</Button>
                </ButtonStyled>
                {isShowModal && <ModalWindow toggleShowMenu={handleButton} />}
            </Wrapper>
        </Container>
    )
};

export default TablePrice;