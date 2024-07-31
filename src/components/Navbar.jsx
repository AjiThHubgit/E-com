import React from 'react';
import HeaderData from '../commonJsonData.json';
import { Link, useNavigate } from 'react-router-dom';

import '../assets/styles/Navbar.scss';
import '../assets/styles/Global.scss';

const Navbar = () => {
	const { HeaderJson } = HeaderData;
	const navigate = useNavigate();

	const handleAddToCardDetails = () => {
		console.log('Inside handleAddToCardDetails');
		navigate('/cart')
	}

	return (
		<>
			<header className='container-fluid'>
				{
					HeaderJson.map((item, index) => (
						item.type === 'logo' ? (
							<div className="company-logo" key={index}>{item.value}</div>
						) : item.type === 'main' ? (
							<div key={index} className="main-section">
								{item.value.search && (
									<div className="search">
										<input type="text" placeholder={item.value.search} />
									</div>
								)}
								{item.value.nav_menu && (
									<nav>
										<ul>
											{item.value.nav_menu.map((menuItem, menuIndex) => (
												<li key={menuIndex}>
													<Link style={{ marginLeft: menuItem.name === 'Mobile' ? "20px" : "" }} to={menuItem.path}>{menuItem.name}</Link>
												</li>
											))}
										</ul>
									</nav>
								)}
								{item.value.cart && (
									<div className="cart" style={{cursor: 'pointer'}} onClick={handleAddToCardDetails}>
										<span className="cart-icon">{item.value.cart_icon}</span>
										<span>{item.value.cart.name}</span>
									</div>
								)}
							</div>
						) : null
					))
				}
			</header>
		</>
	);
};

export default Navbar;