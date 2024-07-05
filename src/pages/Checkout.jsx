import React from 'react'
import Container from '../layout/Container'
import Breadcums from '../components/Breadcums'
import Title from '../layout/Title'
import LabelItems from '../layout/LabelItems'
import Flex from '../layout/Flex'
import Table from '../layout/Table'

const Checkout = () => {
  return (
<>
     <section>
      <Container>
   
         <Breadcums 
             title={window.location.pathname.split("/")[1]} 
             linkval={"Home"}
              link={"/"}
              currentpage={window.location.pathname.split("/")[1]}
              currentpagelink={window.location.pathname}
               className={"mt-14"}/>   

              <div className=' text-xl mt-20 font-dm'>
              <h1> <span className='text-[#787878]'>Have a coupon?</span> Click here to enter your code</h1>
              </div>    
              <Title title={"Billing Details"} className={"text-black mt-32"}/>  
                      <Flex className={"gap-12 mt-14"}>
                                 <div>
                                   <label htmlFor="fname"className='block text-xl font-bold  font-dm' > First name *</label>
                                   <input type="text" name='name' placeholder='Enter Your Name' className='w-[508px] h-[68px]  border-b outline-none text-[#767676]  text-xl  border-b-red-100' />
                                 </div>
                                 <div>
                                 <label htmlFor="lname" className='block text-xl font-bold  font-dm'> Last name *</label>
                                   <input type="text" name='name' placeholder='Enter Your Name'className='w-[508px] h-[68px]  border-b text-xl outline-none text-[#767676]  border-b-red-100' />
                                 </div>
                      </Flex>
               <LabelItems labelName={"Companye Name (optional)"} type={"text"} for="name" name="name" placeholder={"Entetr Your Companye Name "} InputClassName={"w-[1055px] h-[68px]  border-b   border-b-red-100 "} />
                 <label htmlFor="country name" className='block text-xl font-bold  font-dm  mt-16'>Country Name</label>
                <select name="" id="" className='w-[1055px] h-[70px] text-[#767676] text-xl outline-none border-b border-t-red-400 '>
                <option value="" className=' outline-none ' > Country Name</option>
                <option value="" className='  outline-none ' > Bangladesh </option>
               </select>
                   <LabelItems labelName={"Street Address *"} type={"text"} for="fname" name="fname"  placeholder={"House number and street name"} InputClassName={"w-[1055px] h-[68px]  border-b border-b-red-100"}/> 
                  <input type="text" className=' text-xl block w-[1055px] h-[68px] mt-8 border-b border-b-red-100 text-[#767676]  outline-none' placeholder='Apartment, suite, unit etc. (optional)'/>
                  <LabelItems labelName={"Town/City **"} type={"text"} for="city name" name="city name" placeholder={"Entetr Y"} InputClassName={"w-[1055px] h-[68px]  border-b  border-b-red-100"}/>
                   <LabelItems labelName={"County (optional) *"} type={"text"} for="fname" name="fname" placeholder={"Entetr "} InputClassName={"w-[1055px] h-[68px]  border-b border-b-red-100"}/>
                    <LabelItems labelName={"Post Code * *"} type={"number"} for="number" name="number" placeholder={"Entetr"} InputClassName={"w-[1055px] h-[68px]  border-b border-b-red-100"}/>
                     <LabelItems labelName={"Phone *"} type={"tel"} for="tel" name="tel" placeholder={"Entetr Here"} InputClassName={"w-[1055px] h-[68px]  border-b border-b-red-100"}/>
                      <LabelItems labelName={"Email Address  *"} type={"email"} for="email" name="email" placeholder={"Entetr Here"} InputClassName={"w-[1055px] h-[68px]  border-b border-b-red-100"}/>


                          <Title title={"Additional Information"} className={"text-black mt-24"}/>    

                         <h4 className="mt-10 text-xl  font-dm font-bold"> Other Notes (optional) </h4>
                         <h4 className="mt-5 text-lg font-dm text-[#767676]">Notes about your order, e.g. special notes for delivery.</h4>
                           <Title title={"Your Order"} className={"text-black mt-10"}/> 
                           <Table/>
                           
                           <div className='font-dm mt-10'>
                                           <form>
                                           
                                             <Flex className={"gap-4 "}>
                                              <input type="radio" id='bank' name=' bank' value={"Bank"}  />
                                             <label htmlFor="bank" className=' text-2xl font-bold'> Bank </label>
                                             </Flex>
                                             <div className='w-[985px] h-[64px] bg-[#F7F8F9]  '>
                                           <h4 className='pt-5 pl-5 text-[#767676] text-xl'>  Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</h4>
                                             </div>
                                                 <Flex className={"gap-4 "}>
                                              <input type="radio" id='bank' name=' bank' value={"Bank"}  />
                                             <label htmlFor="bank" className=' text-2xl font-bold'> Bank </label>
                                             </Flex>         
                                             <div  className='w-[985px] h-[64px] bg-[#10a31c] mt-10  '>
                                             <h4 className='pt-5 pl-5 text-[#767676] text-xl'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</h4>
                                             </div>
                                          
            
                                                            
                                           </form>
                           </div>
      </Container>
     </section>
</>
  )
}

export default Checkout;