import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification, updatePassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../services/Firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const login = (email, password) => {
		
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				setCurrentUser(userCredentials.user)
				alert('logged in successfully');
				
			})
			.catch((error) => {
				console.error('Login Error: ', error);
			})

	}

	const signup = (email, password) =>{
		createUserWithEmailAndPassword(auth, email, password)
			.then(result=>{
				alert('Account created !');
				verifyEmail(result.user);
				login(email,password)
			})
			.catch(error=>{
				if(error.code == 'auth/email-already-in-use')
					alert('Email Already In Use, Continue to Login!')
				console.error(error);
		})
	}

	const logout = () =>{
		signOut(auth)
			.then(result=>{
				alert('logged out')
			})
			.catch(error=>{
				console.error(error);
		})
	} 

	const verifyEmail = (user) =>{
		sendEmailVerification(user)
			.then(result=>{
				alert('Email Verification link Sent, please verify your email!')
			})
			.catch(error=>{
				console.error(error);
		})
	} 

	const updatePassword = (email) =>{
		sendPasswordResetEmail(auth, email)
			.then(result=>{
				alert('password rest link sent on your email');
		})
			.catch(error => {
				console.error(error);
		});
	} 

	const forgotPassword = (email) => {
		sendPasswordResetEmail(auth, email)
			.then(result=>{
				alert('password reset link sent, check your email!');
			})
			.catch(error=>{
				if(error.code=='auth/missing-email')
					alert('Please enter email First');
				console.error(error);
			})
	} 



	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user);
		})
		return unsubscribe
	}, []);

	const value = {
		currentUser,
		login,
		logout,
		signup,
		verifyEmail,
		updatePassword,
		forgotPassword,
	}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(AuthContext);
}
