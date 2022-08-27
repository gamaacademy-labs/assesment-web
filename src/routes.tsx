import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { HomeAssessment } from './pages/HomeAssessment';
import { Assessment } from './pages/Assessment';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllAssements } from './pages/AllAssements';

export const MyRoutes = () => {
	const token = Cookies.get('user');

	return (
		<Router>
			<ToastContainer />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/instructions"
					element={token ? <HomeAssessment /> : <Login />}
				/>
				<Route
					path="/assessment"
					element={token ? <Assessment /> : <Login />}
				/>
				<Route path="/" element={token ? <AllAssements /> : <Login />} />
			</Routes>
		</Router>
	);
};
