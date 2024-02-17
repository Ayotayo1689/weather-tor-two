import react from "react";
import styled from "styled-components";
import {BackgroundImg} from "../../../public/assets/furniturePage";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading} from "@chakra-ui/react";
import Image from "next/image";

const Hero = () => {
    return (
        <>
            <HeroSection>
                <h2>Furniture Shop</h2>
                <Breadcrumb separator='>' color={'white'}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Furnitures</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Shop</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </HeroSection>
        </>
    )
}

export default Hero;

const HeroSection = styled.div`
    background-image: url('/assets/furniturePage/image.png');
    background-size: cover;
    background-position: center;
  
    width: 100%;
    height: 290px;
    margin-bottom: 4rem;
    margin-top: .5rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  h2 {
    font-size: 34px;
    font-weight: 600;
    line-height: 45px;
    color: #fff;
  }
`;