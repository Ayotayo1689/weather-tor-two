import React from "react"
import {Box, Divider, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ResetPasswordForm from "./form"
import {FiPhoneCall} from "react-icons/fi"
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import styled from "styled-components";
import Head from "next/head";
import VerifyUserForm from "./form";


function VerifyUser() {
    return (
        <>
            <Head>
                <title> Verify account - Weatherfor2</title>
                <meta
                    name="description"
                    content="Verify your account easily and securely at Weatherfor2.
                    Your account's safety is our priority, and we're here to assist you every step of the way.
                    Welcome back to Weatherfor2!"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Manrope:wght@700;800&family=Open+Sans:wght@300;400;500;600;800&family=Roboto:wght@300;400;500;700;900&family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"></link>

                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Manrope:wght@700;800&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"></link>
            </Head>

            <Box height={{base:"100%",md:"100vh",lg:"100vh"}}>
                <Flex
                    flexDir={{base: "column", md: 'row', lg: "row"}}
                    height={{base:"100%",md:"100vh",lg:"100vh"}}
                >
                    <Box
                        w={{base: "100%", md: "100%", lg: "40%"}}
                        bg={{base: "white", md: "rgba(254, 131, 198, 0.15)", lg: "rgba(254, 131, 198, 0.15)"}}
                    >

                        <Box alignItems={"center"} display={"flex"} justifyContent={"center"} mt={"8rem"}>
                            <Image src={"/assets/authenticationPages/resetPassword/logo.png"}
                                   width={150}
                                   height={100}
                                   alt={"logo"}/>
                        </Box>

                        <Text color={"#000"}
                              fontSize={{base: "20px", md: "0", lg: "30px"}}
                              fontWeight={"400"}
                              fontFamily={"'Urbanist', sans-serif"}
                              textAlign={"center"}
                              mt={"1rem"}

                        >
                           Verify Account

                        </Text>

                        <Box
                            height={{base: "2px", md: "4px", lg: "4px"}}
                            bg="rgba(167, 1, 110, 1)" ml={{base: "7.5rem", md: "10rem", lg: "10rem"}}
                            w={{base: "40%", md: "0", lg: "20%"}}/>

                        <Text
                            color={"rgba(75, 70, 92, 1)"}
                            fontSize={"15px"}
                            fontWeight={"400"}
                            mt={"1rem"}
                            ml={{base: "1rem", md: "3rem", lg: "4rem"}}
                            // w={"25rem"}
                            fontFamily={"'Public Sans', sans-serif"}
                        >
                            Enter the code we sent to your Email
                        </Text>

                        <Box mt={"20px"}>
                            <VerifyUserForm  numberOfDigits={6}/>
                        </Box>


                    </Box>


                    <RightSection>
                        <h1>Explore our exquisite
                            <span> Interior Design</span></h1>
                        <div
                            style={{
                                width: "22rem",
                                height: "4px",
                                background: "rgba(219, 0, 144, 1)",
                                marginBottom: " 2rem ",
                                marginTop: "16rem",
                                marginLeft: "auto",
                                position: "absolute",
                                top: "2rem",
                                left: "9rem"


                            }}
                        ></div>

                        <Explore>

                            <PurpleShape>
                                <h2>Our team of expert Interior Designers that can help you transform your space into a
                                    Paradise</h2>
                            </PurpleShape>
                        </Explore>
                    </RightSection>

                </Flex>
            </Box>
        </>
    )
}

export default VerifyUser


export const RightSection = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 60%;
  font-family: 'Urbanist', sans-serif;

  @media screen and (max-width: 540px) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }

  > h1 {
    color: #343330;
    font-size: 25px;
    font-weight: 400;
    margin-top: 10rem;
    width: 20rem;
    line-height: 1.5em;
    position: absolute;
    top: 2rem;


    > span {
      color: rgba(219, 0, 144, 1);
      font-size: 40px;
      font-weight: 700;
    }

  }
`
export const Explore = styled.div`
  background: url("/assets/authenticationPages/verifyUser/verify.svg") no-repeat center center/cover;
  position: relative;
  clip-path: polygon(78% 0, 100% 0%, 100% 100%, 24% 100%);
  width: 50rem;
  color: #4e97fd;


`
export const PurpleShape = styled.div`


  > h2 {
    width: 15rem;
    position: absolute;
    bottom: 0;
    right: 0;
    color: #FFF;
  

  }

  &::before {
    content: "";
    width: 34.883rem;
    height: 600px;
    position: absolute;
    background: url("/assets/authenticationPages/resetPassword/purple.png") no-repeat center center/cover;
    bottom: 0;
    right: 0;
    z-index: -1;

  }

`
