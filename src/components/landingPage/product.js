import react, {useEffect} from "react";
import Image from "next/image";
import {FaRegStar} from "react-icons/fa";
import {createStandaloneToast, Flex, Progress} from "@chakra-ui/react";
import {BsCart3} from "react-icons/bs";
import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../features/cart/cartSlice";
import {getProducts} from "../../features/products/productSlice";

const LandingProduct = ({name, img, reviews, price, discount, available, sold, product}) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const { toast } = createStandaloneToast();
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
              <button type={'button'}
                      onClick={() => {
                          // console.log(product)
                          dispatch(
                              addToCart({ product })
                          );
                          toast({
                              title: "Awesome!",
                              description:
                                  `${name} has been added to your Cart list`,
                              status: "info",
                              duration: 3000,
                              isClosable: true,
                              position: "top",
                              variant: "left-accent",
                          });
                      }}
              >
                  <BsCart3 />  ADD TO CART
              </button>
          </ProductCard>

      </>
  )
}
export default LandingProduct;

const ProductCard = styled.div`
  width: 210px;
  border: 0.274px solid #480130;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  
  div {
    text-align: center;
    //border: 0.274px solid #480130;
  }
  
  .price {
    color: #14BC28;
    font-size: 18.818px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .name {
    color: #000;
    font-size: 1.33975rem;
    font-weight: 400;
    line-height: normal;
    
    margin: .5rem 0;
  }
  
  button {
    width: 100%;
    padding: 1rem 0;
    background: transparent;
    border-top: 0.274px solid #480130;
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: #000;
    font-size: 0.95856rem;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    
    
    svg {
      font-size: 1.16875rem;
      margin-right: 10px;
    }
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