import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, FlexWrapp, Section, Text, TextBox } from '../AboutClinic.styled';
import { Title } from '../../CatalogSection/Catalog.styled';
import Container from '../../Container/Container';
import teamIMG from '../../../images/team.jpg';
import data from '../../../resources/dataAboutUs.json'

const TeamSection = () => {

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1439px)' });



    return (
        <Section>
            <Container>
                {isMobile && (<Title>Nasz zespół</Title>)}

                <FlexWrapp>
                    {isMobile && (<Box>
                        <img
                            alt='Portrait'
                            src={teamIMG}
                            width='500px'
                        ></img>
                        <span>{data.employee.name}</span>
                    </Box>)}
                    <TextBox>
                        {isDesktop && (<Title>Nasz zespół</Title>)}
                        <Text>{data.employee.info}</Text>
                    </TextBox>
                    {isDesktopOrTablet && (
                        <Box>
                            {isTablet && (<Title>Nasz zespół</Title>)}
                            <img
                                alt='Portrait'
                                src={teamIMG}
                                width='500px'
                            ></img>
                            <span>{data.employee.name}</span>
                        </Box>)}
                </FlexWrapp>
            </Container>
        </Section>
    )
}

export default TeamSection