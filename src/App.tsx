import { Container, Grid } from "@mui/material";
import TourCard from "./components/TourCard";

const App = () => {
	return (
		<Container maxWidth="md">
			<Grid container spacing={2}>
				<TourCard />
				<TourCard />
				<TourCard />
				<TourCard />
			</Grid>
		</Container>
	);
};

export default App;
