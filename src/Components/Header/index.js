import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg"
import '../../style/Header.css'

function Header() {
	return(
		<div className="mfl-banner">
			<Link to="/">
				<img src={Logo} alt= "MindFlow logo" className="mfl-logo" />
			</Link>
			<div className="mfl-title">MindFlow</div>
			<div>
			<Link to="/">Home</Link>
			</div>
		</div>
	)
}

export default Header