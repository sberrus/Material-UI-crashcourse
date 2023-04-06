// imports
import { Outlet } from "react-router-dom";

// components
import SearchBarApp from "../components/SearchAppBar";
import Footer from "../components/Footer";

const MainTemplate = () => {
	return (
		<>
			<SearchBarApp />
			<Outlet />
			<Footer />
		</>
	);
};

export default MainTemplate;
