import React from 'react';
//materia
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Fade from '@mui/material/Fade';
//
import Container from '../../components/Container/Container';
import { Wrapper } from './FAQPage.styled';
import dataQA from '../../resources/QuestionAnswer.json';
import { Section } from '../../components/CatalogSection/Catalog.styled';


const FAQPage = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Section>
            <Container>
                <Wrapper>
                    {dataQA.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleExpansion(`panel${index}`)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}d-content`}
                                id={`panel${index}d-header`}
                            >
                                <Typography>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Wrapper>
            </Container>
        </Section>
    )
};

export default FAQPage;