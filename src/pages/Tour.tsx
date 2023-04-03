// imports
import { useParams, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// data
import data from "../data/data.json";
import { useEffect, useState } from "react";
import { Tours } from "./Home";

const Tour = () => {
	// hooks
	const { city, tourId } = useParams();
	const navigate = useNavigate();

	// states
	const [tour, setTour] = useState<Tours | null>(null);

	useEffect(() => {
		//   check if city exists
		const cityFound = data.find((cityData) => cityData.id === Number(city));

		// city not found
		if (!cityFound) {
			alert("City not found");
			navigate("/");
		}

		// check if tour exist
		const tourFound = cityFound?.tours.find((tour) => tour.id === Number(tourId)) as Tours;

		if (!tourFound) {
			alert("Tour not found");
			navigate("/");
		}

		// set Tour as state
		setTour(tourFound);
		return () => {};
	}, []);

	return (
		<Container maxWidth="md" sx={{ marginY: 5 }}>
			<Typography variant="h2" component="h1">
				{tour?.name}
			</Typography>
			{/* image */}
			<Box>
				<img className="img" src={tour?.image} alt={tour?.name} />
			</Box>

			{/* about this ticket */}
			<Box>
				<Typography variant="h6" component="h2" marginTop={2} marginBottom={4}>
					About this ticket
				</Typography>
				<Typography variant="body1" color="initial">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam ullam maxime mollitia nostrum
					at quae asperiores consectetur sapiente itaque tenetur, voluptatum eveniet perferendis dolores, fuga
					earum maiores ratione id? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis commodi corporis
					sequi nam accusantium qui omnis. Et magni quod beatae? Suscipit, dignissimos quo. Sunt fugit rerum, sit
					quos doloremque blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita neque at
					laborum ipsa doloribus consequatur nesciunt nisi quia voluptatem odit fuga, amet deserunt accusamus
					pariatur sed nemo nulla, nihil distinctio!
				</Typography>
			</Box>
			{/* frequently asqued questions */}
			<Box>
				<Typography variant="h6" component="h2" marginTop={2} marginBottom={4}>
					Frequently asqued questions
				</Typography>
				<Typography variant="body1" color="initial">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt, tempora, perspiciatis
					sapiente perferendis quidem totam consequatur odio molestias debitis, cum alias vero enim optio impedit
					et. Esse, blanditiis repellat!
				</Typography>
			</Box>
		</Container>
	);
};

export default Tour;
