// imports
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

// data
import data from "../data/data.json";
import imagesCollage from "../data/imageList.json";

// types
import { Tours } from "./Home";

// util
function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

const Tour = () => {
	// hooks
	const { city, tourId } = useParams();
	const navigate = useNavigate();
	const isMobile = useMediaQuery("(max-width:780px)");

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
			<Typography variant={isMobile ? "h3" : "h2"} component="h1">
				{tour?.name}
			</Typography>
			{/* image */}
			<Box marginTop={3} sx={{ display: "flex" }}>
				<img
					className="img experience-img"
					style={{ width: isMobile ? "100%" : "60%", height: "325px" }}
					src={tour?.image}
					alt={tour?.name}
				/>
				<ImageList
					variant="quilted"
					cols={4}
					rowHeight={121}
					sx={{ width: isMobile ? "0%" : "40%", height: 325, marginLeft: 1, marginTop: 0 }}
				>
					{imagesCollage.map((item) => (
						<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
							<img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
						</ImageListItem>
					))}
				</ImageList>
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
