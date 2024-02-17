import React from 'react'
import {Box, Flex, Grid, Heading} from "@chakra-ui/react";
import {productDetails} from "../products_page/data";
import Product from "../products_page/product";

const Related = () => {
    return (
        <>
            <Flex justifyContent={'center'} alignItems={'center'} mt={'4rem'} w={'100%'} flexDir={'column'}>
                <Heading>Related Products</Heading>
                <Box w={'100px'} h={'2px'} bg={'pink.500'} />
            </Flex>

            <Flex justify={'center'} align={'center'}>
                <Grid
                    gridTemplateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', base: 'repeat(1, 1fr)' }}
                    gap={'1.5rem'} mt={'3rem'}
                    px={'2rem'}>
                    {productDetails.slice(0, 3).map((item, index) => (
                        <Product img={item.img} sold={item.sold} available={item.available} discount={item.discount} name={item.name} price={item.price} reviews={item.reviews} key={index} />
                    ))}
                </Grid>
            </Flex>
        </>
    )
}

export default Related;