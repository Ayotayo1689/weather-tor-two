import React from 'react'
import Image from 'next/image'
import {Box, Flex, Select, Text, useTheme} from "@chakra-ui/react";
import {logo} from "../../../public/assets/navbar";
import styled from "styled-components";
import {BiSearch} from "react-icons/bi";
import {LiaShippingFastSolid} from "react-icons/lia";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {FaRegHeart, FaRegUserCircle} from "react-icons/fa";
import {breakpoints} from "../../../styles/theme";
import {GrCart} from "react-icons/gr";
import {useSelector} from "react-redux";
import NoSSR from "../../utils/NoSSR";
import Link from "next/link";
import truck from "../../../public/assets/navbar/truck.svg"

const BottomNav = () => {
    const theme = useTheme();
    const cartItems = useSelector((state) => state.cart.cart);
    const  total_items  = cartItems && cartItems.length

    return (
        <BottomContainer>
           <Flex  bg={'#EEEDED'}>
               <Flex
                   maxW={"1450px"}
                   m={"0 auto"}
                   justifyContent={'space-around'}
                   alignItems={'center'}
                   py={'.9rem'}
                   px={'1.5rem'}
               >
                   <Image src={logo} alt={'logo'}/>

                   {/* ====== search box ====== */}
                   <Flex
                       borderRadius={'4px'}
                       border={'2px solid #ccc'}
                       p={'.8rem 1.2rem'}
                       bg={'#fff'}
                       justifyContent={'space-around'}
                       flexDir={'row'}
                       mx={'.5rem'}
                   >
                       <input type={'text'} placeholder={'Search for anything...'} />


                       <Flex justifyContent={'space-evenly'} alignItems='center' ml={'2rem'}>
                           <div style={{ background: '#ccc', width: '2px', height: '20px' }} />
                           <Select
                               variant='unstyled'
                               placeholder='All Categories'
                               bg={'transparent'}
                               focusBorderColor='#fff' width={'90px'} mx={'10px'} />
                       </Flex>
                       <SearchBtn>
                           <BiSearch />
                       </SearchBtn>
                   </Flex>
                   <Flex justifyContent={'space-evenly'} flexDir={'row'}>
                       <DeliveryCard style={{gap:"10px"}}>
                           <Image src={truck} alt={"truck"}/>
                           {/*<LiaShippingFastSolid />*/}
                           <div>
                               <p className={'pink-text'}>Free Shipping</p>
                               <p >Orders above ₦500K</p>
                           </div>
                       </DeliveryCard>
                       <DeliveryCard>
                           <TfiHeadphoneAlt />
                           <Box>
                               <Text className={'pink-text'}>Customer Care</Text>
                               <Text >+234809 999 7576</Text>
                           </Box>
                       </DeliveryCard>
                   </Flex>

                   <ProfileIcons>
                       <Link href={"/login"}>
                           <FaRegUserCircle />
                       </Link>
                       <FaRegHeart />
                       <Link href="/my-cart" style={{ position: "relative" }}>
                           <Box  style={{position:"relative"}}>
                               <GrCart   />
                               <NoSSR>
                                   <Flex borderRadius={"30%"}  bg={"#480130"} color={"white"} fontWeight={"500"} p={"4px"} w={"25px"} h={"25px"} alignItems={"center"} justifyContent={"center"} style={{position:"absolute"}} top={"-13px"} right={"-3px"} >{total_items}</Flex>
                               </NoSSR>
                           </Box>
                       </Link>
                       {/**/}
                   </ProfileIcons>
               </Flex>

           </Flex>
        </BottomContainer>
    )
}

export default BottomNav;


const BottomContainer = styled.div`
  display: block;
  
  input {
    padding: 0 1rem; 
    width: 250px;
    background: transparent;
  }
  input:focus, select:focus {
    outline: none; /* Remove default focus outline */
  }
  
  ${breakpoints.md} {
    display: none;
  }
  ${breakpoints.sm} {
    display: none;
  }
`;
export const SearchBtn = styled.div`
  border-radius: 0.30606rem;
  background: #DB0090;
  box-shadow: 0px 3.2967774868011475px 3.2967774868011475px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  margin-left: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.45838rem 1.2038rem;
  gap: 0.11181rem;
  
  svg {
    font-size: 1.1rem;
    color: #fff;
  }
`;

const DeliveryCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 5px 10px;
  margin-right: 10px;
  
  //border:2px solid red;
  border-radius: 0.54944rem;
  border: 0.374px solid #343330;
  background: #FFF;
  color: #343330;
  
  font-size: 0.67044rem;
  font-weight: 400;
  line-height: normal;
  
  svg {
    font-size: 2.3rem;
    margin-right: 8px;
  }
  .pink-text {
    color: #DB0090;
  }
`;

const ProfileIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;


  ${breakpoints.md} {
    font-size: 1rem;
  }
  
  ${breakpoints.sm} {
    font-size: 1rem;
  }
  svg {
    font-size: 2rem;
    margin-right: 10px;
  }
`;
