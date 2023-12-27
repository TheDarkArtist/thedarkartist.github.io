import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components 

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/about" element={<About />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="*" element={<NotFound />} />
		</Routes>

	)
}

export default AppRoutes
