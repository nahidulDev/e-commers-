import React from 'react'
import SidebarTitle from './SidebarTitle'
import {category,colors,brands,price} from "../../src/fakesData/Data"

const Sidebar = () => {
  return (
    <>
    <aside className='w-[360px]'> 
      <SidebarTitle showDrop={false} title={"Shop By Category"} data={category}/>
      <SidebarTitle showDrop={true} title={"Shop By Color"} data ={colors}/>
        <SidebarTitle showDrop={true} title={"Shop By Brand"} data={brands}/>
          <SidebarTitle showDrop={false} title={"Shop By Price"} data ={price}/>
     </aside>
  
  
    </>
  )
}

export default Sidebar