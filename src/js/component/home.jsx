import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="Proyect">
			<nav class="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
				<div class="container-fluid">
					<a class="navbar-brand" href="#">Start Bootstrap</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse flex-inherit" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Services</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

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
				<div class="cards"></div>
			</div>
		</div>
	);
};

export default Home;
