import React, { useState } from "react";
import Title from "./title.jsx";

//create your first component
const Home = () => {
	const [list, setList] = useState("hoa");

	return (
		<div className="text-center mt-5">
			<Title />
			<div className="input-group input-group-lg">
				<input
					onKeyUp={x => {
						if (x.keyCode === 13) {
							setList([x.target.value]); //...list (copia de [lis])
						}
					}}
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
