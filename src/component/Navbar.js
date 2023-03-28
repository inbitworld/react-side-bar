import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

import { SidebarData } from './Sidebardata';
import styled from 'styled-components';
import Submenu from './Submenu';
import dashboardicon from "../assets/noun-dashboard-1081621@2x.png"
import Loginbar from './Loginbar';
import "./navbar.css"

const SidebarNav = styled.nav`
background: #303c54;

height: 100vh;
display: flex;
justify-content: center;

top: 0;
width: ${({ sidebar }) => (sidebar ? '15vw' : '5vw')};
transition: ${({ sidebar }) => (sidebar ? '1000ms' : '1000ms')};
`;
const Nav = styled.div`
width:100%;
height:7%;
background: white;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled.div`
font-size: 2rem;
display: flex;
justify-content: space-around;
align-items: center;

`;

const SidebarWrap = styled.div`
width: 100%;
`;


function Navbar({ children }) {
    const [iscross, setIscross] = useState(false)
    const [sidebar, setSidebar] = useState(true)
    const [subnav, setSubnav] = useState(false);



    const showSubnav = () => setSubnav(!subnav);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const toggleClass = () => {
        setIscross(!iscross)
    }



    return (
        <div className='flex'>
            <IconContext.Provider value={{ color: '#fff' }}>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon >
                            <NavLink to="/">
                                <div className='flex flex-col items-center mb-6 mt-7 '>
                                    <p className={sidebar ? 'text-gray-200 text-[2.23rem] leading-8 duration-500' : "text-gray-200 text-[1.2rem] leading-4 duration-500"}>Siloho</p>
                                    <p className={sidebar ? 'text-white text-[.6rem] duration-500' : 'text-white text-[.35rem] duration-500 '}>Simply Lovable Home</p>
                                </div>
                            </NavLink>
                            {/* <AiIcons.AiOutlineClose className='w-6' onClick={showSidebar} /> */}
                        </NavIcon>
                        <NavLink to="/">
                            {sidebar?
                            <div className='text-white text-xl flex pl-[4%] h-12 bg-[#46546c] items-center' >
                            <div>
                                <img className='w-2/3' alt='icon' src={dashboardicon} />
                            </div>
                            <div className='text-lg'>
                                Dashboard
                            </div>
                        </div>
                            :
                            <div className='flex justify-center duration-500'>
                                <img className='w-1/3' alt='icon' src={dashboardicon} />
                            </div>
                            }

                        </NavLink>
                        <p className={sidebar?' uppercase text-white flex justify-center h-8 mt-3 mb-2 duration-500':"uppercase text-[.6rem] duration-500 text-white flex justify-center h-8 mt-3 mb-2"}>Components</p>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} sidebar={sidebar} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
            <main style={{ width: (sidebar ? '85vw' : '95vw'), transition: (sidebar ? '1000ms' : '1000ms') }} className='  '>
                <Nav className='shadow-[inset_1px_1px_8px_rgba(0,0,0,0.2)]'>
                    <NavIcon to='#'>

                        <FaIcons.FaBars className='ml-8 barcolor' onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <div className='h-[93%] '>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Navbar