import React, {useState} from 'react'
import {
    Box,
    Flex,
    Heading,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";
import Image from "next/image";
import styled from "styled-components";
import {mainImg, subB, subD, subE} from "../../../public/assets/productDetails";
import {BsCart3} from "react-icons/bs";
import {breakpoints} from "../../../styles/theme";

const Details = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <Flex justifyContent={'center'} alignItems={'start'} flexDir={{ lg: 'row', md: 'column', base: 'column' }} gap={'1.5rem'} w={'100%'}>

                {/* ===== product images and views ======= */}
                <ProductImage>
                    <Tabs position="relative" variant="unstyled" defaultIndex={0}>
                        <TabIndicator
                            height="0px"
                            bg="transparent"
                        />
                        <TabPanels>
                            <TabPanel w={'100%'} h={'40rem'}>
                                <Image src={mainImg} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                            </TabPanel>
                            <TabPanel w={'100%'} h={'40rem'}>
                                <Image src={subB} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </TabPanel>
                            <TabPanel w={'100%'} h={'40rem'}>
                                <Image src={mainImg} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </TabPanel>
                            <TabPanel w={'100%'} h={'40rem'}>
                                <Image src={subD} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </TabPanel>
                            <TabPanel w={'100%'} h={'40rem'}>
                                <Image src={subE} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </TabPanel>
                            <TabPanel w={'100%'} h={'40rem'}>
                                <Image src={mainImg} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </TabPanel>
                        </TabPanels>

                        <TabList mt={'1rem'} h={'6.64163rem'} overflowX={'scroll'}>
                            <Tab w={'6.64163rem'} h={'6.64163rem'} border={'none'}>
                                <Image src={mainImg} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                            </Tab>
                            <Tab w={'6.64163rem'} h={'6.64163rem'} border={'none'}>
                                <Image src={subB} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Tab>
                            <Tab w={'6.64163rem'} h={'6.64163rem'} border={'none'}>
                                <Image src={mainImg} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Tab>
                            <Tab w={'6.64163rem'} h={'6.64163rem'} border={'none'}>
                                <Image src={subD} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Tab>
                            <Tab w={'6.64163rem'} h={'6.64163rem'} border={'none'}>
                                <Image src={subE} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Tab>
                            <Tab w={'6.64163rem'} h={'6.64163rem'} border={'none'}>
                                <Image src={mainImg} alt={'chair'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Tab>
                        </TabList>
                    </Tabs>
                </ProductImage>


                {/* ======== product description ======= */}
                <ProductDescription>
                    <Heading fontSize={'2.02663rem'}>
                        Nordic Living Room Sofa Salon
                        Italian Modern Minimalist Luxury
                    </Heading>
                    <Flex mb={'1.5rem'} justifyContent={'start'} alignItems={'center'} mt={'.7rem'}>
                        <p className={'discount'}>₦180,000.00</p>
                        <p className={'price'}>₦80,000.00</p>
                    </Flex>

                    <hr />

                    <Text mt={'1rem'} mb={'1.2rem'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                    {/* ===== product color ======= */}
                    <Colors>
                        <p>Color: </p>

                        <div className={'red'}/>
                        <div className={'brown'} />
                        <div className={'white'} />
                        <div className={'gray'} />
                    </Colors>

                    {/* ========= product material types ========= */}
                    <Flex fontSize='0.98994rem' mb={'1.6rem'} justifyContent={'start'} alignItems={'center'} gap={'1.4rem'} >
                        <p>Material: </p>
                        <p className={'material'}> Cotton</p>
                    </Flex>

                    {/* ========= product types ========= */}
                    <Flex fontSize='0.98994rem' mb={'1.6rem'} justifyContent={'start'} alignItems={'center'} gap={'1.4rem'} >
                        <p>Type: </p>
                        <p>Curtain & Drope Rods</p>
                    </Flex>

                    {/* ========= product availability ========= */}
                    <Flex fontSize='0.98994rem' mb={'1.6rem'} justifyContent={'start'} alignItems={'center'} gap={'1.4rem'}>
                        <p>Availability: </p>
                        <Text color={'green'}>In Stock!</Text>
                    </Flex>

                    {/* ========= product quantity ========= */}
                    <Box fontSize='0.98994rem' mb={'1.6rem'}>
                        <p>Quantity: </p>

                        <Quantity>
                            <button onClick={decrement}> - </button> {count} <button onClick={increment}> + </button>
                        </Quantity>
                    </Box>

                    <ActionButtons>
                        <buttton type={'button'} className={'add'}>
                            <BsCart3 /> ADD TO CART
                        </buttton>
                        <button type={'button'} className={'buy'} >
                            BUY NOW
                        </button>
                    </ActionButtons>

                </ProductDescription>
            </Flex>
        </>
    )
}

export default Details;


const ProductImage = styled.div`
  width: 50%;
  
  img {
    width: 100%;
    height: 40rem;
  }
  ${breakpoints.sm}{
    width: 100%;

    img {
      width: 100%;
      height: 20rem;
    }
  }
  ${breakpoints.md} {
    width: 100%;
  }
`;

const ProductDescription = styled.div`
  width: 50%;
  
  ${breakpoints.sm}{
    width: 100%;
  }
  ${breakpoints.md} {
    width: 100%;
  }
  .price {
    color: #F00;
    font-size: 1.39194rem;
    font-weight: 400;
    line-height: normal;
  }
  .discount {
    color: #ABABAB;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    text-decoration: line-through;

    margin-right: 15px;
  }
  
  .material {
    border: 1.3px solid #DB0090;
    padding: 6px 16px;
  }
`;

const Colors = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  
  margin-bottom: 1.6rem;
  
  p {
    margin-right: 1rem;
  }
  
  div {
    width: 3.0625rem;
    height: 3.0625rem;
    border-radius: 50%;
    
    border: 2.3px solid #DB0090;
    margin-right: 1rem;
  }
  
  .red {
    background: lightsteelblue;
  }
  .gray {
    background: gray;
  }
  .white {
    background: #fff;
  }
  .brown {
    background: #f5f5dc;
  }
`;

const Quantity = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: .6rem;

  width: 200px;
  border: 1px solid #555555;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;

  }
  button:first-of-type {
    border-right: 1px solid #555555;
    padding-right: 1.5rem;
  }
  button:last-of-type {
    border-left: 1px solid #555555;
    padding-left: 1.5rem;
  }
`;
const ActionButtons = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;

  button {
    cursor: pointer;
    padding: 1.04581rem 1.72788rem;
    
    font-size: 0.95856rem;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }
    .buy {
      background-color: #DB0090;
      color: #fff;
    }
    .add {
      padding: .9rem 1.4rem;
      
      background-color: #000;
      color: #fff;
    
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.45469rem;
      flex-direction: row;
    
      svg {
        font-size: 1.16875rem;
        margin-right: 10px;
      }
    }
`;