import Wrapper from "./styles";
import { FaTimes } from "react-icons/fa";
import { SidebarData } from "./sidebar/data";
import SubMenu from "./sidebar/Sidebar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import {logo} from "../../../public/assets/landingPage";

const SmallSidebar = ({ isSidebarOpen, toggleSideBar }) => {
	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
				}
			>
				<div className="content">
					<Flex justifyContent={"space-between"}>
						<Image src={logo} width={"150"} height={"50"} alt="Weather For - 2 Logo" />
						<button type="button" className="close-btn" onClick={toggleSideBar}>
							<FaTimes />
						</button>
					</Flex>

					<Box my={"1rem"}>
						<Text my={"1rem"}>Menu</Text>
						{SidebarData.map((item, index) => {
						return (
							<SubMenu
								item={item}
								key={index}
								toggleSideBar={toggleSideBar}
							/>
						);
						})}
					</Box>
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;