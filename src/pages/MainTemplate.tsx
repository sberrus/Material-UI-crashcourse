import SearchBarApp from "../components/SearchAppBar";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
	return (
		<>
			<SearchBarApp />
			<Outlet />
		</>
	);
};

export default MainTemplate;
