import React from 'react';
//materia
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // import Fade from '@mui/material/Fade';
// //
// import Container from '../../components/Container/Container';
// import { Wrapper, Section } from './FAQPage.styled';
// import dataQA from '../../resources/QuestionAnswer.json';
import AccordionComponent from '../../components/FAQ/Accordion/Accordion';
import { Section } from '../../components/CatalogSection/Catalog.styled';


const FAQPage = () => {

    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpansion = (panel) => (event, isExpanded) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    return (
        <Section>
            <AccordionComponent />
        </Section>
    )
};

export default FAQPage;