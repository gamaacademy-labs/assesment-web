import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { HomeAssessment } from "./pages/HomeAssessment";
import { Assessment } from "./pages/Assessment";
import Cookies from "js-cookie"

export const MyRoutes = () => {
	const token = Cookies.get("user");

	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={token ? <HomeAssessment /> : <Login />} />
				<Route
					path="/assessment"
					element={token ? <Assessment /> : <Login />}
				/>
			</Routes>
		</Router>
	);
};
