import React from 'react'
import Container from '../../components/Container/Container';
import { ContactInfo, Wrapper } from './ContactPage.styled';
import Map from '../../components/Map/Map';
import ScheduleOfWork from '../../components/ScheduleOfWork/ScheduleOfWork';
import GoogleMapLink from '../../components/GoogleMapLink/GoogleMapLink';
import dataContakt from '../../resources/dataContacts.json';
import { MdPhoneIphone } from "react-icons/md";
import { PiChatsThin } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

const ContactPage = () => {
    return (
        <Container>
            <Wrapper>
                <div>
                    <ScheduleOfWork />
                    <ContactInfo>
                        <h3>Godziny otwarcia</h3>
                        <a href={`tel:${dataContakt.phoneToCall}`}><MdPhoneIphone />{dataContakt.phoneToShow}</a>
                        <a href={`mailto:${dataContakt.email}`}><PiChatsThin />{dataContakt.email}</a>
                        <IoLocationOutline />
                        <GoogleMapLink>
                            {dataContakt.address}
                        </GoogleMapLink>
                    </ContactInfo>
                </div>
                <Map />
            </Wrapper>
        </Container>
    )
}

export default ContactPage