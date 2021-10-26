import React, { useState } from "react";
import Task from "./task.jsx";

//create your first component
const Home = () => {
	const [list, setList] = useState([]);

	return (
		<div className="d-flex justify-content-center flex-column">
			<div className="mx-auto text-info w-50 p-3">
				<h1 className="text-center mt-5 fw-lighter text-danger text-opacity-25">
					todos
				</h1>
				<input
					onKeyDown={event => {
						if (event.key === "Enter") {
							//se le mete event. porque es un evento, pero puede ser cualquier cosa
							setList([...list, event.target.value]); //para coger el valor que se pone en el input,por costumbre se utiliza evt, e o event
							//...list, se utiliza a menudo en React; agarra el valor antiguo de list (línea 6) y le agrega un nuevo valor
						}
					}}
					type="text"
					className="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-lg"
				/>
				{list.map((item, index) => {
					return <Task key={index} content={item} />;
				})}
			</div>
		</div>
	);
};

export default Home;
