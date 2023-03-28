import React, {useState} from 'react'
import styled from 'styled-components';
import "./navbar.css"

function Loginbar() {
    const [iscross, setIscross] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    const showsidebar = () => {
        setSidebar(!sidebar)
    }

    const toggleClass = () => {
        setIscross(!iscross)
    }

    

  return (
    <nav className=' h-[4rem] flex justify-center items-center bg-slate-600'>
        <div className='w-[98%] flex justify-between'>
        <div>
            <div id="nav-icon3" onClick={toggleClass} className={iscross? "open":null}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
        </div>
        <div></div>
        </div>
    </nav>
  )
}

export default Loginbar