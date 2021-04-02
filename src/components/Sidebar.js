import React from 'react'

import { VscGithub ,} from "react-icons/vsc";
import {FiLinkedin} from "react-icons/fi";
import {SiCodeforces, SiCodechef ,SiHackerrank , SiHackerearth} from "react-icons/si";
function Sidebar(){

    return (
        <div className = 'sidebar'>
            <a href={"https://github.com/Nit1n"} className="icon" target="_blank" rel="noopener noreferrer"><VscGithub size="1.5em" color="white" /></a>
            <a href={'https://www.linkedin.com/in/navneet-kumar-052311197/'} className="icon" target="_blank" rel="noopener noreferrer"><FiLinkedin size="1.5em" color="white" /></a>
            <a href='https://codeforces.com/profile/Nit1n' className="icon" target="_blank" rel="noopener noreferrer"><SiCodeforces size="1.5em" color="white" /></a>
            <a href = 'https://www.codechef.com/users/nit1n' className="icon" target="_blank" rel="noopener noreferrer"><SiCodechef size="1.5em" color="white"/></a>
            <a href = 'https://www.hackerrank.com/thanit3111' className="icon" target="_blank" rel="noopener noreferrer"><SiHackerrank size="1.5em" color="white"/></a>
            <a href = 'https://www.hackerearth.com/@navneet148' className="icon" target="_blank" rel="noopener noreferrer"><SiHackerearth size="1.5em" color="white"/></a>
            
        </div>
    )
}

export default Sidebar ; 