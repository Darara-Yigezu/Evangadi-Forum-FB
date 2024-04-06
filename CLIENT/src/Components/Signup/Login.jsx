import React, {useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import { UserContext } from "../ContextAPI/Context";

const Login = () => {
  const navigate=useNavigate();
  const emailDOM= useRef();
  const passwordDOM= useRef();
  const [userData, setUserData] = useContext(UserContext);



  const handleSubmit=async(e)=>{
    e.preventDefault();
    const emailvalue=emailDOM.current.value;
    const passwordvalue=passwordDOM.current.value;

if( !emailvalue || !passwordvalue){
  alert("please enter all required fields")
  return;
}

try {
  const {data}= await axios.post('/login',{
    email:emailvalue,
    password:passwordvalue
    
  })
  setUserData({data})
  console.log(userData)
  
  
  alert("login sucessfully, you can access home page")
  navigate('/');
  window.location.reload(false);
 localStorage.setItem('token', data.token)
  
  // console.log(data)

} catch (error) {
  console.log(error)
  
  
}
  }

  return (
    <div div className='backgroundimage'>
<section className=' sm:block mx-auto md:flex md:justify-between  container-fluid max-w-[900px]  ' >
    
    <div className='bg-[#fff] mt-24 shadow-2xl h-[500px] bground  mr-8 container text-center rounded-2xl'>
    
        <div>
     <div className='text-xl pt-32 pb-3'>Login into your Account</div>
     <p className='text-center'>Don't have an account? <Link to='/signup' className='text-red-400'>create an account</Link></p>
     
     <form onSubmit={handleSubmit} className='mt-2 '>
      <div className='mb-5'> <input className=' border-current border w-[80%] h-[40px]' type='email' placeholder='email' name='email'  ref={emailDOM} /> </div>
       <div className='mb-5'><input type='password' className='border border-current w-[80%] h-[40px] ' placeholder='password' name='password'  ref={passwordDOM} /> </div>
       <button className=' btn-primary bg-orange-800 m-2 px-14 py-2 hover:bg-orange-600 rounded'>Submit</button>
       {/* <p><Link to='/signup' className='text-red-600 border-b-2 sm:mb-10  border-orange-600'>Create an account</Link></p> */}
     </form>
     
     </div>
    </div>
    
       <div className='  m-5 container text-gray-800 mt-32 sm:mx-auto sm:max-w-[350px] md:max-w-[800px]'>
        <h6 className='text-red-600' >about</h6>
        <h1 className=' text-3xl'>Evangadi Networks </h1>
        <p className='mb-2'>No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.</p>
        <p className='mb-2'>Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
        <button className='text-center items-center bg-orange-600  m-5  py-2 px-8 rounded'>HOW IT WORKS </button>

       </div>
       
    </section>
    </div>
  )
}

export default Login