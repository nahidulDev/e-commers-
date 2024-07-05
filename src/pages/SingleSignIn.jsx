import React from 'react'
import Container from '../layout/Container'
import Breadcums from '../components/Breadcums'
import Title from '../layout/Title'
import LabelItems from '../layout/LabelItems'

const SingleSignIn = () => {
  return (
   <>
   
   <section className='pt-[124px] pb-36'>
            <Container>
               <Breadcums title={"Sing In"} linkval={"Home"} link={"/"} currentpage={"Sing In"} currentpagelink={window.location.pathname}/>   
               <div className='mt-20 w-[644px] h-[60px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</div> 
               <Title title={"Your Personal Details"} className={"mt-10"}/>   
               <div className='flex gap-x-44'>
               
               <div>
                             <LabelItems labelName={"First Name:"} for={"fname"} id={"fname"} name={"name"}type={"text"} placeholder={"Enter first Your Name" }/>
                             <LabelItems labelName={"Email Address:"} for={"email"} id={"email"} name={"email"}type={"email"} placeholder={"company@domain.com" }/>
               </div>
               <div>
                   <LabelItems labelName={"Last Name:"} for={"lname"} id={"lname"} name={"name"}type={"text"} placeholder={"Enter Your Last name" }/>
                   <LabelItems labelName={"Telephone"} for={"phone"} id={"phone"} name={"phone"}type={"tel"} placeholder={"88+" }/>
               </div>
               </div>
               <Title title={"New Customer"} className={"mt-10"}/>

                  <div className='flex gap-x-44 gap-y-4'>
               
               <div>
                             <LabelItems labelName={"Address 1"} for={"address"} id={"address"} name={"address"}type={"address"} placeholder={"4279 Zboncak Port Suite 6212" }/>
                             <LabelItems labelName={"City"} for={"city"} id={"city"} name={"city"}type={"city"} placeholder={"City" }/>
                              <LabelItems labelName={"Division"} for={"Division"} id={"Division"} name={"Division"}type={"Division"} placeholder={"Please select " } />
               </div>
               <div>
               <LabelItems labelName={"Address 1"} for={"address"} id={"address"} name={"address"}type={"address"} placeholder={"4279 Zboncak Port Suite 6212" }/>
                   <LabelItems labelName={"Post Code :"} for={"postcode"} id={"postcode"} name={"postcode"}type={"text"} placeholder={"23695" }/>
                   <LabelItems labelName={"District"} for={"text"} id={"text"} name={"text"}type={"text"} placeholder={"Enter Your District" }/>
               </div>
               </div>
               <Title title={"Your Password"} className={"mt-10"}/>
               <div className='flex gap-x-44 '>
                <LabelItems labelName={"Password"} for={"password"} id={"password"} name={"password"}type={"password"} placeholder={"Password" }/>
                             <LabelItems labelName={" Repeat Password"} for={"password"} id={"password"} name={"password"}type={"password"} placeholder={" Repeat Password" }/>
               </div>
                <input type="checkbox" id="" name="" value="" className='mt-32'/>
                              <label for="" className=' text-xl text-[#767676]'>I have read and agree to the Privacy Policy</label><br></br>

                              <div className='flex mt-5 gap-x-3'>
                              <div className='text-xl text-[#767676] '>Subscribe Newsletter</div>
                                <input type="checkbox" id="" name="" value="" className=''/>
                              <label for="" className=' text-xl text-[#767676]'>YES</label><br></br>
                                                   <input type="checkbox" id="" name="" value="" className=''/>
                              <label for="" className=' text-xl text-[#767676]'>NO</label><br></br>
                              </div>
                              <button className='mt-10 w-[200px] h-[50px] bg-slate-950  text-xl text-yellow-50 text-center font-dm font-bold'>Log In </button>
            </Container>
   </section>
   </>
  )
}

export default SingleSignIn