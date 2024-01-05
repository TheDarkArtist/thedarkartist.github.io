import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification, updatePassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth, db } from '../services/Firebase';
import { collection, doc, getDoc, getDocs, query, setDoc,updateDoc, where } from 'firebase/firestore';

export const AuthContext = createContext();

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
					const q = query(collection(db, 'users'), where('username', '==', username))
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


	const getUserData = useCallback((uid) => {
		const userDocRef = doc(db, "users", uid);
		console.log('getDoc run')
		return getDoc(userDocRef)
			.then((doc) => {
				if (doc.exists()) {
					return doc.data();
				} else {
					console.log("No such document!");
					return null;
				}
			})
			.catch((error) => {
				console.error("Error getting document:", error);
				return null;
			});
	}, [getDoc]);

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

	const updateCurrentUser = async (inputRefs) => {
		await updateDoc(doc(db, 'users', currentUser.uid), {
			username: inputRefs.username.current.value,
			email: inputRefs.email.current.value,
			password: inputRefs.password.current.value,
			name: {
				first: inputRefs.name.first.current.value,
				last: inputRefs.name.last.current.value,
			},
			address: {
				street: inputRefs.address.street.current.value,
				city: inputRefs.address.city.current.value,
				state: inputRefs.address.state.current.value,
				zip: inputRefs.address.zip.current.value,
			},
			dob: inputRefs.dob.current.value,
			phoneNumber: inputRefs.phone.current.value,
			bio: inputRefs.bio.current.value,
		}, { merge: true })
			.then(result => {
				authStateListener();

			})
			.catch(error => {
				console.error(error);
			})

	}

	const authStateListener = useCallback(() => {
		return onAuthStateChanged(auth, (user) => {
			if (user) {
				const userData = getUserData(user.uid);
				userData.then((data) => {
					setCurrentUser(data);
				});
			} else {
				setCurrentUser(null);
			}
		});
	}, [getUserData, setCurrentUser]);

	useEffect(() => {
		const unsubscribe = authStateListener();

		return () => {
			unsubscribe();
		};
	}, [authStateListener]);

	const value = {
		currentUser,
		updateCurrentUser,
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
