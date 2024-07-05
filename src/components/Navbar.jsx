import Container from '../layout/Container'
import React, { useEffect, useState } from 'react'
  import Images from '../layout/Images'
  import logo from '../assets/Logo.png'
  import Flex from '../layout/Flex'
import List from '../layout/List'
import Listitem from '../layout/Listitem'
import {AiOutlineBars} from "react-icons/ai"
  const Navbar = () => {
  const[menuShow,setmenuShow]=useState(true);
  useEffect(()=>{
  const resize=()=>{
   if (window.innerWidth < 415){
   setmenuShow(false);
   }
  };
  window.addEventListener("resize",resize);
  resize();
  },[]);
    return (
      <nav className={"py-8 px-2 sm:px-0 "}>
      <Container>
      <Flex className={"items-center relative"}>
       <Images src={logo} alt=" No picture" className={"w-[10%]"}/>
        
       {menuShow &&(
       <List className={" flex  sm:w-[90%] justify-center list-none gap-x-10 font-dm text-xl capitalize sm:text-textColor flex-col sm:flex-row sm:relative absolute top-10 sm:top-0 bg-black w-full sm:bg-transparent text-white"}>
       <Listitem listitem={"Home"} linkName={"hover:text-[#262626] transition-all  sm:py-0 sm:px-0 py-4 pl-5 block"} link={"/"} />
         <Listitem listitem="shop" linkName={"hover:text-[#262626] transition-all sm:py-0 sm:px-0 py-4 pl-5 block" } link={"/shop"}/>
           <Listitem listitem="about"linkName={"hover:text-[#262626] transition-all sm:py-0 sm:px-0 py-4 pl-5 block"} link={"/about"}/>
             <Listitem listitem="contract"linkName={"hover:text-[#262626] transition-all sm:py-0 sm:px-0 py-4 pl-5 block"} link={"/contract"}/>
               <Listitem listitem="journal" linkName={"hover:text-[#262626] transition-all sm:py-0 sm:px-0 py-4 pl-5 block"}/>
              
       </List>
       
       )}
        <AiOutlineBars className=' absolute cursors-point sm:hidden right-0 top-0' onClick={()=>setmenuShow(!menuShow)} />
      </Flex>
      </Container>
      </nav>
    )
  }
  
  export default Navbar