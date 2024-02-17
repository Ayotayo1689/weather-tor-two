import React, {useState} from "react";
import {
    Box,
    Flex,
    Heading,
    Progress,
    Tabs
} from "@chakra-ui/react";
import {sideBarData} from "./data";
import {MdKeyboardArrowRight} from "react-icons/md";

const Content = () => {
    const [activeLink, setActiveLink] = useState(0);
    const handleTabClick = (index) => {
        setActiveLink(index);
    };
    return (
        <>
            <Flex
                flexDir="column"
                boxShadow={{base:"",lg:"lg"}}
                height={"fit-content"}
                top={"10rem"}
                pb={"1rem"}
                borderBottom={"lg"}
                width={{base: "100%", lg: "25%"}}
                position={{base: "", lg: "sticky"}}
                overflowY="scroll"
            >
                <Heading color='#000'
                         fontSize='1.09363rem'
                         fontWeight='400'
                         textTransform={'uppercase'}
                         lineHeight='normal'
                         mb={{ base:"1rem",lg:"2.5rem"}}>
                    Profile Settings
                </Heading>
                <Progress value={30} size='xs' colorScheme='pink' />
                <Tabs mt={'1.5rem'} border={'0.274px solid #480130'}
                     borderBottom={'0px'}
                >
                    {sideBarData.map((item, index) => {
                        return (
                            <Flex
                                paddingInline={".4rem"}
                                justifyContent={"space-between"}
                                key={index}
                                p={".5rem"}
                                cursor={"pointer"}
                                borderBottom={'0.274px solid #480130'}
                                onClick={() => handleTabClick(index)}
                                style={{
                                    background: activeLink[index.title] ? "#DB0090" : "",
                                    color: activeLink[index.title] ? "white" : "#480130",
                                    fontSize: "20px",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    width: "100%",

                                }}
                            >
                                <Flex gap={"5"} alignItems={"center"}
                                      className={activeLink === index ? "active" : ""}
                                >
                                    {item.icon}
                                    <Box>
                                        {item.title}
                                    </Box>
                                </Flex>
                                <MdKeyboardArrowRight size={"2rem"}/>
                            </Flex>
                        );
                    })}
                </Tabs>
            </Flex>
            <Box w={{ base: "100%", lg: "70%" }} mt={{base:"1rem", lg:""}}>
                {sideBarData[activeLink]?.name}
            </Box>
        </>
    )
};

export default Content; 