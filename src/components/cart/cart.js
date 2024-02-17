import React from "react";
import {Box, Button, Container, Flex, Grid,  Text} from "@chakra-ui/react";
import {BsFillSquareFill} from "react-icons/bs"
import Head from "next/head";
import Image from 'next/image'
import MainHeading from "../landingPage/heading";
import arrow from "../../../public/assets/cart/arrow.svg"
import {cartItems} from "./data";
import  cartItem from "../../../public/assets/cart/cartitem.svg"

function CartItems() {
    return (
        <Box m={"30px auto"} maxW={"1000px"}>
            <Box w={"90%"}  m={"0px auto"}>
                <Text fontWeight={"600"} fontSize={"35px"}>My Cart</Text>
                <Box w={"80px"} border={"2px solid #A7016E"}></Box>
            </Box>
            <Flex  m={"0px auto"} flexDir={"column"} gap={"20px"} w={"90%"} mt={"20px"}>
                {cartItems.map((index)=>{
                    return(
                        <Flex  boxShadow={" rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"} pr={"20px"} mb={"10px"} alignItems={"center"} justifyContent={"space-between"} key={index} borderRadius={"11px"} w={"100%"}>
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
                            <Flex  alignItems={"center"} justifyContent={"center"} w={"fit-content"}  flexDir={"column"} >
                                <Flex gap={"10px"} alignItems={"center"} justifyContent={"center"}>
                                    <Button bg={"none"} fontWeight={"700"} fontSize={"20px"} color={"#DB0090"}>-</Button>
                                    <Box fontWeight={"700"} fontSize={"20px"} color={"#DB0090"}>1</Box>
                                    <Button bg={"none"} fontWeight={"700"} fontSize={"20px"} color={"#DB0090"}>+</Button>


                                </Flex>
                                <Text fontSize={"12px"} fontStyle={"italic"}>Set to zero to delete</Text>

                            </Flex>
                            <Box>
                                <Text fontSize={"20px"} fontWeight={"600"}>₦25,000.00</Text>
                                <Text color={"red"} textDecoration={"underline"} fontSize={"16px"}fontStyle={"italic"}>Remove Item</Text>
                            </Box>
                        </Flex>
                    )
                })}
            </Flex>
            <Box w={"80%"} m={"30px auto"}>
                <Button fontSize={"17px"} fontWeight={"500"} color={"white"} bg={"#DB0090"} w={"100%"} borderRadius={"0"}>Proceed to checkout</Button>
            </Box>

        </Box>
    )
}

export default CartItems