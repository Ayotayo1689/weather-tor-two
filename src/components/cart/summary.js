import React from "react";
import {Box, Button, Container, Flex, Grid,  Text} from "@chakra-ui/react";
import {BsFillSquareFill} from "react-icons/bs"
import Head from "next/head";
import Image from 'next/image'
import MainHeading from "../landingPage/heading";
import arrow from "../../../public/assets/cart/arrow.svg"
import {cartItems} from "./data";
import  cartItem from "../../../public/assets/cart/cartitem.svg"

function Summary() {
    return (

                    <Flex gap={"30px"} mt={"20px"}>
                        <Box borderRight={"2px solid #DB0090"} pr={"40px"} w={"54%"} h={"fit-content"} >
                            <Box>
                                <Text fontSize={"40px"} fontWeight={"600"}>Order Summary</Text>
                                <Box w={"35%"} mb={"20px"} border={"2px solid #A7016E"}></Box>
                                {cartItems.map((index)=>{
                                    return(
                                        <Flex boxShadow={" rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"} pr={"50px"} mb={"10px"} justifyContent={"space-between"} key={index} borderRadius={"11px"} w={"100%"}>
                                            <Flex gap={"10px"} alignItems={"center"} >
                                                <Image src={cartItem} alt={"bed"}/>
                                                <Box  h={"fit-content"}>
                                                    <Text fontWeight={"700"} fontSize={"20px"}>
                                                        Wooden Canister
                                                    </Text>
                                                    <Text color={"#DB0090"} fontWeight={"400"} fontSize={"14px"}>
                                                        Blue, double sided
                                                    </Text>
                                                    <Text color={"#343330"} fontWeight={"400"} fontSize={"14px"}>
                                                        Size: 70 x 56cm
                                                    </Text>
                                                </Box>
                                            </Flex>
                                            <Flex  alignItems={"center"} justifyContent={"center"} w={"fit-content"}  flexDir={"column"} >
                                                <Flex gap={"10px"} alignItems={"center"} justifyContent={"center"}>
                                                    <Button bg={"none"} fontWeight={"700"} fontSize={"20px"} color={"#DB0090"}>-</Button>
                                                    <Box fontWeight={"700"} fontSize={"20px"} color={"#DB0090"}>1</Box>
                                                    <Button bg={"none"} fontWeight={"700"} fontSize={"20px"} color={"#DB0090"}>+</Button>


                                                </Flex>
                                                <Text fontSize={"12px"} fontStyle={"italic"}>Set to zero to delete</Text>

                                            </Flex>
                                        </Flex>
                                    )
                                })}
                            </Box>

                        </Box>
                        <Box position={"sticky"} top={"100px"}  pt={"80px"} w={"46%"} h={"fit-content"} >
                            <Flex  mb={"20px"} justifyContent={"space-between"}>
                                <Text fontWeight={"600"} fontSize={"20px"}>
                                    Number of items
                                </Text>
                                <Text fontWeight={"600"} fontSize={"28px"}>
                                    3
                                </Text>

                            </Flex>
                            <Flex mb={"30px"} justifyContent={"space-between"}>
                                <Text fontWeight={"600"} fontSize={"20px"}>
                                    Delivery Address
                                </Text>
                                <Text fontWeight={"600"} fontSize={"20px"}>
                                    22 Obayan street, yaba,Lagos
                                </Text>

                            </Flex>
                            <Flex mb={"30px"} justifyContent={"space-between"}>
                                <Text fontWeight={"600"} fontSize={"20px"}>
                                    Delivery Charges
                                </Text>
                                <Text fontWeight={"600"} fontSize={"20px"}>
                                    ₦5,000.00
                                </Text>

                            </Flex>
                            <Flex mb={"30px"} justifyContent={"space-between"}>
                                <Text fontWeight={"600"} fontSize={"20px"}>
                                    Sub-total
                                </Text>
                                <Text fontWeight={"600"} fontSize={"20px"}>
                                    ₦80,000.00
                                </Text>

                            </Flex>
                            <Flex mb={"30px"} justifyContent={"space-between"}>
                                <Text fontWeight={"700"} fontSize={"28px"}>
                                    Total
                                </Text>
                                <Text fontWeight={"700"} fontSize={"28px"}>
                                    ₦85,000.00
                                </Text>

                            </Flex>
                            <Button bg={"#DB0090"} color={"white"} borderRadius={"0"} w={"100%"}>Pay</Button>
                            <Button bg={"none"} color={"black"} border={"1px solid #DB0090"} mt={"30px"} borderRadius={"0"} w={"100%"}>Generate Reciept</Button>

                        </Box>
                    </Flex>

    )
}

export default Summary