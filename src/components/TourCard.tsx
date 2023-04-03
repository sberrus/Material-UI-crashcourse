import { Paper, Grid, Typography, Box, Rating } from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import "./TourCard.css";

// theme
import { createTheme, ThemeProvider } from "@mui/material";

// typescript overrides for typography
declare module "@mui/material/styles" {
	interface TypographyVariants {
		body3: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		body3?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		body3: true;
		h3: false;
	}
}

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

const TourCard = () => {
	return (
		<Grid item xs={3}>
			<ThemeProvider theme={theme}>
				<Paper square variant="outlined">
					<img
						className="img"
						src="https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFsbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
						alt=""
					/>
					<Box paddingX={1}>
						<Typography variant="subtitle1" color="initial">
							Immerse into the falls
						</Typography>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<AccessTime sx={{ width: ".90rem", paddingBottom: ".1rem" }} />
							<Typography variant="body2" component="p" marginLeft={0.5}>
								5 hours
							</Typography>
						</Box>

						<Box marginTop={3}>
							<Rating name="disabled" size="small" value={3} precision={0.1} readOnly />
							<Typography variant="body2" component="span">
								4.5
							</Typography>
							<Typography variant="body3" component="span">
								(655 reviews)
							</Typography>
						</Box>
						<Box>
							<Typography variant="h6">From C $450</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</Grid>
	);
};

export default TourCard;
