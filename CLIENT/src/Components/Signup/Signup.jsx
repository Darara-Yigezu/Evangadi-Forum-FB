
import React,{useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom';

import axios from '../../axios';


const Signup = () => {
  const navigate= useNavigate();
  const usernameDOM= useRef();
  const firstnameDOM= useRef();
  const lastnameDOM= useRef();
  const emailDOM= useRef();
  const passwordDOM= useRef();
  // const cpassswordDOM= useRef();
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const usernamevalue=usernameDOM.current.value;
    const firstnamevalue=firstnameDOM.current.value;
    const lastnamevalue=lastnameDOM.current.value;
    const emailvalue=emailDOM.current.value;
    const passwordvalue=passwordDOM.current.value;
    // const cpasswordvalue=cpassswordDOM.current.value;
if(!usernamevalue || !firstnamevalue ||!lastnamevalue || !emailvalue || !passwordvalue){
  alert("please enter all required fields")
  return;
}
try {
  const response= await axios.post('/register',{
    username:usernamevalue,
    firstName:firstnamevalue,
    lastName:lastnamevalue,
    email:emailvalue,
    password:passwordvalue,
    // c_password:cpasswordvalue
  })
  
  alert("registration sucessfully, please login")
  navigate('/login');
  
} catch (error) {
  console.log(error);
  
}
  }

  return (
    <div className='formbackground'>
    <section className=' sm:block mx-auto md:flex md:justify-between  container-fluid max-w-[900px]  ' >
    <div className='bg-[#fff] shadow-2xl md:h-[500px] mt-10  mr-8 container text-center rounded-2xl'>
        <div className=' abbaydam  '>
     <div className='text-2xl pt-5 pb-3'>Join to the network</div>
     <p className='text-center'>Alerady have an account?
      <Link className='text-red-400' to='/login'>signin</Link></p>
     <form className='mt-2' onSubmit={handleSubmit} >
     <div className='mb-5'> <input  type='text' className=' border-current border w-[80%] h-[40px]' placeholder='userName' name='username' ref={usernameDOM}/></div>
      
       <div className='mb-5'><input type='text'className='border-current border w-[39%] h-[40px] mr-1' placeholder='firstName' name='firstName' ref={firstnameDOM}/>
        <input type='text' className='border-current  border w-[39%] h-[40px]' placeholder='LastName' name='lastName' ref={lastnameDOM}/></div>
       
       <div className='mb-5'> <input className=' border-current border w-[80%] h-[40px]' type='email' placeholder='email' name='email' ref={emailDOM} /> </div>
       
       <div className='mb-5'><input type='password' className='border border-current w-[80%] h-[40px] ' placeholder='password' name='password' ref={passwordDOM} /> </div>
       <div className='mb-5'><input type='password' className='border border-current w-[80%] h-[40px] ' placeholder='password' name='c_password'  /> </div>
       <button type='submit' className='w-[80%] btn-primary bg-blue-800 m-2 p-2 hover:bg-orange-600 rounded-2xl'>Agree and Join</button>
       <p className='m-3'>I agree to the <a href='/' className='text-red-600 border-b-2 border-orange-600'>privacy policy</a> and <a  className='text-red-600 border-b-2 border-orange-600 '   href='/'>terms of service</a></p>
       <a href='/' className='text-red-600 border-b-2 sm:mb-5  border-orange-600'>Alerady have an account</a>
     </form>
     </div>
    </div>
       <div className='  container mt-24 sm:mx-auto sm:max-w-[350px] md:max-w-[800px]'>
        <h6 className='text-red-600' >about</h6>
        <h1 className=' text-3xl'>Evangadi Networks Q&A</h1>
        <p className='mb-2'>No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.</p><br />
        <p className='mb-2'>Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>


  <p>
Useful Link
Terms of Service
Privacy policy
Contact Info
support@evangadi.com
+1-202-386-2702
</p>
<button className='text-center items-center bg-orange-600  m-5  py-2 px-8 rounded'>How it works </button>

       </div>
       
    </section>
    </div>
  )
}

export default Signup;