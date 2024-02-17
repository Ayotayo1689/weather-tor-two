import React, {useState} from "react";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Link, Text} from "@chakra-ui/react";
import {TbMathGreater} from "react-icons/tb";
import {BsArrowLeft} from "react-icons/bs";
import MainHeading from "../landingPage/heading";
import {MyCartData} from "./data"
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import NoSSR from "../../utils/NoSSR";
import AmountButtons from "./amountButton";
import {removeCartItem} from "../../features/cart/cartSlice";
const MyCart = () => {
    const dispatch = useDispatch();

    const [counts, setCounts] = useState(MyCartData.map(() => 1));
    // const [cartItems, setCartItems] = useState(MyCartData);
    // console.log(cartItems)
    const cartItems = useSelector((state) => state.cart.cart);




    // const handleIncrease = (index) => {
    //     // console.log(cartItems[index].id)
    //     dispatch(toggleCartItemAmount({ cartItems[index].id , value: "inc" }));
    // };

    const handleDelete = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };


    return(
        <Box>
            <MainHeading />
            <Breadcrumb
                display={"flex"}
                spacing="2px"
                ml={"5rem"}
                separator={
                    <TbMathGreater fontSize={"1rem"} />
                }
            >
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} href={"/"} fontSize={"lg"} textDecoration={"none"}>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} href={"/"} fontSize={"lg"} textDecoration={"none"}>
                        Shopping Cart
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Box borderBottom={"2px solid #A7016E"} my={"2rem"}></Box>
            <Container maxWidth={"7xl"}>
                <Button
                    as={Link} href={"/"}
                    textDecoration={"none"}
                    gap={"1"}
                    border={"1px solid #DB0090"}
                    bg={"transparent"}
                    color={"#DB0090"}
                >
                    <BsArrowLeft/>
                    Return to Shopping
                </Button>
                <Box maxW={"1000px"} m={"0 auto"} >
                    <Box my={"2rem"} ml={"2rem"} alignItems={"center"}>
                        <Text fontSize={"4xl"} fontWeight={"lg"}>My Cart</Text>
                        <Box borderBottom={"3px solid #DB0090"} w={"5rem"}></Box>
                    </Box>
                    <NoSSR>
                       <Box
                           boxShadow={" rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"}>
                           {
                               cartItems && cartItems.length > 0 ? <>

                                       {cartItems && cartItems.map((item, index) => {
                                           return(
                                               <Flex key={index}  borderRadius={"11px"}

                                                     w={"80%"}
                                                     m={"0 auto"}
                                                     boxShadow={" rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"} p={"10px 20px 10px 10px"}
                                                     justifyContent={"space-between"}
                                                     alignItems={"center"}
                                                   // textAlign={"center"}
                                                     my={"1rem"}
                                               >
                                                   <Image src={item.product.img} alt={"product"} width={120} height={50}/>
                                                   <Box>
                                                       <Text
                                                           fontWeight={"700"} fontSize={"20px"}
                                                       >
                                                           {item.product.name}
                                                       </Text>
                                                       <Text
                                                           color={"#DB0090"} fontWeight={"400"} fontSize={"14px"}
                                                       >
                                                           {item.product.description}
                                                       </Text>
                                                       <Text color={"#343330"} fontWeight={"400"} fontSize={"14px"}>{item.size}</Text>
                                                   </Box>
                                                  <AmountButtons amount={item.quantity} id={item.product.id}/>                                                   <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                                                       <Text>&#8358; {item.quantity  * item.product.price}</Text>
                                                       <Button
                                                           onClick={() => {
                                                               dispatch(removeCartItem(item.product.id));
                                                           }}
                                                           bg={"transparent"}
                                                           color={"red"}
                                                       >
                                                           Remove Item
                                                       </Button>
                                                   </Flex>
                                               </Flex>
                                           )
                                       })}


                                   <Box w={"70%"} m={"30px auto"}>
                                       <Button fontSize={"17px"} mb={"30px"} fontWeight={"500"} color={"white"} bg={"#DB0090"} w={"100%"} borderRadius={"0"}>Proceed to checkout</Button>
                                   </Box>
                               </>  :
                                   <Flex minH={"300px"} justifyContent={"center"}
                                        alignItems={"center"} fontWeight={"600"} fontSize={"40px"}>
                                       Your Cart Is Empty
                                   </Flex>
                           }
                       </Box>
                               </NoSSR>


                </Box>
            </Container>
        </Box>
    )
}
export default MyCart;