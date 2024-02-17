import React from 'react'
import MainHeading from "../landingPage/heading";
import {Box, Container, Flex, Grid, Heading} from "@chakra-ui/react";
import HeroSection from "./heroSection";
import Categories from "./categories";
import Price from "./price";
import Product from "./product";
import {productDetails} from "./data";
import Featured from "./featured";
import Sortings from "./sortings";
import PaginationBtn from "./pagination";
import MobileFeatured from "../mobile_cards/featured";
import MobileCategories from "../mobile_cards/categories";


const FurniturePage = ({ categories, productType }) => {
    return (
        <>
            <MainHeading />
            <HeroSection />

            <main>
                <Container maxW={"7xl"} px={{ lg: "5rem", sm:"2rem", base: "1rem"}}>
                    {/*============== mobile featured product ============ */}
                    <MobileCategories />
                    <MobileFeatured />

                    <Flex justifyContent={'start'} alignItem={'center'} w={'100%'} gap={'2rem'}>
                        {/* ======= left-side menu ======= */}
                        <Box w={'19rem'} display={{ base: 'none', md: 'none', lg: 'block' }}>
                            <Categories categories={'Furniture Categories'}/>
                            <Price />
                            <Featured productType={'Featured Products'}/>
                        </Box>


                        {/* ======= right-side menu ======= */}
                        <Box>
                            <Sortings />
                            <Flex justify={'center'} align={'center'} overflowX={'hidden'}>
                                <Grid
                                    gridTemplateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)', base : 'repeat(2, 1fr)' }}
                                    gap={'1.5rem'}>
                                    {productDetails.map((item, index) => (
                                        <Product img={item.img}
                                                 product={item}
                                                 sold={item.sold}
                                                 available={item.available}
                                                 discount={item.discount}
                                                 name={item.name}
                                                 price={item.price}
                                                 reviews={item.reviews}
                                                 key={index}
                                                 desc={item.description}
                                        />
                                    ))}
                                </Grid>
                            </Flex>
                            <PaginationBtn />
                        </Box>
                    </Flex>
                </Container>
            </main>
        </>
    )
}

export default FurniturePage