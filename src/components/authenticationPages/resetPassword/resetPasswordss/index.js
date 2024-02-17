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


function ResetPasswordss() {
    return (
        <>
            <Head>
                <title> Reset Password - Weatherfor2</title>
                <meta
                    name="description"
                    content="Reset your password easily and securely at Weatherfor2. Regain access to your
                     account with our streamlined password reset process.
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

            <Box height={"100%"}>
                <Flex
                    flexDir={{base: "column", md: 'row', lg: "row"}}
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
                            Reset Password

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
                            w={"25rem"}
                            fontFamily={"'Public Sans', sans-serif"}
                        >
                            Please choose a complicated password to secure your account
                        </Text>

                        <ResetPasswordForm/>

                        <Link href="/login"> <Text color={" rgba(75, 70, 92, 1)"} mt={"1rem"} fontSize={"15px"}
                                              fontWeight={400} display={"flex"}
                                              alignItems={"center"}
                                              justifyContent={"center"}
                                              fontFamily={"'Public Sans', sans-serif"}> Cancel action? <Text as='span'
                                                                                              color={"rgba(254, 131, 198, 1)"}> &nbsp;Sign
                            in instead</Text>
                        </Text></Link>

                        <Box display="flex" alignItems="center" mt={"1rem"} w={{base: "", md: "", lg: "70%"}}
                             mx={"auto"} fontFamily={"'Public Sans', sans-serif"}>
                            <Divider flex="1" borderColor="gray.300"/>
                            <Text px={4} color={"rgba(75, 70, 92, 1)"}>Need help?</Text>
                            <Divider flex="1" borderColor="gray.300"/>
                        </Box>


                        <Link href="/contact_us"> <Text color={" rgba(75, 70, 92, 1)"} mt={"1rem"} fontSize={"15px"}
                                              fontWeight={400} display={"flex"}
                                              alignItems={"center"}
                                              justifyContent={"center"}
                                              fontFamily={"'Public Sans', sans-serif"}> Having a problem with your account? <Text
                            as='span'
                            color={"rgba(254, 131, 198, 1)"}> &nbsp;Contact us
                        </Text>
                        </Text></Link>

                        <Flex justifyContent={"center"} ml={{base: "0rem", md: "1rem", lg: "1rem"}} mt={"2rem"}
                              mb={{base: "5rem", md: "10rem", lg: "5rem"}}>
                            <Box mr={"1rem"} bg={"rgba(219, 68, 55, 0.16)"} width={"38px"} height={"38px"}
                                 p={"1rem 2rem 2em 1rem"} borderRadius={"5px"}>
                                <FiPhoneCall color={"rgba(75, 70, 92, 1)"} fontSize={"1.3rem"}/>
                            </Box>
                            <Box mr={"1rem"} bg={"rgba(66, 103, 178, 0.16)"} width={"38px"} height={"38px"}
                                 p={"1rem 2rem 2em 1rem"} borderRadius={"5px"}>
                                <FaFacebookF color={"rgba(66, 103, 178, 1)"} fontSize={"1.3rem"}/>
                            </Box>
                            <Box mr={"1rem"} bg={"rgba(29, 161, 242, 0.16)"} width={"38px"} height={"38px"}
                                 p={"1rem 2rem 2em 1rem"} borderRadius={"5px"}>
                                <AiOutlineTwitter color={"rgba(29, 161, 242, 1)"} fontSize={"1.3rem"}/>

                            </Box>
                        </Flex>


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

export default ResetPasswordss


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
  background: url("/assets/authenticationPages/resetPassword/sofa.png") no-repeat center center/cover;
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
