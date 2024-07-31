import './App.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { fetchData } from './redux/slice/thunkApiSlice';
import Home from './Pages/Home';
import AddToCart from './components/AddToCart';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<Router>
			<AppContent />
		</Router>
	);
};

const AppContent = () => {
	const dispatch = useDispatch();
	// const state = useSelector((state) => state.thunkApi);
	const location = useLocation();
	console.log(location);

	useEffect(() => {
			if (location.pathname !== "/cart") {
				dispatch(fetchData('products'));
			}
		}, [dispatch]);

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/cart' element={<AddToCart />} />
			</Routes>
		</div>
	);
};

export default App;
