import React from 'react';
//materia
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
//
import Container from '../../components/Container/Container';
import { Wrapper } from './FAQPage.styled';


const FAQPage = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <Container>
            <Wrapper>
                <Accordion
                    expanded={expanded}
                    onChange={handleExpansion}
                    slots={{ transition: Fade }}
                    slotProps={{ transition: { timeout: 400 } }}
                    sx={[
                        expanded
                            ? {
                                '& .MuiAccordion-region': {
                                    height: 'auto',
                                },
                                '& .MuiAccordionDetails-root': {
                                    display: 'block',
                                },
                            }
                            : {
                                '& .MuiAccordion-region': {
                                    height: 0,
                                },
                                '& .MuiAccordionDetails-root': {
                                    display: 'none',
                                },
                            },
                    ]}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Question</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Answer
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Question</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Answer
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Wrapper>
        </Container>
    )
};

export default FAQPage;