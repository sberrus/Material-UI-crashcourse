import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TourCard from "./components/TourCard";
import SearchBarApp from "./components/SearchAppBar";

// data
import cities from "./data/data.json";
import Typography from "@mui/material/Typography";

// types
// types
export interface Tours {
	duration: number;
	id: number;
	image: string;
	name: string;
	numberOfReviews: number;
	price: number;
	rating: number;
}

const App = () => {
	return (
		<>
			<SearchBarApp />
			<Container maxWidth="md" sx={{ marginY: 5 }}>
				{cities.map((city) => (
					<div key={city.id}>
						<Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
							{city.name}
						</Typography>

						<Grid container spacing={2}>
							{city.tours.map((tour) => (
								<TourCard tour={tour} key={tour.id} />
							))}
						</Grid>
					</div>
				))}
			</Container>
		</>
	);
};

export default App;
