import React from 'react'
import {Button, Flex, Heading, Progress, Box, Spacer} from "@chakra-ui/react";
import styled from "styled-components";
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import {productDetails} from "./data";
import Image from "next/image";
import {FaRegStar} from "react-icons/fa";

const Featured = ({productType}) => {
    return (
        <Box mb={'2rem'}>
            <Flex justifyContent={'space-between'} alignItems={'start'} mt={'2.5rem'}>
                <Heading
                    color='#000'
                    fontSize='1.09363rem'
                    fontWeight='400'
                    textTransform={'uppercase'}
                    lineHeight='normal'
                    mb={'1rem'}
                >
                    {productType}
                </Heading>
                <Spacer />
                <Arrows>
                    <RiArrowLeftSLine style={{ marginRight: '4px' }} />
                    <RiArrowRightSLine />
                </Arrows>
            </Flex>
            <Progress value={20} size='xs' colorScheme='pink' mt={'.6rem'} mb={'1rem'} />

            {productDetails.slice(0, 3).map((item, index) => (
                <RelatedProducts key={index}>
                    <Image src={item?.img} alt={item?.name} />

                    <Box>
                        <div className={'reviews'}>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            ( {item?.reviews} reviews )
                        </div>
                        <h2 className={'name'}>{item?.name}</h2>
                        <h3 className={'price'}>{item?.price}</h3>
                    </Box>
                </RelatedProducts>
            ))}
        </Box>

    )
}

export default Featured;

const Arrows = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    width: 2rem;
    height: 1.4rem;
    background: #DB0090;
    color: #fff;
    border-radius: 3px;
  }
`;

const RelatedProducts = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
  padding: 1.5rem .8rem;
  border-bottom: 0.274px solid #480130;
  
  img {
    width: 5rem;
    height: 5rem;
  }

  div {
    margin-left: .8rem;
    text-align: start;

    .name {
      color: #343330;
      font-size: 1.1294rem;
      font-weight: 400;
      line-height: normal;

      margin: .5rem 0;
    }

    .price {
      color: #ABABAB;
      font-size: 1.0075rem;
      font-weight: 400;
      line-height: normal;
    }

    .reviews {
      display: flex;
      justify-content: center;
      align-items: center;

      color: #7A7676;
      font-size: 0.635rem;
      font-weight: 400;
      line-height: normal;

      margin-top: .6rem;
      margin-right: .5rem;

      svg {
        color: #7A7676;
        font-size: 0.7425rem;
        margin-right: .2rem;
      }
    }
  }
`;