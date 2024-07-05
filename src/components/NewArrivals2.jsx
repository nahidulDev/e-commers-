import React from 'react'
import Container from '../layout/Container'
import Product from '../layout/Product'
import Img6 from "../assets/img6.png"
import Img7 from "../assets/img7.png"
import Img8 from "../assets/img8.png"
import Img9 from "../assets/img9.png"
import Flex from '../layout/Flex'

const NewArrivals2 = () => {
  return (
    <>
     <section className="mb-32 w-full ">
  <Container>
 
   <Flex className={"justify-center items-center gap-x-8"}>
     <Product 
  className={"w-[24%] "}
   productImg={Img6} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"10%"}
  labelShow1={true}/>

   <Product 
  className={"w-[24%]"}
   productImg={Img7} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"new"}
  labelShow1={true}/>

   <Product 
  className={"w-[24%]"}
   productImg={Img8} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"10%"}
  labelShow1={true}/>

   <Product 
  className={"w-[24%]"}
   productImg={Img9} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"new"}
  labelShow1={true}/>
  
   </Flex>
  </Container>
  </section>
    </>
  )
}

export default NewArrivals2