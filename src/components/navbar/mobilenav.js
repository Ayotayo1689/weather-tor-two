import React from 'react'
import {Box, Flex, Select} from "@chakra-ui/react";
import {MdOutlineMenu} from "react-icons/md";
import {SearchBtn} from "./bottomnav";
import {BiSearch} from "react-icons/bi";
import {logo} from "../../../public/assets/navbar";
import Image from "next/image";
import {FaRegHeart, FaRegUser} from "react-icons/fa";
import {BsCart3} from "react-icons/bs";
import styled from "styled-components";
import {breakpoints} from "../../../styles/theme";

const MobileNav = ({ toggleSideBar }) => {
    return (
        <Wrapper>
            <Flex justifyContent={"space-between"} alignItems={'center'} mb={'.8rem'}>
                <Box bg={'#DB0090'} padding={'.6rem'} borderRadius={'3px'}>
                    <MdOutlineMenu
                        size={"1.4rem"}
                        color="white"
                        onClick={toggleSideBar}
                    />
                </Box>
                <Image src={logo} alt={'logo'}/>
                <ProfileIcons>
                    <span> <FaRegUser /> My Account</span>
                    <FaRegHeart />
                    <BsCart3 />
                </ProfileIcons>

            </Flex>
            {/* ====== search box ====== */}
            <Flex
                w={'70%'}
                borderRadius={'4px'}
                border={'2px solid #ccc'}
                bg={'#fff'}
                p={'.6rem .4rem'}
                justifyContent={'space-around'}
                flexDir={'row'}
                mx={'2rem'}
                alignSelf={'center'}
            >
                <input type={'text'} placeholder={'Search for anything...'} />

                <Flex justifyContent={'space-evenly'} alignItems='center' ml={'2rem'}>
                    <div style={{ background: '#ccc', width: '2px', height: '20px' }} />
                    <Select variant='unstyled'
                            placeholder='All Categories'
                            focusBorderColor='#fff'
                            width={'100px'} ml={'10px'}
                    />
                </Flex>
                <SearchBtn>
                    <BiSearch />
                </SearchBtn>
            </Flex>
        </Wrapper>
    )
}

export default MobileNav;

const Wrapper = styled.div`
  input {
    padding: 0 1rem;
    width: 250px;
    background: transparent;
  }
  input:focus, select:focus {
    outline: none; /* Remove default focus outline */
  }
`;

const ProfileIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 10px;
  }


  ${breakpoints.md} {
    font-size: 1rem;
  }
  
  ${breakpoints.sm} {
    font-size: 1rem;
  }
  svg {
    font-size: 1.8rem;
    margin-right: 10px;
  }
`;