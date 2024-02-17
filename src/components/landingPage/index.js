import {Box, Container, Flex, Grid, Text, useTheme} from "@chakra-ui/react";
import MainHeading from "./heading";
import React from "react";
import Image from "next/image";
import {heroImg, mainA, mainB, mainC, sideImgA, sideImgB, sideImgC} from "../../../public/assets/landingPage";
import Categories from "../products_page/categories";
import Featured from "../products_page/featured";
import Offers from "./offers";
import {landingProducts, mainCategories, offers, deals } from "./data";
import MainCategories from "./categories";
import LandingProduct from "./product";
import styled from "styled-components";
import {MdKeyboardArrowRight} from "react-icons/md";
import Deals from "./deals";
import {useSelector} from "react-redux";

const LandingPage = () => {

	const cartItems = useSelector((state) => state.cart.cart);

	return (
		<Main>
			<MainHeading />
			<Container maxW={"7xl"} px={{ lg: "5rem", sm:"2rem", base: "1rem"}}>
				<Flex justifyContent={'start'} alignItem={'center'} w={'100%'} gap={'2rem'}>
					{/* ======= left-side menu ======= */}
					<Box w={'19rem'} display={{ base: 'none', md: 'none', lg: 'block' }}>
						<Categories categories={'hello Categories '} />
						<Image src={sideImgA} alt={'30% Off'} style={{ marginBottom: '2rem' }}/>
						{offers.map((item, index) => (
							<Offers key={index} img={item.img} title={item.title} text={item.text} />
						))}
						<Featured productType={'Latest Products'}/>
						<Image src={sideImgB} alt={'30% Off'} style={{ marginBottom: '2rem' }}/>
						<Featured productType={'Top Rated'}/>
						<Image src={sideImgC} alt={'30% Off'} style={{ marginBottom: '2rem' }}/>
					</Box>

					{/* -------- ----- ======= right-side menu ======= -------- ------- */}
					<Box pb={'2rem'}>
						<Box display={{ base: 'none', lg: 'block' }}>
							<Image src={heroImg} alt={'hero img'} />
						</Box>

						{/* ========= product categories section ========== */}
						<Box my={'3rem'}>
							<Text
								fontSize={'13.358px'}
								fontWeight={'400'}
								lineHeight={'normal'}
								letterSpacing={'.9px'}
								textAlign={'start'}
								pb={'.4rem'}
							>CATEGORIES</Text>
							<Box
								width={'90px'}
								height={'2.26px'} bg={'#A7016E'}
							/>
							<Flex gap={'1rem'} justifyContent={'start'} overflowX={'scroll'} my={'1rem'}>
								{mainCategories.map((item, index) => (
									<MainCategories key={index} img={item.img} title={item.title} />
								))}
							</Flex>
						</Box>


						{/* ============= deals of day section ========== */}
						<Box my={'3rem'}>
							<Section>
								<Text
									fontSize={'13.358px'}
									fontWeight={'400'}
									lineHeight={'normal'}
									letterSpacing={'.9px'}
									pb={'.6rem'}
									borderBottom={'2px solid #A7016E'}
								>DEALS OF THE DAY</Text>
								<Flex
									fontSize={'13.358px'}
									fontWeight={'400'}
									lineHeight={'normal'}
									pb={'.6rem'}
									borderBottom={'2px solid #A7016E'}
								>View all deals  <MdKeyboardArrowRight /></Flex>
							</Section>

							<Flex>
								{deals.map((item, index) => (
									<Deals key={index} img={item.img} product={item} title={item.title} text={item.text} reviews={item.reviews} name={item.name} price={item.price} available={item.available} discount={item.discount} sold={item.sold} />
								))}
							</Flex>
						</Box>

						{/* ========= sales banner categories ========== */}
						<Flex w={'100%'} my={'3rem'} flexDir={{ base: 'column', lg: 'row' }} gap={'.5rem'}>
							<Box w={'75%'}>
								<Image src={mainA} alt={'10% Off'} height={300} />
							</Box>
							<Image src={mainB} alt={'Best selling'} height={270} />
						</Flex>

						{/* ========= new arrivals categories ========== */}
						<Box my={'3rem'}>
							<Flex
								justify={'center'}
								align={'center'}
								flexDir={'column'}
							>
								<Text
									fontSize={'20.358px'}
									fontWeight={'400'}
									lineHeight={'normal'}
									mb={'.8rem'}
								>NEW ARRIVALS</Text>


								<Box
									width={'97.32px'}
									height={'2.726px'} bg={'#A7016E'}
								/>

								<Grid
									my={'3rem'}
									gap={'.6rem'}
									gridTemplateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)', base : 'repeat(1, 1fr)' }}>
									{landingProducts.map((item, index) => (
										<LandingProduct img={item.img}
												 name={item.name}
												 price={item.price}
												 reviews={item.reviews}
												 id={item.id}
												 key={index}
														product={item}

										/>
									))}
								</Grid>
							</Flex>
						</Box>

						{/* ========= product categories ========== */}
						<Box display={{ base: 'none', lg: 'block' }}>
							<Image src={mainC} alt={'collections'} />
						</Box>
					</Box>
				</Flex>
			</Container>
		</Main>
	);
};

export default LandingPage;

const Main = styled.main`
	.swiper {
		display: flex;
	}
`;

const Section = styled.div`
	display: flex;	
	justify-content: space-between;
	align-items: center;
	
	svg {
		font-size: 18px;
	}
	a {
		text-decoration: none;
		color: #343330;
		font-size: 11.851px;
		font-weight: 400;
		line-height: normal;
		padding-bottom: .8rem;

		:hover {
			text-decoration: 2px underline #A7016E;
		}
	}
`;