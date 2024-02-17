import React from 'react'
import styled from "styled-components";
import Image from "next/image";
import {Flex, Progress} from "@chakra-ui/react";
import {BsCart3} from "react-icons/bs";
import {FaRegStar} from "react-icons/fa";

const MobileProduct = ({ name, img, reviews, price }) => {
    return (
        <>
            <ProductCard>
                <ProductImg>
                    <Image src={img} alt={name} />
                </ProductImg>

                <div>
                    {/* ====== item name and reviews ====== */}
                    <div className={'reviews'}>
                        <FaRegStar/>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        ( {reviews} reviews )
                    </div>
                    <h2 className={'name'}>{name}</h2>

                    {/* ====== items price ====== */}
                    <Flex justifyContent={'center'} alignItems={'center'} my={'.5rem'}>
                        <h3 className={'price'}>{price}</h3>
                    </Flex>
                </div>
            </ProductCard>
        </>
    )
}

export default MobileProduct

const ProductCard = styled.div`
  width: 100%;
  //height: 33.07781rem;
  border: 0.274px solid #480130;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  div {
    text-align: start;
    //border: 0.274px solid #480130;
  }

  .price {
    text-align: center;
    color: #343330;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
  }

  .name {
    margin: .5rem 0;

    color: #DB0090;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }

  .reviews {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #7A7676;
    font-size: 0.748rem;
    font-weight: 400;
    line-height: normal;

    margin-top: .6rem;
    margin-right: .5rem;

    svg {
      color: #7A7676;
      font-size: 0.7525rem;
      margin-right: .2rem;
    }
  }
`;

const ProductImg = styled.div`
  width: 100%;
  height: 19rem;

  border-bottom: 0.274px solid #480130;

  img {
    width: 100%;
    height: 100%;
  }
`;