import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Nie znaleźliśmy tej strony!</h1>
            <p>Przykro nam, ale ta strona nie jest dostępna. Proszę spróbować ponownie.</p>
            <Link to='/'>Przejdź z powrotem na stronę główną.</Link>
        </div>
    )
};

export default NotFoundPage;