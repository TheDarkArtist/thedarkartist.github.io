import React from 'react'

const Btn = ({ bgColor, txtColor, rounded, txt }) => {
	const classes = `
		${bgColor ? `bg-${bgColor}-700` : 'bg-blue-700'}
		${txtColor ? `text-${txtColor}-700` : 'text-white'} 
		${rounded ? 'rounded-md' : ''} 
	`;
	return( 
	<button className={`${classes} px-4 py-1 m-1`} >{txt}</button>
	)
}

export default Btn
