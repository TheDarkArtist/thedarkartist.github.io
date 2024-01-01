import { auth } from "../services/Firebase";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import tda from "../assets/tda.png"
import { AiOutlineClose } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import {useAuth} from './AuthContext';


export const LoginForm = ({ handleLoginForm, handleLoginSignup }) => {

	const { user, login, forgotPassword } = useAuth();
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		login(emailRef.current.value, passwordRef.current.value);
		navigate('/')
		handleLoginForm();
	};

	const handleForgotPassword = () => {
		forgotPassword(emailRef.current.value)	
	}

	return <>
		<div onClick={handleLoginForm} className="h-[100vh] absolute top-0 z-30 w-full backdrop-blur-sm flex justify-center"></div>
		<div className="w-full h-0 flex justify-center" >
			<div className="flex fixed flex-col justify-start items-stretch bg-blue-950 p-2 min-h-[35rem] md:min-h-[30rem] z-40 w-[90%] md:w-[20rem] top-40 border border-red-500 ">
				<div className="w-full mb-2 text-center text-blue-300 text-2xl font-bold">Login</div>
				<AiOutlineClose onClick={handleLoginForm} className="absolute right-4 top-4" />
				<div className="w-full flex justify-center py-6"><img className="mix-blend-overlay h-32 w-40 animate-pulse" src={tda} alt="" /></div>
				<form className="flex flex-col items-center w-full" onSubmit={handleOnSubmit}>
					<input required type="email" ref={emailRef} placeholder="Email" className="bg-green-800 focus:outline-none py-1 px-2 my-1 w-[90%]" />
					<input required type="password" ref={passwordRef} placeholder="Password" className="bg-green-800 focus:outline-none py-1 px-2 my-1 w-[90%]" />
					<button className="bg-blue-800 my-2 px-2 py-1 w-[90%]" >Login</button>
				</form>
				<div className="flex w-full my-2 justify-evenly" >
					<div onClick={handleLoginSignup} className="cursor-pointer flex w-full justify-center text-blue-400 hover:text-blue-500" >Create Account</div>
					<div onClick={handleForgotPassword} className="cursor-pointer flex w-full justify-center text-blue-400 hover:text-blue-500" >Forgot Password</div>
				</div>
				<div className="flex my-4 flex-col w-full " >
					<span className="text-blue-300" >continue loging in with the following</span>
					<div className="px-1 py-2 flex flex-wrap" >
						<div className="flex justify-center items-center cursor-pointer p-1 m-1 h-16 w-16 border"> G </div>
					</div>
				</div>

			</div>
		</div>
	</>


}


export const SignupForm = ({ handleSignupForm, handleLoginSignup }) => {
	const {signup, verifyEmail} = useAuth();
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		signup(emailRef.current.value, passwordRef.current.value)
		verifyEmail()
		navigate('/');
		handleSignupForm();
	};

	return <>
		<div onClick={handleSignupForm} className="h-[100vh] absolute top-0 z-30 w-full backdrop-blur-sm flex justify-center"></div>
		<div className="w-full h-0 flex justify-center" >
			<div className="flex fixed flex-col justify-start items-stretch bg-blue-950 p-2 min-h-[35rem] md:min-h-[30rem] z-40 w-[90%] md:w-[20rem] top-40 border border-red-500 ">
				<div className="w-full mb-2 text-center text-blue-300 text-2xl font-bold">Sign Up</div>
				<AiOutlineClose onClick={handleSignupForm} className="absolute right-4 top-4" />
				<div className="w-full flex justify-center py-6"><img className="mix-blend-overlay h-32 w-40 animate-pulse" src={tda} alt="" /></div>
				<form className="flex flex-col items-center w-full" onSubmit={handleOnSubmit}>
					<input required type="email" ref={emailRef} placeholder="Email" className="bg-green-800 focus:outline-none py-1 px-2 my-1 w-[90%]" />
					<input required type="password" ref={passwordRef} placeholder="Password" className="bg-green-800 focus:outline-none py-1 px-2 my-1 w-[90%]" />
					<button className="bg-blue-800 my-2 px-2 py-1 w-[90%]" >Sign Up</button>
				</form>
				<div className="flex w-full my-2 justify-evenly" >
					<div onClick={handleLoginSignup} className="cursor-pointer flex w-full justify-center text-blue-400 hover:text-blue-500" >Login</div>

				</div>
			</div>
		</div>

	</>



}
