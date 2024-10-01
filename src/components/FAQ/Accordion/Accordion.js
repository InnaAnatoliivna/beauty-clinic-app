import React from 'react';
//materia
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//
import { Wrapper, Text, SubTitle } from './Accordion.styled';
import Container from '../../Container/Container';


const AccordionComponent = ({ question }) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container>
            <div id="back-to-top-anchor"></div>
            <Wrapper>
                {question.map((item, index) => (
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
                                <SubTitle>{item.theme}</SubTitle>
                                <Text>{item.question}</Text>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Text>{item.answer}</Text>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Wrapper>
        </Container>
    )
};

export default AccordionComponent;