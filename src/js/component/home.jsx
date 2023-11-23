import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Cards from "./cards";
import Footer from "./footer";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="Proyect">
			<Navbar/>
			{/* Aqui empieza el div para el body y las cartas. */}

			<div class="container">
				{/* Jumbotron model */}
				<div class="jumbotron">
					<h1 class="display-4">A Warm Welcome!</h1>
					<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					<hr class="my-4">
						{/* <p class="lead">
						<a class="btn btn-primary" href="#" role="button">Learn more</a>
						</p> */}
					</hr>
				</div>
				{/* Aquí empiezan las cartas */}
					<div className="d-flex"><Cards/></div>
			</div>
			<div className="end"><footer/></div>
		</div>
	);
};

export default Home;
