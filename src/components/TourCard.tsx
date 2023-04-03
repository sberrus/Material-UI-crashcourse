import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";

import AccessTime from "@mui/icons-material/AccessTime";
import "./TourCard.css";

// theme
import { createTheme, ThemeProvider } from "@mui/material";
import { Tours } from "../pages/Home";

// creating new theme
const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "body2",
					},
					style: {
						fontSize: 11,
					},
				},
				{
					props: {
						// see ./types/index.d.ts to see
						// how to handle this type error when adding
						variant: "body3",
					},
					style: {
						fontSize: 9,
					},
				},
			],
		},
	},
});

// types
type TourCardProps = {
	tour: Tours;
	city: number;
};
const TourCard = ({ tour, city }: TourCardProps) => {
	return (
		<Grid item xs={3}>
			<ThemeProvider theme={theme}>
				<Paper square variant="outlined">
					<img className="img cardImg" src={tour.image} alt={tour.name} />
					<Box paddingX={1}>
						<Link href={`/${city}/${tour.id}`} variant="subtitle1">
							{tour.name}
						</Link>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<AccessTime sx={{ width: ".90rem", paddingBottom: ".1rem" }} />
							<Typography variant="body2" component="p" marginLeft={0.5}>
								{tour.duration} hours
							</Typography>
						</Box>

						<Box marginTop={3}>
							<Rating name="disabled" size="small" value={3} precision={0.1} readOnly />
							<Typography variant="body2" component="span">
								{tour.rating}
							</Typography>
							<Typography variant="body3" component="span">
								({tour.numberOfReviews} reviews)
							</Typography>
						</Box>
						<Box>
							<Typography variant="h6">From C ${tour.price}</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</Grid>
	);
};

export default TourCard;
