import { auth } from "../services/Firebase";
import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from "firebase/auth";

const AuthContext = createContext();


export const useAuth = () => {
	return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(null);

	useEffect(()=>{
		const unsubscribe = auth.onAuthStateChanged((user)=>{
			setCurrentUser(user);
			setLoading(false);
		});
		return () => unsubscribe();

	}, []);

	const signup = (email, password) =>{
		return createUserWithEmailAndPassword(email, password);
	}

	const login = (email, password) =>{
		return signInWithEmailAndPassword(email, password);
	}

	const sendEmailVerification = (email) =>{
		return sendEmailVerification(email);
	}

	const logout = (auth) =>{
		signOut(auth);
	}

	const resetPassword = (email) => {
		resetPassword(email);
	}

	const updateEmail = (email) =>{
		updateEmail(email);
	}

	const updatePassword = (password) =>{
		updatePassword(password);
	}

	const value = {
		currentUser, 
		login,
		signup,
		sendEmailVerification,
		resetPassword,
		updateEmail,
		updatePassword
	};

	return(
		<AuthContext.Provider value={value}>
			{!loading && Children}
		</AuthContext.Provider>
	)
}
