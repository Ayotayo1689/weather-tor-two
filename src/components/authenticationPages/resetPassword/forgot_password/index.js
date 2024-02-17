import React from "react"
import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import ForgotPasswordForm from "./form";
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";


function ForgotPassword() {
    return (
        <>

            <Head>
                <title> Reset Password - Weatherfor2</title>
                <meta
                    name="description"
                    content="To reset your password, please enter the 8-digit code we've sent to your registered
                     email address. Follow the instructions in the email to regain access to your account. We're
                     here to help you get back on track at Weatherfor2."
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Manrope:wght@700;800&family=Open+Sans:wght@300;400;500;600;800&family=Roboto:wght@300;400;500;700;900&family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"></link>

                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Manrope:wght@700;800&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"></link>
            </Head>

            <Flex
                flexGrow={"1"}
                flexDir={{base: "column", md: 'row', lg: "row"}}

            >
                <Box
                    w={{base: "100%", md: "50%", lg: "40%"}}
                    height={"100vh"}
                    bg={{base: "white", md: "white", lg: "rgba(254, 131, 198, 0.15)"}}
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
                          fontFamily={'"Urbanist", sans-serif'}
                          textAlign={"center"}
                          mt={"1rem"}
                          mb={"1rem"}
                    >
                        Forgot Password

                    </Text>

                    <Box height="2px" bg={"#CAD0DD"} mx={"auto"} w={{base: "90%", md: "80%", lg: "70%"}}/>
                    <Box
                        height={{base: "2px", md: "4px", lg: "4px"}}
                        bg="rgba(167, 1, 110, 1)" ml={{base: "7.5rem", md: "10rem", lg: "10rem"}} mt="-3px"
                        w={{base: "40%", md: "0", lg: "15%"}}/>

                    <Text
                        color={"rgba(75, 70, 92, 1)"}
                        fontSize={"15px"}
                        fontWeight={"400"}
                        mt={"1rem"}
                        ml={{base: "1rem", md: "3rem", lg: "4rem"}}
                        fontFamily={"'Public Sans', sans-serif"}
                    >
                        Enter  to your Email
                    </Text>

                    <ForgotPasswordForm/>

                    <Link href="/login"> <Text color={" rgba(75, 70, 92, 1)"} mt={"1rem"} fontSize={"15px"}
                                          fontWeight={400} display={"flex"}
                                          alignItems={"center"}
                                          fontFamily={"'Public Sans', sans-serif"}
                                          justifyContent={"center"}> Don’t have an account? <Text as='span'
                                                                                                  color={"rgba(254, 131, 198, 1)"}> &nbsp;Sign
                        up instead</Text>
                    </Text></Link>


                </Box>
                <RightSection>
                    <h1>The <span> Best</span> Duvet Deals
                        You Can <span> Get</span></h1>


                    <div
                        style={{
                            width: "18rem",
                            height: "4px",
                            background: "rgba(219, 0, 144, 1)",
                            marginBottom: " 2rem ",
                            marginTop: "12rem",
                            marginLeft: "auto",
                            position: "absolute",
                            top: "2rem",
                            left: "12rem"


                        }}
                    ></div>

                    <Explore>

                        <PurpleShape>

                        </PurpleShape>
                    </Explore>
                </RightSection>
            </Flex>

        </>
    )
}

export default ForgotPassword


export const RightSection = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 60%;
  font-family: 'Urbanist', sans-serif;

  @media screen and (max-width: 540px) {
    display: none;
  }

  > h1 {
    color: #343330;
    font-size: 25px;
    font-weight: 400;
    margin-top: 5rem;
    width: 15rem;
    line-height: 1.5em;
    position: absolute;
    top: 2rem;
    margin-left: 6px;


    > span {
      color: rgba(219, 0, 144, 1);
      font-size: 40px;
      font-weight: 700;
    }

  }
`
export const Explore = styled.div`
  background: url('/assets/authenticationPages/resetPassword/towel.png') no-repeat center center/cover;
  position: relative;
  clip-path: polygon(78% 0, 100% 0%, 100% 100%, 24% 100%);
  width: 50rem;
  color: #4e97fd;


`
export const PurpleShape = styled.div`

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