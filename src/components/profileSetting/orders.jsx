import React from "react";
import {Box, Flex, Heading,} from "@chakra-ui/react";
import {AiOutlineWarning} from "react-icons/ai";


const Orders = () => {
    return (
        <Box
            w={{ base: "100%", lg: "70%" }}
            ml={{ base:"",lg:"1rem"}}>
            <Heading
                color='#000'
                fontSize={{base:"lg", lg:'2xl'}}
                fontWeight='400'
                textTransform={'uppercase'}
                lineHeight='normal'
                mb={'2.5rem'}>
                My Orders
            </Heading>
            <Flex
                bg={"#FDD5D5"}
                 w={"100%"}
                 px={"1.5rem"}
                py={"7px"}
                 borderLeft={"4px solid #CA0B0B"}
                  alignItems={"center"}
                gap={"3"}
            >
                   <AiOutlineWarning/>
                You’ve placed no orders
            </Flex>

        </Box>
    )
}

export default Orders;
