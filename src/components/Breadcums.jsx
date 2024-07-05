import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Flex from "../layout/Flex"
const Breadcums = ({title,link,linkval,currentpage,currentpagelink,className}) => {
 
  return (
   <div className={`font-dm ${className}`}>
   <h1 className='font-bold text-[49px] capitalize'>{title}</h1>
    <Flex className={"items-center gap-x-2 mt-3"}>
     <Link to={link}>{linkval}</Link>
   <FaAngleRight/>
   <Link to={currentpagelink}>{currentpage}</Link>
    </Flex>
   </div>
  )
}

export default Breadcums