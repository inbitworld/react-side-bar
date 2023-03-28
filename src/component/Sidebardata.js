import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import boqicon from	"../assets/noun-check-list-4313882@2x.png"
import producticon from "../assets/noun-products-5438748@2x.png"
import uploadicon from "../assets/noun-upload-5597845@2x.png"
import kitchenicon from "../assets/noun-menu-2199019@2x.png" 
import customerdetailicon from "../assets/noun-details-1861915 (1)@2x.png"

export const SidebarData = [
{
	title: "Boq",
	path: "/boq",
	iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    icon:boqicon,

	subNav: [
	{
		title: "Create Boq",
		path: "/boq/create-boq",
		
	},
	{
		title: "All Boq List",
		path: "/boq/boq-list",
		
	},
	],
},
{
	title: "Product",
	path: "/product",
	iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
	icon:producticon,
	
	

	subNav: [
	{
		title: "Product List",
		path: "/product/product-list",
		
		
	},
	{
		title: "Product Request",
		path: "/product/product-request",
		
	},
	{
		title: "Invalid Products",
		path: "/services/services3",
		
	},
	],
},
{
	title: "File Upload",
	path: "/file-upload",
	iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
	icon:uploadicon,
    subNav: [
        {
            title: "IVM Upload",
            path: "/file-upload/ivm-upload",
            
            
        },
        {
            title: "Max upload",
            path: "/file-upload/max-upload"
            
        },
        {
            title: "GLTF Upload",
            path: "/file-upload/gltf-upload"
            
        },
        ],


	
},
{
	title: "Kitchen",
	path: "/kitchen",
	iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
	icon:kitchenicon,
	

	subNav: [
	{
		title: "Kitchen Quotes",
		path: "/kitchen/kitchen-quotes",
		
	},
	
	],
},
{
	title: "Customer Page",
	path: "/customer",
	iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
	icon:customerdetailicon,
    subNav: [
        {
            title: "Customer Detail",
            path: "/customer/customer-detail",
        
        },
        
        ],

},
];
