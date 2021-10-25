import React from "react";

const Title = () => {
	let styleCSS = {
		fontSize: "5rem"
	};

	return (
		<h1 className="fw-lighter text-danger text-opacity-25" style={styleCSS}>
			todos
		</h1>
	);
};

export default Title;
