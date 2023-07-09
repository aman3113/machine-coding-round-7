import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data";

const DestinationDetailsPage = () => {
	const { continentId, countryId, destinationId } = useParams();
	const continent = data.continents.find(
		(continent) => continent.id === Number(continentId)
	);
	const country = continent.countries.find(
		(country) => country.id === Number(countryId)
	);
	const destination = country.destinations.find(
		(destination) => destination.id === Number(destinationId)
	);

	const {
		name,
		description,
		image,
		ratings,
		reviews,
		location,
		openingHours,
		ticketPrice,
		website,
	} = destination;
	return (
		<div className="flex flex-col items-center">
			<p className="font-bold text-3xl text-white mb-6">{name}</p>
			<div className="flex gap-3 w-[80vw] bg-gray-100 p-4 rounded-md">
				<div className="w-[40%]">
					<img src={image} className="w-full h-full" alt="" />
				</div>
				<div className="w-[60%]">
					<p>
						<span className="font-semibold text-blue-600 mr-2">
							Description:
						</span>
						<span>{description}</span>
					</p>
					<p>
						<span className="font-semibold text-blue-600 mr-2">Ratings:</span>
						<span>{ratings}</span>
					</p>
					<p>
						<span className="font-semibold text-blue-600 mr-2">Reviews:</span>
						<span>{reviews}</span>
					</p>
					<p>
						<span className="font-semibold text-blue-600 mr-2">
							Opening Hours:
						</span>
						<span>{openingHours}</span>
					</p>
					<p>
						<span className="font-semibold text-blue-600 mr-2">
							Ticket Price:
						</span>
						<span>{ticketPrice}</span>
					</p>
					<p>
						<span className="font-semibold text-blue-600 mr-2">Location:</span>
						<span>{location}</span>
					</p>
					<p>
						<a
							href={website}
							className="text-purple-800 font-bold hover:text-purple-500"
							target="_blank"
							rel="noreferrer"
						>
							Website
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default DestinationDetailsPage;
