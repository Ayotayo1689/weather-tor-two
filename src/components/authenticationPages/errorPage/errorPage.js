import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function ErrorPage() {
	return (
		<Box position={"relative"}>
			<Box
				bg={"#F8F7FA"}
				height={"100vw"}
				width={"100%"}
				display={{ base: "none", md: "none", lg: "flex" }}
			></Box>
			<Box
				backgroundImage="url('/assets/authenticationPages/Shape.png')"
				height={"30.5rem"}
				width={"100%"}
				position={"absolute"}
				backgroundRepeat={"no-repeat"}
				backgroundSize={"100%"}
				top={"64%"}
				zIndex={"1"}
				display={{ base: "none", md: "none", lg: "flex" }}
			></Box>
			{/*================mobile image=====*/}
			<Box
				justifyContent={"center"}
				mt={"15rem"}
				position="relative"
				display={{ base: "flex", md: "flex", lg: "none" }}
			>
				<Image
					src={"/assets/authenticationPages/error.png"}
					alt="tanta logo"
					width={100}
					height={100}
				/>
			</Box>
			<Box
				width="100%"
				textAlign="center"
				top={{ base: "5rem", md: "15rem", lg: "15rem" }}
				position={{ base: "relative", md: "absolute", lg: "absolute" }}
			>
				<Text color={" #56585A"} fontSize={"32px"} fontWeight={"600"}>
					Page Not Found
				</Text>
				<Text color={"#808587"} fontSize={"15px"} fontWeight={"400"}>
					Oops! The requested URL was not found
				</Text>
				<Button
					mt={{ base: "3rem", md: "3rem", lg: "1rem" }}
					width={{ base: "20rem", md: "25rem", lg: "10.8rem" }}
					height={"2.375rem"}
					bg={" linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%)"}
					color={"white"}
					as={Link}
					href={"/"}
				>
					Back To Home
				</Button>

				<Box
					justifyContent={"center"}
					mt={{ base: "2rem", md: "10rem", lg: "10rem" }}
					position="relative"
					zIndex="2"
					display={{ base: "none", md: "none", lg: "flex" }}
				>
					<Image
						src={"/assets/authenticationPages/error.png"}
						alt="tanta logo"
						width={200}
						height={500}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default ErrorPage;
