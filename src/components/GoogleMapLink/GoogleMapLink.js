import React from 'react';

const GoogleMapLink = ({ children }) => {
    const address = "76-200 Słupsk, Mickiewicza 59/1";
    const mapLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

    return (
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};

export default GoogleMapLink;
