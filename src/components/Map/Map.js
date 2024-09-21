import React from 'react';

const Map = () => {
    return (
        <div>
            <iframe
                title='1'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.4466377322467!2d17.019306816035626!3d54.46320728024105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd735c86ac63b5%3A0xf07f350c5554b5ff!2sMickiewicza%2059%2C%2076-200%20S%C5%82upsk%2C%20Poland!5e0!3m2!1sen!2sus!4v1696006890547!5m2!1sen!2sus"
                width="600"
                height="750"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
            ></iframe>
        </div>
    )
};

export default Map;