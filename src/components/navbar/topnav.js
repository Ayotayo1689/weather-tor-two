import React from 'react'
import {Box, Flex, Text, useTheme} from "@chakra-ui/react";
import {RiFacebookCircleLine} from "react-icons/ri";
// import {LiaTelegram} from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";
import {FaPinterestP} from "react-icons/fa";
import styled from "styled-components";
import {FiTwitter} from "react-icons/fi";
import {breakpoints} from "../../../styles/theme";
import Link from "next/link";

const TopNav = () => {
    const theme = useTheme();

    return (
        <TopContainer>
            <Flex
                w={'100%'}
                maxW={"1400px"}
                bg={'#480130'} color={'#fff'}
                justifyContent={'space-between'}
                alignItems={'center'}
                h={'5vh'}
                px={'4rem'}
            >
                <Flex justifyContent={'center'}>
                    <Text px={'.6rem'}>Contact</Text>
                    <Text px={'.6rem'} borderRight={'1.4px solid #fff'} borderLeft={'1.4px solid #fff'}>Reviews</Text>
                    <Text px={'.6rem'}>Support</Text>
                </Flex>
                <Flex justifyContent={'center'}>
                    <Text px={'1.6rem'} borderRight={'1.4px solid #fff'} mr={'10px'}>support@weatherfor2.com</Text>
                    <SocialIcons
                    >
                        <Link href={"https://www.facebook.com/weatherfor2?mibextid=b06tZ0"} >
                            <RiFacebookCircleLine />
                        </Link>

                        <Link href={"https://instagram.com/weatherfor2bedding?igshid=MzRlODBiNWFlZA=="}>
                            <BsInstagram />
                        </Link>

                        <Link href={"https://twitter.com/weatherfor2b?s=11&t=cAQuXnmZYFrFlA98ZUY1LQ"}>
                            <FiTwitter />
                        </Link>

                        <Link href={"https://pin.it/6Zkb93m"}>
                            <FaPinterestP />
                        </Link>



                    </SocialIcons>
                </Flex>
            </Flex>
        </TopContainer>
    )
}

export default TopNav;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #480130;
 
  padding: 10px 0;
  ${breakpoints.md} {
    display: none;
  }
  ${breakpoints.sm} {
    display: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  svg {
    font-size: 1.3rem;
    margin: 0 10px;
  }
`;