import React from 'react';
import dataContakt from '../../resources/dataContacts.json';
import ContentCard from '../ContentCard/ContentCard';
import { MdPhoneIphone } from "react-icons/md";
import { PiChatsThin } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import GoogleMapLink from "../GoogleMapLink/GoogleMapLink"

const ContactList = () => {
    return (
        <>
            <ContentCard>
                <MdPhoneIphone />
                <a href={`tel:${dataContakt.phoneToCall}`}>{dataContakt.phoneToShow}</a>
            </ContentCard>
            <ContentCard>
                <PiChatsThin />
                <a href={`mailto:${dataContakt.email}`}>{dataContakt.email}</a>
            </ContentCard>
            <ContentCard>
                <IoLocationOutline />
                <GoogleMapLink>
                    {dataContakt.address}
                </GoogleMapLink>
            </ContentCard>
        </>
    )
};

export default ContactList;