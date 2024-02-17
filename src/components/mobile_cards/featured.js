import React, {useEffect, useState} from 'react'
import {Box, Heading, Progress} from "@chakra-ui/react";
import {productDetails} from "../products_page/data";
import {Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MobileProduct from "./index";
import {breakpoints} from "../../../styles/theme";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";

const MobileFeatured = ({ img, price, reviews, name }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
                <Box colorScheme='pink' w={'100px'} h={'8px'} mt={'.6rem'} mb={'1rem'} />

                {isMounted && (
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {productDetails.slice(0, 5).map((item, index) => (
                            <SwiperSlide key={index}>
                                <MobileProduct price={item.price} img={item.img} name={item.name} reviews={item.reviews} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </Container>
        </>
    )
}

export default MobileFeatured;

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
    .swiper-button-prev {
        display: none;
    }

	.swiper-button-next {
		display: none;
	}
`;