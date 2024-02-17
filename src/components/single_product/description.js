import React from 'react'
import {
    Box,
    Flex,
    Grid,
    Heading,
    Text,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Spacer
} from "@chakra-ui/react";
import Image from "next/image";
import {measure, moreA, moreB, moreC, moreD, profileB, ruler} from "../../../public/assets/productDetails";
import {FaFacebookF, FaLinkedinIn, FaPinterestP, FaPlus, FaRegStar, FaStar, FaTwitter} from "react-icons/fa";
import styled from "styled-components";
import {HiOutlineThumbDown, HiOutlineThumbUp} from "react-icons/hi";
import {productDetails} from "../products_page/data";
import Product from "../products_page/product";
import {breakpoints} from "../../../styles/theme";

const Description = () => {
  return (
      <>
          <Flex
              justifyContent={'center'}
              alignItems={'center'} mt={'4rem'} w={'100%'}>
              <Tabs position="relative" variant="unstyled" w={'100%'}>
                  <TabList borderTop={'2px solid #ccc'} pt={'2rem'} w={'100%'} justifyContent={'center'} alignItems={'center'} display={'center'}>
                      <Tab>Description</Tab>
                      <Tab mx={'1rem'}>Reviews</Tab>
                      <Tab>More Products</Tab>
                  </TabList>
                  <TabIndicator
                      mt="-1.5px"
                      height="2px"
                      bg="pink.500"
                      borderRadius="1px"
                  />
                  <TabPanels  borderTop={'2px solid #ccc'} mt={'2rem'}>
                      {/* =========  DESCRIPTION PANEL SECTION ========*/}
                      <TabPanel px={'1rem'} py={'1.4rem'}>
                          <Flex
                              justifyContent={'start'}
                              alignItems={'start'}
                              gap={'2rem'}
                              flexDir={{ base: 'column', md: 'column', lg: 'row' }}
                          >
                              <Box w={{ base: '100%', md: '100%', lg: '45%'}}>
                                  <Heading fontSize='1.0885rem' fontWeight={'400'} textTransform={'uppercase'}>Features</Heading>
                                  <Box w={'40px'} h={'2px'} bg={'pink.500'} />
                                  
                                  <Grid gridTemplateColumns={'repeat(2, 1fr)'} mt={'1rem'}>
                                      <Image src={moreA} alt={'image'} />
                                      <Image src={moreB} alt={'image'} />
                                      <Image src={moreC} alt={'image'} />
                                      <Image src={moreD} alt={'image'} />
                                  </Grid>
                              </Box>
                              <Box w={{ base: '100%', md: '100%', lg: '45%'}}>

                                  <Heading fontSize='1.0885rem' fontWeight={'400'} textTransform={'uppercase'}>Product Details</Heading>
                                  <Box w={'100px'} h={'2px'} bg={'pink.500'} />

                                  <Text mt={'1rem'} mb={'2rem'} fontSize='1.060rem' lineHeight={'1.5rem'}>
                                      With a rich company history spanning back to 1968, Calvin Klein originally started life as a coatstore in New York City. The now iconic label, famed for their minimalist approach, offers up covetable diffusion lines CK by Calvin Klein and Calvin Klein Jeans, both of which channel the abel’s inimitable style
                                  </Text>

                                  <Heading fontSize='1.0885rem' fontWeight={'400'} textTransform={'uppercase'} >Product Size Details</Heading>
                                  <Box w={'100px'} h={'2px'} bg={'pink.500'} />

                                  <Flex mt={'1rem'} fontSize='1.060rem' justifyContent={'start'} alignItem={'center'} gap={'10px'}>
                                      <Image src={ruler} alt={'measurement'} /> Model’s height: 182.5cm/6’0
                                  </Flex>
                                  <Flex mt={'1rem'} fontSize='1.060rem' gap={'10px'}>
                                      <Image src={measure} alt={'measurement'} /> Model is wearing: Size Medium
                                  </Flex>
                              </Box>
                          </Flex>
                      </TabPanel>

                      {/* =========  REVIEW PANEL SECTION ========*/}
                      <TabPanel px={'1rem'} py={'1.4rem'}>
                          <Flex
                              justifyContent={{ base: 'center', lg: 'start' }}
                              alignItems={{ base: 'center', lg: 'start' }}
                              gap={'1.5rem'} flexDir={{ base: 'column', md: 'column', lg: 'row'}}>

                              {/* ========= REVIEW CARD SECTION ========*/}
                              <Box w={{ base: '100%', lg:'70%'}}>
                                  <Heading fontSize='1.0885rem' fontWeight={'400'} textTransform={'uppercase'}>Reviews (23)</Heading>
                                  <Box w={'40px'} h={'2px'} bg={'pink.500'} />

                                  <ReviewCards>
                                      <ReviewCard>
                                          <Flex justifyContent={'space-between'} alignItems={'start'}>
                                              <Box>
                                                  {/* ========== costumer ======= */}
                                                  <Flex justifyContent={{ base: 'space-between', lg: 'start'}}
                                                        alignItems={'center'} gap={'1rem'}
                                                        flexDir={{ base: 'column', md: 'column', lg: 'row'}}
                                                  >
                                                      <Image src={profileB} alt={'user'} />

                                                      <Box>
                                                          <Heading fontweight={'400'} fontSize={{ base: '18px', md: '20px', lg: '24px'}}>Frank Edward</Heading>
                                                          <Text fontSize={{ base: '14px', md: '15px', lg: '16px'}}>Verified Buyer</Text>
                                                      </Box>
                                                  </Flex>

                                                  {/* ========= rating ======= */}
                                                  <Flex justify={'start'} gap={'10px'} my={'1rem'}>
                                                      <FaStar/>
                                                      <FaStar />
                                                      <FaStar />
                                                      <FaStar/>
                                                      <FaRegStar/>
                                                  </Flex>

                                                  {/* ======== product name ======= */}
                                                  <Text fontSize={'1.08rem'} fontWeight={'500'} mb={'1rem'}>Towels</Text>

                                                  {/* ========= reviews ======= */}
                                                  <Text fontSize={'1rem'} fontWeight={'400'} >Soft and thick, very good material</Text>
                                              </Box>

                                              <Flex justifyContent={'space-between'} alignItems={'center'} flexDir={'column'} py={'2rem'}>
                                                  <Text fontSize={'1rem'} fontWeight={'400'} mb={'10rem'}>3 weeks ago</Text>

                                                  <Spacer />

                                                  <Box>
                                                      <Text fontSize={'1rem'} fontWeight={'400'} mb={'.9rem'}>Helpful?</Text>

                                                      <Flex justify={'center'} align={'center'} gap={'2rem'}>
                                                          <HiOutlineThumbUp />
                                                          <HiOutlineThumbDown />
                                                      </Flex>
                                                  </Box>
                                              </Flex>
                                          </Flex>
                                      </ReviewCard>
                                  </ReviewCards>
                              </Box>

                              <Box bg={'#000'} w={'1px'}
                                   h={'700px'} alignSelf={'center'}
                                   display={{ base: 'none', md: 'none', lg: 'block'}}/>

                              {/* =========  ADD REVIEW SECTION ========*/}
                              <Flex px={'1.5rem'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
                                  <Heading fontSize={'28px'}>4.5</Heading>
                                  <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'} my={'1rem'}>
                                      <FaStar/>
                                      <FaStar />
                                      <FaStar />
                                      <FaStar/>
                                      <FaRegStar/>

                                      <Text
                                          fontSize={'0.83rem'}
                                          color={'pink.500'}
                                          fontWeight={'500'}
                                          textAlign={{ base: 'center'}}>( 34 ratings )</Text>
                                  </Flex>

                                  <ActionButtons>
                                      <buttton type={'button'} className={'add'}>
                                          <FaPlus /> ADD REVIEW
                                      </buttton>
                                  </ActionButtons>
                              </Flex>

                          </Flex>
                      </TabPanel>

                      {/* =========  MORE PRODUCT PANEL SECTION ========*/}
                      <TabPanel px={'4rem'} py={'1.4rem'}>
                          <Grid
                              gridTemplateColumns={{
                                  lg: 'repeat(3, 1fr)',
                                  md: 'repeat(2, 1fr)',
                                  sm: 'repeat(1fr, 1fr, 1fr)'
                              }}
                              gap={'1.5rem'}>
                              {productDetails.slice(0, 3).map((item, index) => (
                                  <Product id={index} img={item.img} sold={item.sold} available={item.available} discount={item.discount} name={item.name} price={item.price} reviews={item.reviews} key={index} />
                              ))}
                          </Grid>
                      </TabPanel>
                  </TabPanels>
              </Tabs>
          </Flex>

          <SocialMedia>
              <div>
                  <FaFacebookF />
              </div>
              <div>
                  <FaTwitter />
              </div>
              <div>
                  <FaLinkedinIn />
              </div>
              <div>
                  <FaPinterestP />
              </div>
          </SocialMedia>
      </>
  )
}

export default Description;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  
  padding: 2rem 0;
  font-size: 20px;
  color: #000;

  div {
    margin: 0 10px;
    padding: .6rem;
    
    border-radius: 50%;
    border: 1px solid #ccc;
  }
`;

const ActionButtons = styled.div`
  margin-bottom: 2rem;
  .add {
      padding: .9rem 1.4rem;
      
      background-color: #000;
      color: #fff;
    
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.45469rem;
      flex-direction: row;
    
      svg {
        font-size: 1.16875rem;
        margin-right: 10px;
      }
  }
    
`;

const ReviewCards = styled.div`
    padding: 2rem;
`;

const ReviewCard = styled.div`
    width: 53.3125rem;
    height: 22.5625rem;
    border-radius: 0.625rem;
    background: #F8F8F8;
  
    padding: 1.5rem 2.5rem;
    margin-bottom: 1.5rem;
  
  ${breakpoints.sm}{
    width: 300px;
  }
`;