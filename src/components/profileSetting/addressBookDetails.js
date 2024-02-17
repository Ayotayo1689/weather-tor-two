import React from "react";
import {Box, Button, Flex,  Text,} from "@chakra-ui/react";
import Link from "next/link";


const AddressBookDetails = () => {
    return (
        <Box minH={"300px"}   w={{ base: "100%", lg: "70%" }}  mb={"50px"}>

            <Text fontSize={"40px"} mb={"15px"}>
                Address Book
            </Text>
            <Text fontSize={"29px"}  mb={"20px"} borderBottom={"2px solid #D9D9D9"} pb={"10px"}>
                Default Addresses
            </Text>

            <Flex gap={"30px"} flexDir={{base:"column",md:"row"}} >
                <Box  w={{base:"100%",md:"45%"}}>
                    <Text fontSize={"22px"} mb={"20px"} fontWeight={"600"} >
                        Default Billing Address
                    </Text>
                    <Flex  mb={"7px"} w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            Full Name:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            Abbas Alabura
                        </Text>
                    </Flex>
                    <Flex  mb={"7px"} w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            Company:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            Tanta Innovatives
                        </Text>
                    </Flex>
                    <Flex  mb={"7px"}  w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            Address:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            23 Wall Street, Manhattan‎, NYC
                        </Text>
                    </Flex>
                    <Flex  mb={"7px"}  w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            City/Town:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            Manhattan, NYC, 10005
                        </Text>
                    </Flex>
                    <Flex  mb={"7px"}  w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            Phone:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            +1 7125810529
                        </Text>
                    </Flex>
                    <Link href={"#"} style={{color:"#0D5292",fontSize:"16px"}}>
                        Edit Billing Address
                    </Link>

                </Box>
                <Box  w={{base:"100%",md:"45%"}}>
                    <Text fontSize={"22px"} mb={"20px"} fontWeight={"600"} >
                        Default Shipping Address
                    </Text>
                    <Flex  mb={"7px"} w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            Full Name:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            Abbas Alabura
                        </Text>
                    </Flex>
                    <Flex  mb={"7px"} w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            Company:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            Tanta Innovatives
                        </Text>
                    </Flex>
                    <Flex  mb={"7px"}  w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            Address:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            23 Wall Street, Manhattan‎, NYC
                        </Text>
                    </Flex>
                    <Flex  mb={"7px"}  w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            City/Town:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            Manhattan, NYC, 10005
                        </Text>
                    </Flex>
                    <Flex  mb={"7px"}  w={"100%"}  alignItems={"center"} >
                        <Text fontSize={"17px"} fontWeight={"600"}  w={"100%"} maxW={"100px"}>
                            Phone:
                        </Text>
                        <Text fontSize={"20px"} fontWeight={"400"} >
                            +1 7125810529
                        </Text>
                    </Flex>
                    <Link href={"#"} style={{color:"#0D5292",fontSize:"16px"}}>
                        Edit Billing Address
                    </Link>

                </Box>
            </Flex>

            <Text fontSize={"29px"} mt={"20px"}  mb={"20px"} borderBottom={"2px solid #D9D9D9"} pb={"10px"}>
                Additional Address Entries
            </Text>

            <Text fontSize={{base:"16px", md:"20px"}}>
                You have no other address entries in your address book
            </Text>

            <Button color={"white"} mt={"30px"} bg={"black"} borderRadius={"0"} p={"10px 30px"}>
                ADD NEW ADDRESS
            </Button>

        </Box>
    )
}

export default AddressBookDetails;
