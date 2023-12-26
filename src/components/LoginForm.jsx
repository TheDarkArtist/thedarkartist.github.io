import React, {useRef, useState} from 'react'
import tda from "../assets/tda.png";
import { MdClose } from 'react-icons/md';
import { auth } from "../Firebase";
import SignUpForm from "../components/SignUpForm";
import { GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({handleTDALoginClick, handleCreateAccount}) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  const emailRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading ] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then((userCredentials)=>{
        const user = userCredentials.user
        navigate('/')
        handleTDALoginClick()
        
      })
      console.log('User logged in successfully!');
      // You can redirect the user or perform additional actions after successful login
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  const handleGoogleLogin = () =>{
    signInWithPopup(auth, googleProvider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken;
      const user = result.user
      handleTDALoginClick()
    }).catch((error)=>{
      const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(errro);
      });

  }

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
  }

  return (
    <div className='flex flex-col absolute top-0 left-0 overflow-hidden justify-center items-center min-h-full min-w-full p-4' >
      <div className='border w-full md:w-[25rem] flex flex-col items-center h-[40rem] bg-blue-950 border-red-600 p-2' >
        <div className='w-full flex flex-col items-end ' onClick={handleTDALoginClick}><MdClose className='h-6 w-6' /></div>
        <div className='p-1 my-4 text-xl'>Welcome, continue to login..</div>
        <img className='h-40 my-4' src={tda} alt="" />
        <div className='w-[95%]'>
          <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="email" value={email} ref={emailRef} onChange={(e) =>setEmail(e.target.value)} placeholder='Email' />
          <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
          <button className='my-1 py-2 px-3 bg-blue-900 w-full' onClick={handleLogin} >Login</button>
          <button className='mt-4 py-2 px-3 bg-blue-900 w-full' onClick={handleGoogleLogin} >Google</button>
          <button className='my-2 py-2 px-3 bg-zinc-900 w-full' onClick={handleGithubLogin} >Github</button>
        </div>
        <div className='p-1 my-2 text-blue-600 hover:text-blue-700 text-center' onClick={handleCreateAccount}>Create Account</div>
      </div>
    </div>
  )
}

export default LoginForm
