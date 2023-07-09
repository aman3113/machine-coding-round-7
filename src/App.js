import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CountriesPage from "./Pages/CountriesPage";
import DestinationsPage from "./Pages/DestinationsPage";
import DestinationDetailsPage from "./Pages/DestinationDetailsPage";

function App() {
	return (
		<div className="p-8">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/continent/:continentId/countries"
						element={<CountriesPage />}
					/>
					<Route
						path="/continent/:continentId/countries/:countryId/destinations"
						element={<DestinationsPage />}
					/>
					<Route
						path="/continent/:continentId/countries/:countryId/destinations/:destinationId"
						element={<DestinationDetailsPage />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
