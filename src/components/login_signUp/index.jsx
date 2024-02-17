import React,{useState} from "react";
import {
    Box,
    Image,
    Flex,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Hide,
} from "@chakra-ui/react";
import BackGroundImg from "./backGround";
import {LoginForm} from "./login_form";
import {SignUpForm} from "./signUp_form";


const Login = () => {
    const [activeTab, setActiveTab] = useState(0);



    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    return(
        <Box>
            <Flex h={"100%"}>
                <Box bg={{base:"white",lg:"rgba(254, 131, 198, 0.15)"}}
                     w={{base:"100%", lg:"55%"}}
                     pt={"4rem"} px={{base:"1rem",lg:"3rem"}}
                     alignItems={"center"}
                >
                    <Flex justifyContent={"center"}>
                        <Image src={"/assets/login-signup/logo-small 1.png"} alt={"logo"}/>
                    </Flex>
                    <Tabs py={"2rem"} index={activeTab} onChange={handleTabChange}
                     >
                        <TabList display={"flex"}
                                 justifyContent={"space-between"}
                                 borderBottom={"0.3px solid #000"}
                                mx={"40px"}>
                            <Tab fontSize={"xl"}
                                 _selected={{
                                color: "#FE83C6", borderBottomColor:"#A7016E"
                            }}>Login </Tab>
                            <Tab fontSize={"xl"}
                                 _selected={{
                                color: "#FE83C6", borderBottomColor:"#A7016E"
                            }}>Signup</Tab>
                        </TabList>
                        <TabPanels lineHeight={"30px"}>
                            <TabPanel>
                                <LoginForm activeTab={activeTab} setActiveTab={setActiveTab}/>
                            </TabPanel>
                            <TabPanel>
                                <SignUpForm activeTab={activeTab} setActiveTab={setActiveTab}/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <Hide below={"md"} w={{base:"0", lg:"45%"}}>
                    {activeTab === 1 ? (<BackGroundImg title={<><span style={{fontWeight:"bolder", fontSize:"4rem", color:"#DB0090"}}>Comfort</span> Doesn’t Have</>}
                                                       subTitle={<>To Be <span style={{fontWeight:"bolder", fontSize:"4rem", color:"#DB0090"}}> Expensive</span></>}
                                                       img={"/assets/login-signup/loginImg.png"}/>
                    ) : (
                                        <BackGroundImg title={<>The <span style={{fontWeight:"bolder", fontSize:"4rem", color:"#DB0090"}}>Best</span> Duvet Deals</>}
                                                       subTitle={<>You Can <span style={{fontWeight:"bolder", fontSize:"4rem", color:"#DB0090"}}> Get </span></>}
                                                       img={"/assets/login-signup/loginImg.png"}/>)}
                </Hide>

            </Flex>
        </Box>
    )
};
export default Login;
