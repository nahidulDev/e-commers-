
import React from 'react'
import Container from "../layout/Container"
import Flex from '../layout/Flex'
import  List from  "../layout/List"
import  ListItem  from "../layout/Listitem"
import Images from "../layout/Images"
import logo from "../assets/logo.png"
import Icons from '../layout/Icons'
import {FaFacebook,FaLinkedinIn,FaInstagram} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Orebi = () => {
  return (

    <>
   <footer  className='mb-20 bg-slate-50 py-14'>
    
   <Container>
   <Flex className={"justify-between"}>
   <div className='w-[8%]'>
   <h4 className='text-2xl  text-[#262626] font-dm mb-4 font-bold'>Menu</h4>
   <List className="text-[#6D6D6D] list-none  font-dm">
    <ListItem listitem={"Home"} linkName={""} Link={"/"}/>
    <ListItem listitem={"Shop"} linkName={""} Link={"/Shop"}/>
    <ListItem listitem={"About"} linkName={""} Link={"/About"}/>
    <ListItem listitem={"Contract"} linkName={""} Link={"/Contract"} />
    <ListItem listitem={"Journal"} linkName={""}  Link={"/Journal"}/>
   
    
   </List>
   </div>
   <div className='w-[8%]'>
   <h4 className='text-2xl  text-[#262626] font-dm mb-4 font-bold'>Menu</h4>
   <List className="text-[#6D6D6D] list-none  font-dm">
    <ListItem listitem={"Category 1"} linkName={""} Link={"/"}/>
    <ListItem listitem={"Category2"} linkName={""} Link={"/Shop"}/>
    <ListItem listitem={"Category3"} linkName={""} Link={"/About"}/>
    <ListItem listitem={"Category4"} linkName={""} Link={"/Contract"} />
    <ListItem listitem={"Category5"} linkName={""}  Link={"/Journal"}/>
   
    
   </List>
   </div>
    <div className='w-[8%]'>
   <h4 className='text-2xl  text-[#262626] font-dm mb-4 font-bold'>Help</h4>
   <List className="text-[#6D6D6D] list-none  font-dm">
    <ListItem listitem={"privicy Policy"} linkName={""} Link={"/"}/>
    <ListItem listitem={"Terms and Conditions"} linkName={""} Link={"/Shop"}/>
    <ListItem listitem={"Special E-shop"} linkName={""} Link={"/About"}/>
    <ListItem listitem={"Shipping"} linkName={""} Link={"/Contract"} />
    <ListItem listitem={"Secure Payment"} linkName={""}  Link={"/Journal"}/>
   </List>
   </div>
      <div>
      <div>
      <h5><a href="tel:01518606221" className='text-base font-bold'> 01518606221</a></h5>
      </div>
      <div>
      <h5><a href="mailto:inahid30@gmail.com" className='text-base font-bold'> inahid30@gmail.com</a></h5>
      </div>
      <address className=' font-normal text-slate-400 font-dm mt-5'>575 Crescent Ave. Quakertown, PA 18951</address>
      </div>
     <Images  src={logo} className={"w-[25%] "}/>
   </Flex>
   <Flex className={"items-center justify-between mt-16"}>
   
   <Icons className={"flex gap-x-8"}>

   <Link to={"#"}><FaFacebook className='text-xl'/></Link>
    <Link to={"#"}><FaLinkedinIn className='text-xl'/></Link>
   <Link to={"#"}>  <FaInstagram className='text-xl  '/></Link>
 
     </Icons>
   <h5 className='text-[#6D6D6D] text-xl'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h5>
   </Flex>
   </Container>
   </footer>
    </>
  )
}

export default Orebi