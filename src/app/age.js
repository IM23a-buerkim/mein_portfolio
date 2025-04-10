import React from 'react';

const calculateAge = () => {
    const birthDate = new Date('2007-09-29'); // Replace with the actual birthdate
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has not occurred yet this year
    const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
        age -= 1;
    }

    return age;
};

const AgeComponent = () => {
    return <div className="u_r_s_text">{calculateAge()} Jahre</div>;
};

export default AgeComponent;