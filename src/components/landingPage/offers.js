import React from 'react'
import {Box, Flex} from "@chakra-ui/react";
import Image from "next/image";
import styled from "styled-components";

const Offers = ({ img, title, text }) => {
    return (
        <>
            <Wrapper>
                <Image src={img} alt={title} />

                <Box>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </Box>
            </Wrapper>
        </>
    )
}

export default Offers

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  
  padding: 15.963px 20.442px;
  margin-bottom: 1rem;
  gap: 10.823px;

  border: 0.182px solid #343330;
  
  h3 {
    color: #343330;
    font-size: 14.79px;
    font-weight: 400;
    line-height: normal;
  }
  p {
    color: #8D8787;
    font-size: 14.733px;
    font-weight: 400;
    line-height: normal;
  }
`;