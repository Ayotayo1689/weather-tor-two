import React, {useState} from 'react'
import {MdKeyboardArrowRight} from "react-icons/md";
import {Flex, Box, Heading, Progress, Text} from "@chakra-ui/react";
import Link from "next/link";
import {categoriesHeading} from "./data";
import menu from "../../../public/assets/productDetails/menu.svg"
import Image from "next/image";
import {
    bedIcon,
    chairIcon,
    curtainIcon,
    deals,
    matIcon,
    matressIcon,
    towelIcon
} from "../../../public/assets/landingPage";

const Categories = ({categories}) => {
    const [activeLink, setActiveLink] = useState({});

    return (
        <Box mb={'2rem'} minW={"250px"}>
            {/*<Progress value={30} size='xs' colorScheme='pink' />*/}

            <Box mt={'1.5rem'} border={'0.274px solid #480130'}
                 borderBottom={'0px'}
            >
                <Flex
                    alignItems={"center"}
                    paddingInline={".4rem"}
                    justifyContent={"space-between"}
                    bg={'#DB0090'}
                    color={'white'}
                    borderBottom={'0.274px solid #480130'}

                    p={".5rem 0px .5rem .5rem"}
                >
                    <Image src={menu} alt={"menu"}/>
                    <span

                        onClick={() => {}}
                        style={{
                            display:"flex",
                            alignItems:"center",
                            color: "white",
                            background: '',
                            fontSize: "16px",
                            fontWeight: "400",
                            cursor: "pointer",
                            width: "100%",
                            height:"20px",
                            borderLeft:"2px solid white",
                            marginLeft:"5px",
                            paddingLeft:"10px",
                        }}
                    >
                        ALL CATEGORIES
                    </span>

                    <Box transform={"rotate(90deg)"} w={"fit-content"} h={"fit-content"}>
                        <MdKeyboardArrowRight size={"2rem"} />
                    </Box>

                </Flex>

                <Box pt={"30px"}>

                    <Flex
                        paddingInline={".4rem"}
                        justifyContent={"space-between"}
                        // key={index}
                        borderTop={'0.274px solid #480130'}
                        borderBottom={'0.274px solid #480130'}
                        p={".5rem"}
                    >
                        <span
                            onClick={() => {
                                // setActiveLink({ [item.id]: true });
                            }}
                            style={{
                                // color: activeLink[item.id] ? "#000" : "",
                                fontSize: "16px",
                                fontWeight: "400",
                                cursor: "pointer",
                                width: "100%",


                            }}
                        >
                         <Flex  alignItems={'center'}>
                        <Image src={bedIcon} alt={'icon'} />
                        <Text fontSize={'0.98275rem'} fontWeight={'400'} ml={'.3rem'}>Beddings</Text>
                    </Flex>
                        </span>

                        <MdKeyboardArrowRight size={"2rem"} />
                    </Flex>


                    <Flex
                        paddingInline={".4rem"}
                        justifyContent={"space-between"}
                        // key={index}
                        borderBottom={'0.274px solid #480130'}
                        p={".5rem"}
                    >
                        <span
                            onClick={() => {
                                // setActiveLink({ [item.id]: true });
                            }}
                            style={{
                                // color: activeLink[item.id] ? "#000" : "",
                                fontSize: "16px",
                                fontWeight: "400",
                                cursor: "pointer",
                                width: "100%",


                            }}
                        >
                      <Flex   alignItems={'center'}>
                        <Image src={chairIcon} alt={'icon'} />
                        <Text fontSize={'0.98275rem'} fontWeight={'400'} ml={'.3rem'}>Furniture</Text>
                    </Flex>
                        </span>

                        <MdKeyboardArrowRight size={"2rem"} />
                    </Flex>



                    <Flex
                        paddingInline={".4rem"}
                        justifyContent={"space-between"}
                        // key={index}
                        borderBottom={'0.274px solid #480130'}
                        p={".5rem"}
                    >
                        <span
                            onClick={() => {
                                // setActiveLink({ [item.id]: true });
                            }}
                            style={{
                                // color: activeLink[item.id] ? "#000" : "",
                                fontSize: "16px",
                                fontWeight: "400",
                                cursor: "pointer",
                                width: "100%",


                            }}
                        >
                     <Flex alignItems={'center'}>
                        <Image src={matressIcon} alt={'icon'} />
                        <Text fontSize={'0.98275rem'} fontWeight={'400'} ml={'.3rem'}>Mattresses</Text>
                    </Flex>
                        </span>

                        <MdKeyboardArrowRight size={"2rem"} />
                    </Flex>


                    <Flex
                        paddingInline={".4rem"}
                        justifyContent={"space-between"}
                        // key={index}
                        borderBottom={'0.274px solid #480130'}
                        p={".5rem"}
                    >
                        <span
                            onClick={() => {
                                // setActiveLink({ [item.id]: true });
                            }}
                            style={{
                                // color: activeLink[item.id] ? "#000" : "",
                                fontSize: "16px",
                                fontWeight: "400",
                                cursor: "pointer",
                                width: "100%",


                            }}
                        >
                    <Flex  alignItems={'center'}>
                        <Image src={curtainIcon} alt={'icon'} />
                        <Text fontSize={'0.98275rem'} fontWeight={'400'} ml={'.3rem'}>Curtain & Binds</Text>
                    </Flex>
                        </span>

                        <MdKeyboardArrowRight size={"2rem"} />
                    </Flex>


                    <Flex
                        paddingInline={".4rem"}
                        justifyContent={"space-between"}
                        // key={index}
                        borderBottom={'0.274px solid #480130'}
                        p={".5rem"}
                    >
                        <span
                            onClick={() => {
                                // setActiveLink({ [item.id]: true });
                            }}
                            style={{
                                // color: activeLink[item.id] ? "#000" : "",
                                fontSize: "16px",
                                fontWeight: "400",
                                cursor: "pointer",
                                width: "100%",


                            }}
                        >
                    <Flex  alignItems={'center'}>
                        <Image src={towelIcon} alt={'icon'} />
                        <Text fontSize={'0.98275rem'} fontWeight={'400'} ml={'.3rem'}>Towel</Text>
                    </Flex>
                        </span>

                        <MdKeyboardArrowRight size={"2rem"} />
                    </Flex>


                    <Flex
                        paddingInline={".4rem"}
                        justifyContent={"space-between"}
                        // key={index}
                        borderBottom={'0.274px solid #480130'}
                        p={".5rem"}
                    >
                        <span
                            onClick={() => {
                                // setActiveLink({ [item.id]: true });
                            }}
                            style={{
                                // color: activeLink[item.id] ? "#000" : "",
                                fontSize: "16px",
                                fontWeight: "400",
                                cursor: "pointer",
                                width: "100%",


                            }}
                        >
                    <Flex  alignItems={'center'}>
                        <Image src={matIcon} alt={'icon'} />
                        <Text fontSize={'0.98275rem'} fontWeight={'400'} ml={'.3rem'}>Branding</Text>
                    </Flex>
                        </span>

                        <MdKeyboardArrowRight size={"2rem"} />
                    </Flex>


                    <Flex
                        paddingInline={".4rem"}
                        justifyContent={"space-between"}
                        // key={index}
                        borderBottom={'0.274px solid #480130'}
                        p={".5rem"}
                    >
                        <span
                            onClick={() => {
                                // setActiveLink({ [item.id]: true });
                            }}
                            style={{
                                // color: activeLink[item.id] ? "#000" : "",
                                fontSize: "16px",
                                fontWeight: "400",
                                cursor: "pointer",
                                width: "100%",


                            }}
                        >
                    <Flex  alignItems={'center'}>
                        <Image src={deals} alt={'icon'} />
                        <Text fontSize={'0.98275rem'} fontWeight={'400'} ml={'.3rem'}>Deals</Text>
                    </Flex>
                        </span>

                        <MdKeyboardArrowRight size={"2rem"} />
                    </Flex>





                </Box>


            </Box>

        </Box>
    )
}

export default Categories;