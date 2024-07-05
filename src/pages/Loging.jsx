import React from 'react'
import Container from '../layout/Container'
import Breadcums from '../components/Breadcums'
import Title from "../layout/Title"
import Flex from '../layout/Flex'
const Loging = () => {
  return (
   <>
       
       <section>
       <Container>
        <Breadcums title={"Login"} linkval={"Home"} link={"/"} currentpage={"Login"} currentpagelink={window.location.pathname}/>
       
        <div className='mt-20 text-[#767676] text-l w-[668px] h-[60px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</div>
        <Title title={"Returning Customer"} className={"mt-10 text-black"}/>
       
        <form >
                         <Flex className={"gap-x-44 mt-10"}>
                          <div className='  '>
         <label className=' text-lg font-bold font-dm block ' for ="email"> Email Address</label>
         <input className=' w-[500px] h-[68px] text-[#767676] p-3  text-2xl ' id='Email' type='Email' name='Email'placeholder='company@domain.com'/>
     
      </div>
                 <div className=' '>
                      <label className=' text-lg font-bold font-dm block' for ="password"> Password</label>
                     <input className=' w-[500px] h-[68px] text-[#767676] p-3 text-4xl  ' id='password' type='password' name='password'placeholder='...............'/>
                 </div>
                         </Flex>
                         <button className='mt-5 w-[200px] h-[50px] text-center bg-slate-50 text-xl font-bold border-solid text-black border-2 '>Log In</button>
        </form>
      


              <Title title={"New Customer "} className={"mt-10 text-black"}/>
              <div className='text-[#767676] font-dm text-lg mt-10 w-[644px] h-[60px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</div>
              <button className='mt-5 w-[200px] h-[50px] text-center bg-gray-900 text-xl font-bold border-solid text-white border-2 '>Continue</button>
       </Container>
       </section>
   </>
  )
}

export default Loging