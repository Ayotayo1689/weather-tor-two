import React from 'react'
import Details from "./details";
import MainHeading from "../landingPage/heading";
import {Box} from "@chakra-ui/react";
import Related from "./related";
import Description from "./description";

const SingleProduct = () => {
    return (
        <>
            <MainHeading />
            <Box mt={{ base: '9rem', md: '9rem', lg:'1rem'}} px={{ base: '2rem', lg: '4rem'}}>
                <Details />
            </Box>
            <Description />
            <Related />
        </>
    )
}

export default SingleProduct;