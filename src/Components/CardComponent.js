import React from "react";
import { MdLocationPin } from "react-icons/md";

const CardComponent = ({ details }) => {
	const { id, name, image } = details;
	return (
		<div className="w-[20vw] h-[20vw] relative rounded-md overflow-hidden shadow-md shadow-gray-500">
			<img src={image} className="w-full h-full" alt="" />
			<p className="absolute bottom-3 left-2 text-white flex items-center gap-2">
				<MdLocationPin />
				<span>{name}</span>
			</p>
		</div>
	);
};

export default CardComponent;
