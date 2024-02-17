import React from 'react'
import Image from 'next/image'
import {Box, Card, Heading, Text, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import {breakpoints} from "../../../styles/theme";
import {mobileCategories, productDetails} from "../products_page/data";

const MobileCategories = () => {
    return (
        <>
            <Container>
                <Heading
                    color='#000'
                    fontSize='12px'
                    fontWeight='400'
                    textTransform={'uppercase'}
                    lineHeight='normal'
                    mb={'.8rem'}
                >
                    Featured Products
                </Heading>
                <Box color={'#343330'} w={'100px'} h={'12px'} mt={'.6rem'} mb={'1rem'} />

                <Flex justifyContent={'start'} alignItem={'center'}>
                    {mobileCategories.map((item, index) => (
                        <Card
                            display="flex"
                            justifyContent="start"
                            alignItems={"start"}
                            width={'100%'} h='150px' key={index}>
                            <Image src={item.img} alt={item.name} style={{ width: '100%', height: '60%'}} />
                            <Text textAlign={'center'}>{item.name}</Text>
                        </Card>
                    ))}
                </Flex>
            </Container>
        </>
    )
}

export default MobileCategories;

const Container = styled.div`
	padding: 0 .6rem;
	margin-bottom: 2rem;
  display: none;
  
  ${breakpoints.md} {
    display: block;
  }
  ${breakpoints.sm} {
    display: block;
  }
`;