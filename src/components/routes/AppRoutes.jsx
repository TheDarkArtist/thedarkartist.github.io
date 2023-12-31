import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components 

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import BlogCreate from "../blog/BlogCreate";
import BlogDelete from "../blog/BlogDelete";
import BlogUpdate from "../blog/BlogUpdate";
import NotFound from "../pages/NotFound";
import BlogDetails from '../blog/BlogDetails';
import BlogList from '../blog/BlogList';



const AppRoutes = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/about" element={<About />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route exact path='/blog' >
				<Route path='' element={<BlogList />} />
				<Route path='details/:id' element={<BlogDetails />} />
				<Route path='create' element={<BlogCreate />} />
				<Route path='update/:id' element={<BlogUpdate />} />
				<Route path='delete/:id' element={<BlogDelete />} />
			</Route>
			
			<Route path="*" element={<NotFound />} />
		</Routes>

	)
}

export default AppRoutes
