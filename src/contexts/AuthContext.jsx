import React, { createContext, isValidElement, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification, updatePassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth, db } from '../services/Firebase';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const login = async (identifier, password) => {
		try {
			if (isValidEmail(identifier)) {
				signInWithEmailAndPassword(auth, identifier, password)
					.then(async (userCredentials) => {
						alert('logged in successfully');
						const userData = await getUserData(userCredentials.user.uid);
						setCurrentUser(userData)
						console.log(currentUser)

					})
					.catch((error) => {
						if (error.code == 'auth/invalid-credential')
							alert('Invalid Credentials')
						console.error('Login Error: ', error);
					})
			} else {
				const email = await getUserEmailByUsername(identifier);
				signInWithEmailAndPassword(auth, email, password)
					.then(async (userCredentials) => {
						alert('logged in successfully');
						const userData = await getUserData(userCredentials.user.uid);
						setCurrentUser(userData)
						console.log(currentUser)

					})
					.catch((error) => {
						if (error.code == 'auth/invalid-credential')
							alert('Invalid Credentials')
						console.error('Login Error: ', error);
					})

			}




		} catch (error) {
			console.error(error);
		}

	}

	const signup = async (email, password, username) => {
		try {
			const isUsernameUnique = async () => {
				try {
					const q = query(collection(db, 'users'),where('username', '==', username))
					const querySnapshot = await getDocs(q)
					console.log(querySnapshot.size)
					return querySnapshot.empty
				} catch (error) {
					console.error('error checking uniqueness');
					console.error(error);
				}

			}

			const isUnique = await isUsernameUnique(username);


			if (!isUnique) {
				alert(' username already exists!')
				return
			}

			createUserWithEmailAndPassword(auth, email, password)
				.then(async (result) => {

					await setDoc(doc(db, 'users', result.user.uid), {
						uid: result.user.uid,
						username: username,
						email: email,
						dob: '',
						phoneNumber: '',
						bio: '',
						displayName: '',
						name: {
							first: '',
							last: '',
						},
						address: {
							street: '',
							city: '',
							state: '',
							zip: '',
						},


					});
					alert('Account created !');
					verifyEmail(result.user);
					login(email, password)
				})
				.catch(error => {
					if (error.code == 'auth/email-already-in-use')
						alert('Email Already In Use, Continue to Login!')
					console.error(error);
				})
		}
		catch (error) {
			console.error(error);
		}
	}

	const logout = () => {
		signOut(auth)
			.then(result => {
				alert('logged out')
			})
			.catch(error => {
				console.error(error);
			})
	}

	const verifyEmail = (user) => {
		sendEmailVerification(user)
			.then(result => {
				alert('Email Verification link Sent, please verify your email!')
			})
			.catch(error => {
				console.error(error);
			})
	}

	const updatePassword = (email) => {
		sendPasswordResetEmail(auth, email)
			.then(result => {
				alert('password rest link sent on your email');
			})
			.catch(error => {
				console.error(error);
			});
	}

	const forgotPassword = (email) => {
		sendPasswordResetEmail(auth, email)
			.then(result => {
				alert('password reset link sent, check your email!');
			})
			.catch(error => {
				if (error.code == 'auth/missing-email')
					alert('Please enter email First');
				console.error(error);
			})
	}

	const getUserData = async (uid) => {
		const userDocRef = doc(db, 'users', uid);
		const userDoc = await getDoc(userDocRef);

		if (userDoc.exists()) {
			const userData = userDoc.data();
			return userData;
		} else {
			return null;
		}
	}

	const isValidEmail = (input) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(input);
	}

	const getUserEmailByUsername = async (username) => {
		const queerySnapshot = await getDocs(collection(db, 'users'), where('username', '==', username))
		if (!queerySnapshot.empty) {
			const userData = queerySnapshot.docs[0].data();
			return userData.email;
		}
	}


	const authStateListener = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('user signed in : ', user.uid);
				const userData = getUserData(user.uid);
				userData.then(data => { setCurrentUser(data) })

			} else {
				console.log('user is signed out');
				setCurrentUser(null)
			}
		})
	}


	useEffect(() => {
		const unsubscribe = authStateListener();
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
