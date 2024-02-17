import React from "react";
import {Box, Button, Flex, Heading, Switch, Text} from "@chakra-ui/react";

const NewsLetter= () => {
    return (
        <Box
            w={{ base: "100%", lg: "70%" }}
            ml={{ base:"",lg:"1rem"}}>
            <Heading
                color='#000'
                fontSize={{base:"lg", lg:'2xl'}}
                fontWeight='400'
                lineHeight='normal'
                mb={{base:"1rem",lg:'2.5rem'}}>
                Newsletter Subscription
            </Heading>
            <Text opacity={"0.8"} fontSize={{base:"lg", lg:'2xl'}}>
                Subscription Settings
            </Text>
            <Box w={"full"} borderBottom={"2px solid #D9D9D9"} pt={"1rem"}></Box>
            <Flex
                alignItems={"center"}
                gap={"3"}
                pt={"2rem"}
            >
                <Switch id='news-letter' size='md' colorScheme='pink'/>
                General Subscription
            </Flex>
        <Button bg={"black"} color={"white"} my={"2rem"}>
            SAVE
        </Button>
        </Box>
    )
}

export default NewsLetter;