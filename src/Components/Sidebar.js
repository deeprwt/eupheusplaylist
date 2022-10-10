import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./sidebar.css"

const Sidebar = ({state, toggle}) => {
	// console.log(state  + " hoi aioshdaj")
	const [hidden, setHidden] = useState(true)
	// const [hamburger, setHamnburger] = useState(window.screen > 768 ? true : false )

	const hideSide = () => {
		toggle(false)
	};

  return (
    <>
	<div className={`flex flex-col items-center absolute lg:relative md:relative z-20 lg:!w-[20vw] md:!w-[20vw] ${state ? "sidebarwidth178" :"sidebarwidth80"}  h-[88vh] overflow-hidden text-gray-400 bg-gray-900 `}>
		<div className="flex items-center w-full px-3 mt-3" href="#">
			<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
			</svg>
			<span className="ml-2 text-sm font-bold">Eupheus</span>
		<AiOutlineClose style={{marginLeft:"auto"}} className="lg:hidden md:hidden text-[#c4c4c4] font-[18px]" onClick={hideSide}/>
		</div>
		<div className="w-full px-2">
			<div className="flex flex-col items-center w-full mt-3 border-gray-700">
				
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" >
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					<span className="search ml-2 text-sm lg:!block font-medium ">Search</span>
				</a>
				<Link to="/audio" className="flex items-center w-full h-12 px-3 mt-2 text-gray-200 bg-gray-700 rounded" href="#">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<span className="ml-2 audiotext text-sm lg:!block font-medium">Audio</span>
				</Link>
			</div>
		
		</div>
		{/* <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
			<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span className="ml-2 text-sm font-medium">Account</span>
		</a> */}
	</div>
    </>
  )
}

export default Sidebar