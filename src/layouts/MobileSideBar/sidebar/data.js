import {
	MdInfoOutline,
	MdKeyboardArrowRight,
	MdLineWeight,
	MdOutlineHome,
	MdOutlineKeyboardArrowDown,
	MdOutlineMenuBook,
	MdOutlineMiscellaneousServices,
	MdOutlinePersonPin,
	MdWorkHistory,
} from "react-icons/md";
import { BsJournalBookmarkFill, BsPencilSquare } from "react-icons/bs";
import { FaBlogger, FaIndustry } from "react-icons/fa";

export const ServicesData = [
	{
		title: "Software Development",
		path: "/",
		icon: <MdOutlineHome />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"1.4rem"} />,
	},

	{
		title: "Application Services",
		path: "/",
		icon: <MdInfoOutline fontSize={"1.4rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"2rem"} />,

		subNav: [
			{
				title: "About",
				path: "about",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},
			{
				title: "Careers",
				path: "careers",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},

			{
				title: "Contact Us",
				path: "contact",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},
		],
	},

	{
		title: "IT Consulting",
		path: "/it_consulting",
		icon: <MdOutlinePersonPin />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"1.4rem"} />,
	},
	{
		title: "Cyber Security",
		path: "/",
		icon: <MdOutlineMenuBook />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "Managed IT Services",
		path: "/",
		icon: <BsPencilSquare />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "UI/UX Designs",
		path: "/",
		icon: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "Infrastructural Services",
		path: "/",
		iconClosed: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "Data Analytics",
		path: "/",
	},

	{
		title: "Testing and QA",
		path: "/services/testing_and_qa",
	},

	{
		title: "IOT Services",
		path: "/services/iot_services",
	},
];
export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <MdOutlineHome fontSize={"1.6rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "Bedding",
		path: "/",
		icon: <MdWorkHistory fontSize={"1.6rem"} />,
	},
	{
		title: "Furniture",
		path: "/",
		icon: <MdOutlineMiscellaneousServices fontSize={"1.6rem"} />,
	},
	{
		title: "Mattresses",
		path: "/",
		icon: <FaIndustry fontSize={"1.6rem"} />,
	},
	{
		title: "Curtains & Binds",
		path: "/",
		icon: <MdInfoOutline fontSize={"1.6rem"} />,
	},
	{
		title: "Towels",
		path: "/caseStudies",
		icon: <BsJournalBookmarkFill fontSize={"1.6rem"} />,
	},
	{
		title: "Branding",
		path: "/",
		icon: <FaBlogger fontSize={"1.6rem"} />,
	},
	{
		title: "Interior Decoration",
		path: "/",
		icon: <FaBlogger fontSize={"1.6rem"} />,
	},
];
