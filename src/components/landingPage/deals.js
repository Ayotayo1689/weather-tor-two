import React from 'react'
import Image from "next/image";
import {Box, createStandaloneToast, Flex, Progress} from "@chakra-ui/react";
import {FaRegStar} from "react-icons/fa";
import {BsBag, BsCart3} from "react-icons/bs";
import styled from "styled-components";
import {MdOutlineAlarm} from "react-icons/md";
import {addToCart} from "../../features/cart/cartSlice";
import {useDispatch} from "react-redux";

const Deals = ({title, img, available, sold, price, discount, name, reviews, text, product }) => {
    const dispatch = useDispatch();
    const { toast } = createStandaloneToast();

    return (
        <>
            <Wrapper>
                <Flex
                    p={'.8rem'}
                    gap={'1rem'}
                    justifyContent={'center'}
                    alignItems={'start'}
                >
                    <Box>
                        <ImageBox>
                            <Image src={img} alt={title} height={210}/>
                            <p>-13%</p>
                        </ImageBox>
                        {/* ====== sold & available items ====== */}
                        <Progress colorScheme='green' size='sm' h={'6px'} value={60} />
                        <Flex justifyContent={'space-between'} alignItems={'center'}  my={'1rem'} fontSize={'14px'}>
                            <div>Available: <span className={'available'}>{available}</span></div>
                            <div>Sold: <span className={'sold'}>{sold}</span></div>
                        </Flex>

                    </Box>
                    <Box>
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
                        <Flex justifyContent={'start'} alignItems={'center'} my={'.9rem'}>
                            <h3 className={'discount'}>{discount}</h3>
                            <h3 className={'price'}>{price}</h3>
                        </Flex>

                        <hr />

                        <p className={'description'}>{text}</p>

                        <ActionButtons>
                            <button type={'button'} className={'add'} style={{ background: '#F3F2F2', color: '#000', padding: '5px' }}
                                    onClick={() => {

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
                            }
                            }
                            >
                                <BsCart3 /> ADD TO CART
                            </button>
                            <button type={'button'} className={'buy'} style={{ background: '#DB0090', color: '#fff', padding: '5px' }}

                                    onClick={() => {

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
                                    }
                                    }
                            >
                                <BsBag /> BUY NOW
                            </button>
                        </ActionButtons>
                    </Box>
                </Flex>

                <Flex
                    fontSize={'14px'}
                    p={'.6rem 1rem'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    borderTop={'0.193px solid  #480130'}
                >
                    <span className={'hurry'}>
                        <MdOutlineAlarm />
                        <span style={{ color: 'green' }}> Hurry Up! </span>
                    </span>
                    <div className={'hurry'}>Ends In:
                        <span className={'deadline'}>19d: 23h: 30m: 05s</span>
                    </div>
                </Flex>
            </Wrapper>
        </>
    )
}

export default Deals;

const Wrapper = styled.div`
  width: 100%;
  border: 0.193px solid  #480130;
  background: #FFF;
  margin-top: 2rem;
  box-shadow: 4px 7px 2px -3px rgba(43, 0, 0, .6);
  text-align: start;

  .price {
    color: green;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
  }

  .name {
    color: var(--w-42-dark, #480130);
    font-size: 20.775px;
    font-weight: 400;
    line-height: normal;

    margin: .5rem 0;
  }
  .discount {
    color: #ABABAB;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    text-decoration: line-through;

    margin-right: 15px;
  }

  .available {
    color: green;
    font-weight: 400;
    line-height: normal;
  }

  .sold {
    color: #F00;
  }

  .description {
    color: var(--w-42-dark, #480130);
    font-size: 10.284px;
    font-weight: 400;
    line-height: normal;
    
    margin: 1rem 0;
  }
  
  .deadline {
    margin-left: .5rem;
    padding: 5.981px 28.745px;
    background: var(--ascent, #FE83C6);
  }

  .reviews {
    display: flex;
    justify-content: start;
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
  
  .hurry {
    display: flex;
    justify-content: start;
    align-items: center;
    
    gap: .4rem;
    
    svg {
      rotate: -60deg;
    }
  }
`;

const ImageBox = styled.div`
  position: relative;
  
  img {
    height: 180px;
    margin-bottom: 1rem;
  }
  p {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
    font-size: 9px;
    background: #DB0090;
    color: #fff;
    padding: 5px;
    width: 35px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: .6rem;

  font-size: 14px;

  button {
    cursor: pointer;

    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .buy {
      background: #DB0090;
      color: #fff;
    }
    .add {
      background: #F3F2F2;
      color: #000;
    }
    svg {
      font-size: 16px;
      margin-right: 10px;
    }
  }
`;