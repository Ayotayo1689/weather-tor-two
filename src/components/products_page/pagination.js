import React from 'react'
import {Button, Flex} from "@chakra-ui/react";
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";

const PaginationBtn = () => {
    return (
        <>
            <Flex justifyContent={'center'} alignItem={'center'} gap={'.49rem'} mt={'2rem'} display={{ base: 'none', md: 'none', lg: 'flex'}}>
                <Button rightIcon={<RiArrowLeftSLine />} border={'0.274px solid #480130'} padding={'1rem'} bg={'transparent'} />
                <Button  variant='solid' colorScheme='pink' padding={'1rem'}> 1 </Button>
                <Button  border={'0.274px solid #480130'} padding={'1rem'} bg={'transparent'}> 2 </Button>
                <Button  border={'0.274px solid #480130'} padding={'1rem'} bg='transparent'> 3 </Button>
                <Button rightIcon={<RiArrowRightSLine />} border={'0.274px solid #480130'} padding={'1rem'} bg={'transparent'} />
            </Flex>
        </>
    )
}

export default PaginationBtn;