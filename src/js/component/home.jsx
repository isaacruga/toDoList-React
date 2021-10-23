import React from "react";
import Title from "./title.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<Title />
			<div className="input-group input-group-lg">
				<input
					type="text"
					className="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-lg"
				/>
			</div>
		</div>
	);
};

export default Home;
