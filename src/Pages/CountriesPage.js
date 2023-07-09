import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../Data";
import CardComponent from "../Components/CardComponent";

const CountriesPage = () => {
	const { continentId } = useParams();
	const continent = data.continents.find(
		(continent) => continent.id === Number(continentId)
	);
	return (
		<div>
			<p className="font-bold text-3xl text-white text-center mb-6">
				Top Countries in {continent.name} for your next holiday
			</p>
			<div className="w-full flex flex-wrap gap-6 justify-center mt-8">
				{continent?.countries?.map((country) => {
					return (
						<div key={country.id}>
							<Link
								to={`/continent/${continent.id}/countries/${country.id}/destinations`}
							>
								<CardComponent details={country} />
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CountriesPage;
