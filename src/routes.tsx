import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllAssements } from './pages/AllAssements';
import { Assessment } from './pages/Assessment';
import { HomeAssessment } from './pages/HomeAssessment';
import { Login } from './pages/Login';
import { Success } from './pages/Success';

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
				<Route
					path="/"
					element={token ? <AllAssements /> : <Login />}
				/>
				<Route path="/success" element={token ? <Success /> : <Login />} />
			</Routes>
		</Router>
	);
};
