import { auth } from "../services/Firebase";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from "firebase/auth";

import tda from "../assets/tda.png"
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext(null);


export const useAuth = () => {
	return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return () => unsubscribe();

	}, []);

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(email, password);
	}

	const login = (email, password) => {
		return signInWithEmailAndPassword(email, password)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			})
	}

	const sendEmailVerification = (email) => {
		return sendEmailVerification(email);
	}

	const logout = (auth) => {
		signOut(auth);
	}

	const resetPassword = (email) => {
		resetPassword(email);
	}

	const updateEmail = (email) => {
		updateEmail(email);
	}

	const updatePassword = (password) => {
		updatePassword(password);
	}

	const value = {
		currentUser,
		login,
		logout,
		signup,
		sendEmailVerification,
		resetPassword,
		updateEmail,
		updatePassword
	};



	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}





export const LoginForm = ({ handleLoginForm, handleLoginSignup }) => {


	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				handleLoginForm()
				navigate('/')
			})
			.catch((error) => {
				if (error.code == 'auth/invalid-credential')
					alert('Invalid Credentials');

			})

	};

	const handleForgotPassword = () => {
		const email = emailRef.current.value;

		sendPasswordResetEmail(auth, email)
			.then((result) => {
				alert('password rest link send, please rest the password');
			})
			.catch((error) => {
				console.log(error);
				if (error.code == 'auth/missing-email')
					alert('please enter the email then click on the forget password link')
			})

	}

	return <>
		<div onClick={handleLoginForm} className="h-[100vh] absolute top-0 z-30 w-full backdrop-blur-sm flex justify-center"></div>
		<div className="w-full h-0 flex justify-center" >
			<div className="flex absolute fixed flex-col justify-start items-stretch bg-blue-950 p-2 min-h-[35rem] md:min-h-[30rem] z-40 w-[90%] md:w-[20rem] top-40 border border-red-500 ">
				<div className="w-full mb-2 text-center text-blue-300 text-2xl font-bold">Login</div>
				<AiOutlineClose onClick={handleLoginForm} className="absolute right-4 top-4" />
				<div className="w-full flex justify-center py-6"><img className="mix-blend-overlay h-32 w-40 animate-pulse" src={tda} alt="" /></div>
				<form className="flex flex-col items-center w-full" onSubmit={handleOnSubmit}>
					<input required type="email" ref={emailRef} placeholder="Email" className="bg-green-800 focus:outline-none py-1 px-2 my-1 w-[90%]" />
					<input required type="text" ref={passwordRef} placeholder="Password" className="bg-green-800 focus:outline-none py-1 px-2 my-1 w-[90%]" />
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

	const emailRef = useRef();
	const passwordRef = useRef();

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				console.log(result);
				const user = userCre
				handleSignupForm()
				sendEmailVerification(user)
			})
			.catch((error) => {
				console.log(error);
				if (error.code == 'auth/email-already-in-use')
					alert('Email already in use!')
			})

	};

	return <>
		<div onClick={handleSignupForm} className="h-[100vh] absolute top-0 z-30 w-full backdrop-blur-sm flex justify-center"></div>
		<div className="w-full h-0 flex justify-center" >
			<div className="flex absolute fixed flex-col justify-start items-stretch bg-blue-950 p-2 min-h-[35rem] md:min-h-[30rem] z-40 w-[90%] md:w-[20rem] top-40 border border-red-500 ">
				<div className="w-full mb-2 text-center text-blue-300 text-2xl font-bold">Sign Up</div>
				<AiOutlineClose onClick={handleSignupForm} className="absolute right-4 top-4" />
				<div className="w-full flex justify-center py-6"><img className="mix-blend-overlay h-32 w-40 animate-pulse" src={tda} alt="" /></div>
				<form className="flex flex-col items-center w-full" onSubmit={handleOnSubmit}>
					<input required type="email" ref={emailRef} placeholder="Email" className="bg-green-800 focus:outline-none py-1 px-2 my-1 w-[90%]" />
					<input required type="text" ref={passwordRef} placeholder="Password" className="bg-green-800 focus:outline-none py-1 px-2 my-1 w-[90%]" />
					<button className="bg-blue-800 my-2 px-2 py-1 w-[90%]" >Sign Up</button>
				</form>
				<div className="flex w-full my-2 justify-evenly" >
					<div onClick={handleLoginSignup} className="cursor-pointer flex w-full justify-center text-blue-400 hover:text-blue-500" >Create Account</div>

				</div>
			</div>
		</div>

	</>



}
