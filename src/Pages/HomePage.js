import React from "react";
import { data } from "../Data";
import { Link } from "react-router-dom";
import CardComponent from "../Components/CardComponent";

const HomePage = () => {
	return (
		<div className="flex flex-col items-center">
			<p className="text-4xl text-white font-bold mb-2">
				Welcome To Trip Advisor
			</p>
			<p className="text-2xl text-blue-500 font-bold mb-8">
				Top continents for your next holiday
			</p>
			<div className="w-full flex flex-wrap gap-6 justify-center mt-6">
				{data.continents.map((continent) => {
					return (
						<div key={continent.id}>
							<Link to={`/continent/${continent.id}/countries`}>
								<CardComponent details={continent} />
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomePage;
