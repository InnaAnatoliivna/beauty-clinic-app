import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import { Wrapper, TableWrapp, TableStyled, ButtonBox, Span } from './TablePrice.styled';
import { GiSandsOfTime } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
// import { PiSealPercentThin } from "react-icons/pi";
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
        <>
            <div id="back-to-top-anchor"></div>
            <Container>
                <Wrapper>
                    {dataServices.map((category, categoryIndex) => (
                        <TableWrapp key={categoryIndex}>
                            <h2>{category.name}</h2>
                            <TableStyled>
                                <thead>
                                    <tr>
                                        <th>Zabieg</th>
                                        <th><Span><GiSandsOfTime /> Czas trwania</Span></th>
                                        <th><Span><GiMoneyStack /> Cena</Span></th>
                                        {/* <th><Span><PiSealPercentThin /> Promocja</Span></th> */}
                                        <th style={{ width: '1px' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.services.map((service, serviceIndex) => (
                                        <tr key={serviceIndex}>
                                            <td>{service.name}</td>
                                            <td>{service.duration}</td>
                                            <td>{service.price}</td>
                                            {/* {service.discount ? (
                                            <td className='discount'>{service.discount}</td>
                                        ) : (<td>-</td>)
                                        } */}
                                            <td style={{ width: '1px' }}>
                                                <ButtonBox>
                                                    <Button small={true} onClick={handleButton}>UMÓW SIĘ</Button>
                                                </ButtonBox>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </TableStyled>
                        </TableWrapp>
                    ))}
                    {isShowModal && <ModalWindow toggleShowMenu={handleButton} />}
                </Wrapper>
            </Container>
        </>
    )
};

export default TablePrice;