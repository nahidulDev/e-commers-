import React, { useEffect, useState } from 'react'
import Breadcums from '../components/Breadcums'
import Container from "../layout/Container"
import Flex from '../layout/Flex'

import Sidebar from '../layout/Sidebar'
import Product from '../layout/Product'
import Filter from '../layout/Filter'
import {BsFillGridFill,BsListTask} from "react-icons/bs"
import PageNumber from '../layout/PageNumber'
const Shop = () => {
const[products ,setProducts]=useState([])
useEffect(()=>{
 const getProducts=async ()=>{
 await fetch("https://dummyjson.com/products?limit=100")
 .then((result)=>result.json())
 .then ((data)=> setProducts(data.products))
 };
 getProducts();
},[]);
  return (
    <>
 <section className='pt-[124px] pb-36'>
   <Container>
    <Breadcums title={"product"} linkval={"Home"} link={"/"} currentpage={"Products"} currentpagelink={window.location.pathname}/>
    <Flex className={"gap-x-10 mt-32 s  relative"}>
   <Sidebar/>
   <div className='w-[72%]'>
   <Flex className={"items-center gap-x-10 mb-16"}>
   <Flex className={"w-[40%] gap-x-10"}><BsFillGridFill/> <BsListTask/></Flex>
   <Flex className={"gap-x-20 w-[60%] justify-end" }>
   <Filter
     title={"Short By :"} selectClass={"w-[239px]"}>
     <option value="">Feature</option>
   </Filter>
   <Filter
     title={"Show:"} selectClass={"w-[139px]"} >
     <option value="">32</option>
   </Filter>
   </Flex>
   </Flex>
   <PageNumber itemsPerPage={12} data={products}/>
    </div>
   </Flex>
   </Container>
 </section>
  
    </>
  )
}

export default Shop;