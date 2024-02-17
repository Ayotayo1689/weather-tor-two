import {Flex, useTheme, Text, Box, Input, Select} from "@chakra-ui/react";
import { Container, Wrapper } from './style'
import TopNav from "./topnav";
import BottomNav, {SearchBtn} from "./bottomnav";
import {MdOutlineMenu} from "react-icons/md";
import {BiSearch} from "react-icons/bi";
import React from "react";
import MobileNav from "./mobilenav";

const Navbar = ({ toggleSideBar }) => {
    const theme = useTheme();

    return (
        <>
            <Container>
                <Wrapper  id="#navbar" className={"show"}>
                    <TopNav />
                    <BottomNav />

                    <Box
                        bg={'#EEEDED'}
                        py={"1rem"}
                        px={"2rem"}
                        className="mobile-bottom"
                    >
                        <MobileNav toggleSideBar={toggleSideBar} />
                    </Box>
                </Wrapper>
            </Container>
        </>
    );
};

export default Navbar;
