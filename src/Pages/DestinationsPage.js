import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../Data";
import CardComponent from "../Components/CardComponent";

const DestinationsPage = () => {
	const { continentId, countryId } = useParams();
	const continent = data.continents.find(
		(continent) => continent.id === Number(continentId)
	);
	const country = continent.countries.find(
		(country) => country.id === Number(countryId)
	);
	return (
		<div>
			<p className="font-bold text-3xl text-white text-center mb-6">
				Top Destinations in {country.name} for your next holiday
			</p>
			<div className="w-full flex flex-wrap gap-6 justify-center mt-8">
				{country?.destinations?.map((destination) => {
					return (
						<div key={destination.id}>
							<Link
								to={`/continent/${continent.id}/countries/${country.id}/destinations/${destination.id}`}
							>
								<CardComponent details={destination} />
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DestinationsPage;
