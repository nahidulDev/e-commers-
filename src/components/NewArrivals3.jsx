import React from 'react'
import Container from '../layout/Container'
import Flex from '../layout/Flex'
import Title from '../layout/Title'
import Product from '../layout/Product'
import Img10 from "../assets/img10.png"
import Img11 from "../assets/img11.png"
import Img12 from "../assets/img12.png"
import Img13 from "../assets/img13.png"
const NewArrivals3 = () => {
  return (
   <>
   <section className="mb-32 w-full ">
  <Container>
  <Title title={"Specials Offers"}/>
   <Flex className={"justify-center items-center gap-x-8"}>
     <Product 
  className={"w-[24%]"}
   productImg={Img10} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"10%"}
  labelShow1={true}/>

   <Product 
  className={"w-[24%]"}
   productImg={Img11} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"new"}
  labelShow1={true}/>

   <Product 
  className={"w-[24%]"}
   productImg={Img12} 
  productTitle={"basics crew neck tee"}
   productPrice={"$44.00"} 
  labelShow={true} label={"10%"}
  labelShow1={true}/>

   <Product 
  className={"w-[24%]"}
   productImg={Img13} 
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

export default NewArrivals3