import React from 'react'
import Image from "next/image";
import styled from "styled-components";

const MainCategories = ({img, title}) => {
    return (
        <>
            <Wrapper>
                <Image src={img} alt={title} />
                <p>{title}</p>
            </Wrapper>
        </>
    )
}

export default  MainCategories;

const Wrapper = styled.div`
  width: 160px;
  border: 1px solid #ccc;
  
  img {
    width: 100%;
    height: 180px;
    border-bottom: 1px solid #ccc;
  }
  
  p {
    padding: 18px 0 ;
    text-align: center;
  }
`;