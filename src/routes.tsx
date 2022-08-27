import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { HomeAssessment } from './pages/HomeAssessment';
import { Assessment } from './pages/Assessment';
import Cookies from 'js-cookie';
import AllAssements from './pages/AllAssements';

export const MyRoutes = () => {
	const token = Cookies.get('user');

	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={token ? <HomeAssessment /> : <Login />} />
				<Route
					path="/assessment"
					element={token ? <Assessment /> : <Login />}
				/>
				<Route
					path="/allassessments"
					element={token ? <AllAssements /> : <Login />}
				/>
			</Routes>
		</Router>
	);
};
