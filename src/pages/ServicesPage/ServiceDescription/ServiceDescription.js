import React from 'react';
import { useParams } from "react-router-dom";
import { getServiceById } from "../../../utils/servicesHelpers";

const ServiceDescription = () => {

    const { id } = useParams();
    const service = getServiceById(id);
    const { name } = service.service;


    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
};

export default ServiceDescription;