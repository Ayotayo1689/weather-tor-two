import React from 'react'
import {Button, Flex, Select, Spacer} from "@chakra-ui/react";
import styled from "styled-components";
import Image from "next/image";
import {squareA, squareB, squareC, squareD} from "../../../public/assets/furniturePage";

const Sortings = () => {
    return (
        <>
            <Flex justifyContent={'space-between'} alignItems={'center'} mb={'.7rem'} display={{ base: 'none', md: 'none', lg: 'flex'}}>
                <ShowBtn>
                    SHOW
                    <span style={{ marginLeft: '.5rem' }}>10</span>
                    <span style={{ color: '#DB0090' }}>30</span>
                    <span>45</span>
                    <span>65</span>

                </ShowBtn>
                <Spacer />
                <Flex display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'.5rem'}>
                    <Image src={squareA} alt={'menus'} />
                    <Image src={squareB} alt={'menus'} />
                    <Image src={squareC} alt={'menus'} />
                    <Image src={squareD} alt={'menus'} />
                    <Select variant='outline' placeholder='Default Sorting' w={'200px'} h={'50px'} border={'0.274px solid #480130'}>
                        <option value='highest'>Highest Price</option>
                        <option value='lowest'>Lowest Price</option>
                        <option value='Default'>Default Sorting</option>
                    </Select>
                </Flex>
            </Flex>
            <Flex mb={'1.5rem'}>
                <Ranges>
                    50,0000 - 70,0000+
                </Ranges>
                <Button textDecoration={'underline'} variant='link' color={'#000'}>Clear all</Button>
            </Flex>
        </>
    )
}

export default Sortings;

const ShowBtn = styled.div`
    border: 0.274px solid #480130;
  padding: 0 1rem;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  span {
    padding: 0 5px;
  }
`;

const Ranges = styled.div`
  border-radius: 0.625rem;
  background: #E8E3E3;  
  padding: .4rem 1rem;
  margin-right: .7rem;
`;