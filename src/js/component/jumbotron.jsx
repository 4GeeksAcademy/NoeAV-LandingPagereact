import React from "react";

const Jumbotron = () => {
	return (
			<div className="container" style={{background:"whitesmoke", marginTop:"10px", padding:"20px"}}>
				{/* Jumbotron model */}
				<div className="jumbotron" style={{padding: "inherit"}}>
					<h1 className="display-4">A Warm Welcome!</h1>
					<p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe alias eius veniam, dicta itaque eveniet, sit inventore ab quod eum nihil. Error iusto maxime quam aliquam voluptatum non hic.</p>
					<p><a className="btn btn-primary btn-lg" role="button">Call to action!</a></p>
				</div>
			</div>
	);
};

export default Jumbotron;