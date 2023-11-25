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
		<div className="Proyect" style={{scrollBehavior: "smooth"}}>
			<Navbar/>
			{/* Aqui empieza el div para el body y las cartas. */}

			<div className="container">
				{/* Jumbotron model */}
				<div className="jumbotron">
					<Jumbotron/>
					<hr className="my-4">
						{/* <p className="lead">
						<a className="btn btn-primary" href="#" role="button">Learn more</a>
						</p> */}
					</hr>
				</div>
				{/* Aquí empiezan las cartas */}
					<div className="d-flex"><Cards/></div>
			</div>
			<div className="end"><Footer/></div>
		</div>
	);
};

export default Home;
