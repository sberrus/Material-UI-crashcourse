import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// style
import "./style/global.css";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<CssBaseline />
		<App />
	</React.StrictMode>
);
