import React, { useState } from 'react';
import { Section } from './FAQPage.styled';
import AccordionComponent from '../../components/FAQ/Accordion/Accordion';
import FilterSection from '../../components/FAQ/FilterSection/FilterSection';
import dataQA from '../../resources/QuestionAnswer.json';

const arrayFilter = ["Endermologia LPG", "Oczyszczenie wodorowe", "Epilacja laserowa", "Wszystkie"];

const FAQPage = () => {

    // const [value, setValue] = useState('Wszystkie');
    const [filteredArray, setFilteredArray] = useState(dataQA);

    const handleClick = (newValue) => {
        console.log(newValue)
        // setValue(newValue);
        switch (newValue) {
            case "Endermologia LPG":
                setFilteredArray(dataQA.filter(item => item.theme === "Endermologia LPG"));
                break;
            case "Oczyszczenie wodorowe":
                setFilteredArray(dataQA.filter(item => item.theme === "Oczyszczenie wodorowe"));
                break;
            case "Epilacja laserowa":
                setFilteredArray(dataQA.filter(item => item.theme === "Epilacja laserowa"));
                break;
            case "Wszystkie":
                setFilteredArray(dataQA); // Show all items
                break;
            default:
                setFilteredArray(dataQA);
        }
    };


    return (
        <Section>
            <FilterSection>
                {arrayFilter.map((item, index) => (
                    <li key={index} onClick={() => handleClick(item)}>
                        <p>{item}</p>
                    </li>
                ))}
            </FilterSection>
            <AccordionComponent question={filteredArray} />
        </Section>
    )
};

export default FAQPage;