import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import MainTemplate from "./pages/MainTemplate";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainTemplate />}>
				<Route index element={<Home />} />
				<Route path="/:city/:tourId" element={<Tour />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
};

export default App;
