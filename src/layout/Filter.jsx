import React from 'react'
 import Flex from '../layout/Flex'
const Filter = ({children,title,selectClass}) => {
  return (
  <Flex className={"font-dm text-base text-[#767676] "}>
  <h6 className={``}> {title}</h6>
  <select name="" id="" className={`${selectClass} py-1 outline-transparent border-[#767676] border  px-5`}> {children}
  </select>
 
  </Flex>
  )
}

export default Filter