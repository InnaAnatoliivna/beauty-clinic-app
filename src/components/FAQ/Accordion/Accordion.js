import React from 'react';
//materia
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//
import dataQA from '../../../resources/QuestionAnswer.json';
import { Wrapper } from './Accordion.styled';
import Container from '../../Container/Container';

const AccordionComponent = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container>
            <div id="back-to-top-anchor"></div>
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
                            <Typography>
                                <p>Temat: {item.theme}</p>
                                <p>{item.question}</p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Wrapper>
        </Container>
    )
};

export default AccordionComponent;