import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Submenu = ({ item, sidebar }) => {
  const [subnav, setSubnav] = useState(false);
  const wrapperRef = useRef(null);

  const showSubnav = () => setSubnav(!subnav);
  useEffect(() => {
    console.log("item", sidebar)
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [sidebar]);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSubnav(false);
    }
  };

  return (
    < >
      <div className='bg-[#46546c]'>
        <NavLink className={!sidebar?"border-b border-b-white":null} to={item.path} onClick={item.subNav && showSubnav} ref={wrapperRef}>
          {sidebar ?
            <div className='flex justify-between items-center ml-[5%] w-11/12 h-14 text-base   '>
              <div className='flex gap-2'>
                <div>
                  <img className='w-2/3' alt='icon' src={item.icon} />
                </div>
                <div className='text-gray-200 '>{item.title}</div>
              </div>
              <div>
                {item.subNav && subnav
                  ? item.iconOpened
                  : item.subNav
                    ? item.iconClosed
                    : null}
              </div>
            </div>
            :
            <div className='flex justify-center items-center ml-[5%] w-11/12 h-14 text-base    ' >
              <img className='w-[30%]' alt='icon' src={item.icon} />
            </div>
          }
        </NavLink>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <NavLink to={item.path} key={index}>
                <div className='flex h-10 justify-center items-center text-base shadow-[inset_1px_1px_6px_rgba(0,0,0,0.2)] bg-[#475b6e]'>
                  <span className='flex flex-col text-gray-200  '>{item.title}</span>
                </div>
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default Submenu